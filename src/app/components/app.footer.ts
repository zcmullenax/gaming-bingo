import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="footer-container">
      <div class="footer-copyright">2026 TrelliCorp.</div>
      <div class="footer-links">
        <a
          href="https://twitter.com/TrellionSpiers"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          <i class="pi pi-twitter footer-icon"></i>
        </a>
        <a
          href="https://discord.gg/TdKWQy9"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          <i class="pi pi-discord footer-icon"></i>
        </a>
        <a
          href="https://github.com/brianwhitesides"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          <i class="pi pi-github footer-icon"></i>
        </a>
      </div>
    </div>
  `,
  host: {
    class: 'footer',
  },
})
export class AppFooter {}