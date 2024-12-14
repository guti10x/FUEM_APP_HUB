import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrl: './app-card.component.scss'
})
export class AppCardComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
