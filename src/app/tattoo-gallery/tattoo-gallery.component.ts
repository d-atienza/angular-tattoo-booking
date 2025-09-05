import { Component, input } from '@angular/core';
import { TattooDesignOptions } from '../tattoo-gallery';

@Component({
  selector: 'app-tattoo-gallery',
  imports: [],
  templateUrl: './tattoo-gallery.component.html',
  styleUrl: './tattoo-gallery.component.css'
})
export class TattooGalleryComponent {
  tattooOptions = input.required<TattooDesignOptions>();

  showMSG() {
    console.log('design selected');
  }
}
