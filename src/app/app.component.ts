import { Component } from '@angular/core';
import { TattooGalleryComponent } from './tattoo-gallery/tattoo-gallery.component';
import { TattooDesignOptions } from './tattoo-gallery';
import { FormDetailsComponent } from './form-details/form-details.component';
import { CalendarDetailsComponent } from './calendar-details/calendar-details.component';

@Component({
  selector: 'app-root',
  imports: [TattooGalleryComponent, FormDetailsComponent, CalendarDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
[x: string]: any;
  title = 'Dani\'s Tattoo Booking';

  

  
}
