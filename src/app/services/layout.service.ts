import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import { Subject } from 'rxjs';

export interface AppState {
  preset: string;
  primary: string;
  surface: string | undefined | null;
  darkMode: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  _appState: AppState = {
    preset: 'Aura',
    primary: 'emerald',
    surface: null,
    darkMode: false,
  };

  appState = signal<AppState>(this._appState);

  transitionComplete: WritableSignal<boolean> = signal<boolean>(false);

  private initialized = false;

  private appStateUpdate = new Subject<AppState>();

  appStateUpdate$ = this.appStateUpdate.asObservable();

  constructor() {
    effect(() => {
      const appState = this.appState();
      if (appState) {
        this.onAppStateUpdate();
      }
    });

    effect(() => {
      const state = this.appState();

      if (!this.initialized || !state) {
        this.initialized = true;
        return;
      }

      this.handleDarkModeTransition(state);
    });
  }

  private handleDarkModeTransition(config: AppState): void {
    if ((document as any).startViewTransition) {
      this.startViewTransition(config);
    } else {
      this.toggleDarkMode(config);
      this.onTransitionEnd();
    }
  }

  private startViewTransition(config: AppState): void {
    const transition = (document as any).startViewTransition(() => {
      this.toggleDarkMode(config);
    });

    transition.ready
      .then(() => {
        this.onTransitionEnd();
      })
      .catch(() => {});
  }

  toggleDarkMode(appState?: AppState): void {
    const _appState = appState || this.appState();
    if (_appState.darkMode) {
      document.documentElement.classList.add('p-dark');
    } else {
      document.documentElement.classList.remove('p-dark');
    }
  }

  private onTransitionEnd() {
    this.transitionComplete.set(true);
    setTimeout(() => {
      this.transitionComplete.set(false);
    });
  }

  onAppStateUpdate() {
    this._appState = { ...this.appState() };
    this.appStateUpdate.next(this.appState());
    this.toggleDarkMode();
  }
}