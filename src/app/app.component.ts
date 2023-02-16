import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService) { }
  logout() {
    this.authService.doLogout()
  }

  // name: string = 'John';
  // count: number = 5;
  // gender: string = 'male';
  // amount: number = 7.5;
  // currentDate: number = Date.now();

  // company: string = 'Localizely';
  // footerMessage: string = $localize`:Component argument message example@@message.component-argument:Made with ❤️ by ${this.company}`;

}