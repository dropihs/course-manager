import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'jonh';
  title = 'course-manager';
  userData = {
    email: 'joaquim@email.com',
    password: '123456',
    role: 'admin'
  }
}
