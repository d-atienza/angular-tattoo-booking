import { Component } from '@angular/core';
import { TattooDesign } from '../tattoo-gallery';

@Component({
  selector: 'app-tattoo-gallery',
  imports: [],
  templateUrl: './tattoo-gallery.component.html',
  styleUrl: './tattoo-gallery.component.css'
})
export class TattooGalleryComponent {
  tattooOption: TattooDesign = {
      id: 1,
      title: 'A1',
      category: 'Flash',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbbdu9R6o5u4bjK6jXT76WIKsiMKPXW007JQ&s',
      description: 'Pepe The Frog'
    };
}
