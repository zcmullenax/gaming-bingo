import { Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfig } from './app.config';
import { LayoutService } from '../services/layout.service';
import { CommonModule } from '@angular/common';
import { UserSettings } from './user-settings/user-settings';
import { DialogModule } from 'primeng/dialog';
import { CreateBingoCard } from "./create-bingo-card/create-bingo-card";
import { ExclamationPointBingo } from './exclamation-point-bingo/exclamation-point-bingo';


@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, ButtonModule, StyleClassModule, AppConfig, UserSettings, DialogModule, CreateBingoCard, ExclamationPointBingo ],
  template: `
    <div class="topbar-container">
      <div class="topbar-brand">
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="var(--p-primary-color)" d="M332.9 64.9C327.4 64.2 321.9 66.3 318.4 70.6C314.9 74.9 313.8 80.7 315.6 86C318.4 94.2 319.9 102.9 319.9 112.1C319.9 156.2 284.2 192 240.1 192.1L224 192C188.7 192 160 220.7 160 256C160 275.1 168.4 292.3 181.7 304L168 304C128.2 304 96 336.2 96 376C96 399.2 107 419.8 124 433C89.9 438.7 64 468.3 64 504C64 543.8 96.2 576 136 576L504 576C543.8 576 576 543.8 576 504C576 468.3 550.1 438.7 516 433C533 419.8 544 399.2 544 376C544 336.2 511.8 304 472 304L458.3 304C471.6 292.3 480 275.1 480 256C480 220.7 451.3 192 416 192L410.5 192C414 182 416 171.2 416 160C416 111.4 379.8 71.2 332.9 64.9zM256 320C273.7 320 288 334.3 288 352C288 369.7 273.7 384 256 384C238.3 384 224 369.7 224 352C224 334.3 238.3 320 256 320zM352 352C352 334.3 366.3 320 384 320C401.7 320 416 334.3 416 352C416 369.7 401.7 384 384 384C366.3 384 352 369.7 352 352zM416 460.3C416 462.7 415.3 465.1 413.8 467C405.6 477.5 374.3 512 320 512C265.7 512 234.4 477.4 226.2 467C224.7 465.1 224 462.7 224 460.3C224 453.5 229.5 448 236.3 448L403.7 448C410.5 448 416 453.5 416 460.3z"/></svg>
        <span class="topbar-brand-text">
          <span class="topbar-title">Gaming Bingo</span>
        </span>
      </div>
      <div class=topbar-actions>
        <p-button (click)="handleCreateCardClick()">Create Bingo Card</p-button>
        <div class="relative">
          <p-button
            pStyleClass="@next"
            enterFromClass="hidden"
            (click)="getRandomRoll()"
            enterActiveClass="animate-scalein"
            leaveToClass="hidden"
            leaveActiveClass="animate-fadeout"
            [hideOnOutsideClick]="true"
            icon="pi pi-play-circle"
            label="!bingo"
            text
            rounded
            aria-label="!Bingo"
            
          />
          <app-exlamation-point-bingo class="hidden" [currentRoll]="currentRoll" />  
          
        </div>
      </div>
      <div class="topbar-actions">
        <p-button
          type="button"
          class="topbar-theme-button"
          (click)="toggleDarkMode()"
          text
          rounded
        >
          <i
            class="pi"
            [ngClass]="{
              'pi-moon': isDarkMode(),
              'pi-sun': !isDarkMode()
            }"
          ></i>
        </p-button>
        <div class="relative">
          <p-button
            pStyleClass="@next"
            enterFromClass="hidden"
            enterActiveClass="animate-scalein"
            leaveToClass="hidden"
            leaveActiveClass="animate-fadeout"
            [hideOnOutsideClick]="true"
            icon="pi pi-cog"
            text
            rounded
            aria-label="Settings"
          />
          <app-config class="hidden" />
        </div>
        <div class="relative">
          <p-button
            pStyleClass="@next"
            enterFromClass="hidden"
            enterActiveClass="animate-scalein"
            leaveToClass="hidden"
            leaveActiveClass="animate-fadeout"
            [hideOnOutsideClick]="true"
            icon="pi pi-user"
            text
            rounded
            aria-label="Settings"
          />
          <app-user-settings class="hidden" />
        </div>
        
      </div>
    </div>
    @if(showCreateCardWindow) {
        <p-dialog [modal]="false" header="Create Cards" [(visible)]="showCreateCardWindow" [style]="{width: '90vw'}">
            <span class="p-text-secondary block mb-8">How many cards do you want?</span>
            <app-create-bingo-card/>
        </p-dialog>
    }
    
  `,
  host: {
    class: 'topbar',
  },
})
export class AppTopbar {
  layoutService: LayoutService = inject(LayoutService);

  isDarkMode = computed(() => this.layoutService.appState().darkMode);
  showCreateCardWindow: boolean = false;

  possibleRolls: string[] = ['B1','I1','N1','G1','O1','B2','I2','N2','G2','O2','B3','I3','G3','O3','B4','I4','N4','G4','O4','B5','I5','N5','G5','O5'];
  currentRoll: string = "";

  toggleDarkMode() {
    this.layoutService.appState.update((state) => ({
      ...state,
      darkMode: !state.darkMode,
    }));
  }

  handleCreateCardClick() {
    this.showCreateCardWindow = true;
  }
  getRandomRoll(): void {
    const randomIndex = Math.floor(Math.random() * this.possibleRolls.length);
    this.currentRoll = this.possibleRolls[randomIndex];
  }
}