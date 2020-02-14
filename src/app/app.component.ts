import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  linkRef: HTMLLinkElement;

  toggleValue = false;

  themes = [
    { name: 'Light', href: 'https://unpkg.com/clarity-ui/clarity-ui.min.css' },
    { name: 'Dark', href: 'https://unpkg.com/clarity-ui/clarity-ui-dark.min.css' }
  ];
  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId) {
    if (isPlatformBrowser(this.platformId)) {
      let theme = this.themes[0];
      try {
        const stored = localStorage.getItem('theme');
        if (stored) {
          theme = JSON.parse(stored);
          this.toggleValue = theme.name === 'Dark';
        }
      } catch (e) {
        // Nothing to do
      }
      this.linkRef = this.document.createElement('link');
      this.linkRef.rel = 'stylesheet';
      this.linkRef.href = theme.href;
      this.document.querySelector('head').appendChild(this.linkRef);
    }
  }

  setTheme() {
    const theme = this.toggleValue ? this.themes[1] : this.themes[0];
    localStorage.setItem('theme', JSON.stringify(theme));
    this.linkRef.href = theme.href;
  }
}
