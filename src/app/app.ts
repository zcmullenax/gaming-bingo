import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { AppTopbar } from './components/app.topbar';
import { AppFooter } from './components/app.footer';
import { MainBingoCard } from './components/main-bingo-card/main-bingo-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule, AppTopbar, AppFooter, MainBingoCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('gaming-bingo');
}
