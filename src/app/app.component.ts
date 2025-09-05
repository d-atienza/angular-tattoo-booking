import { Component } from '@angular/core';
import { TattooGalleryComponent } from './tattoo-gallery/tattoo-gallery.component';
import { TattooDesignOptions } from './tattoo-gallery';
// import { TattooDetailsComponent } from './tattoo-details/tattoo-details.component';
import { FormDetailsComponent } from './form-details/form-details.component';

@Component({
  selector: 'app-root',
  imports: [TattooGalleryComponent,FormDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
[x: string]: any;
  title = 'Dani\'s Tattoo Booking';

  tattooOptions: TattooDesignOptions[] = [
    {
      id: 1,
      title: 'A1',
      category: 'Flash',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQ6wLbAn7aIIt23c-fPy3Wp0HcYqJYj-4cw&s',
      description: 'Pepe The Frog'
    },
    { id: 2,
      title: 'A2',
      category: 'Flash',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU44pORy1uY_CYPpUs5unLlKhOAulnNgRosA&s',
      description: 'Pepe The Frog'
    }
  ];

  
}
