import { Component } from '@angular/core';
import { TattooGalleryComponent } from './tattoo-gallery/tattoo-gallery.component';

@Component({
  selector: 'app-root',
  imports: [TattooGalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dani\'s Tattoo Booking';
}
