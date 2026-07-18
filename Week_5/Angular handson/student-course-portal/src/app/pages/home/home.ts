import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  portalName = 'Student Course Portal';
isPortalActive = true;
message = '';
searchTerm = '';

onEnrollClick() {
  this.message = 'Enrollment opened!';
}
}
