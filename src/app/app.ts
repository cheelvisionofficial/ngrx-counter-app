import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CounterComponent,    
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ngrx-counter-app');
}
