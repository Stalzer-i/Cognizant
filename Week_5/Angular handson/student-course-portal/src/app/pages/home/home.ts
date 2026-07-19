import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
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
// [property] binding is one-way: data flows from the component class into the DOM only.
// [(ngModel)] is two-way: it both displays the component's value in the DOM AND
// updates the component's property when the user changes the input, keeping both in sync.