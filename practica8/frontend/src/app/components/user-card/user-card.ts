import { Component, Input } from '@angular/core';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.html', 
  styleUrl: './user-card.scss'     
})
export class UserCardComponent {
  // Con esto, la tarjeta exige que le pasemos un usuario para existir
  @Input({ required: true }) user!: User; 
}