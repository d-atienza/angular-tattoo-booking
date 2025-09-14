import { Component, ElementRef, input, ViewChild } from '@angular/core';
import { TattooDesignOptions } from '../tattoo-gallery';

@Component({
  selector: 'app-tattoo-gallery',
  imports: [],
  templateUrl: './tattoo-gallery.component.html',
  styleUrl: './tattoo-gallery.component.css'
})
export class TattooGalleryComponent {
tattooDesigns: TattooDesignOptions[] = [
  {
    id: 0,
    title: "Custom",
    category: "Custom",
    imageURL: "https://live.staticflickr.com/65535/54776783975_d4794bb98f_n.jpg",
    description: ""
  },
  {
    id: 1,
    title: "A1",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777810089_f381dd06b0_n.jpg",
    description: ""
  },
  {
    id: 2,
    title: "A2",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777810074_4b01b007c2_n.jpg",
    description: ""
  },
  {
    id: 3,
    title: "A3",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54776733122_0c65c96e34_n.jpg",
    description: ""
  },
  {
    id: 4,
    title: "A4",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777820898_0c65c96e34_n.jpg",
    description: ""
  },
  {
    id: 6,
    title: "A5",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777820888_02394f6f64_n.jpg",
    description: ""
  },
  {
    id: 7,
    title: "R0",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777921420_02394f6f64_n.jpg",
    description: ""
  },
  {
    id: 8,
    title: "R1",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777810049_0257b6570f_n.jpg",
    description: ""
  },
  {
    id: 10,
    title: "R2",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777921410_b782475494_n.jpg",
    description: ""
  },
  {
    id: 11,
    title: "R3",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777820858_9e71680a55_n.jpg",
    description: ""
  },
  {
    id: 12,
    title: "R4",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777921400_5e0eb2c761_n.jpg",
    description: ""
  },
  {
    id: 13,
    title: "R5",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777587016_1f3c4cee66_n.jpg",
    description: ""
  },
  {
    id: 14,
    title: "S1",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777921395_ebddb6d091_n.jpg",
    description: ""
  },
  {
    id: 15,
    title: "S2",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777810044_c2ba8c57ed_n.jpg",
    description: ""
  },
  {
    id: 16,
    title: "S3",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777810039_dd25b4c107_n.jpg",
    description: ""
  },
  {
    id: 17,
    title: "S4",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54776733112_fd01bdcc81_n.jpg",
    description: ""
  },
  {
    id: 18,
    title: "S5",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777820843_e86e3d5c57_n.jpg",
    description: ""
  },
  {
    id: 19,
    title: "K1",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777921365_5d44c21163_n.jpg",
    description: ""
  },
  {
    id: 20,
    title: "K2",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54776733062_9fed4b4608_n.jpg",
    description: ""
  },
  {
    id: 21,
    title: "F1",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777810024_9787f8de4d_n.jpg",
    description: ""
  },
  {
    id: 22,
    title: "R6",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777820778_fbb65e6a01_n.jpg",
    description: ""
  },
  {
    id: 23,
    title: "W1",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777587031_519365a662_n.jpg",
    description: ""
  },
  {
    id: 24,
    title: "W2",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777586986_47bdf4f9f4_n.jpg",
    description: ""
  },
  {
    id: 25,
    title: "W3",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777820813_c729a9b299_n.jpg",
    description: ""
  },
  {
    id: 26,
    title: "W4",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777921355_b2403c788e_n.jpg",
    description: ""
  },
  {
    id: 27,
    title: "W5",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777586976_8e582a4f8c_n.jpg",
    description: ""
  },
  {
    id: 28,
    title: "W6",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777820793_ddf18b942d_n.jpg",
    description: ""
  },
  {
    id: 29,
    title: "W7",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777809999_c61391aafe_n.jpg",
    description: ""
  },
  {
    id: 30,
    title: "W8",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54776733087_5e9e89b6d1_n.jpg",
    description: ""
  },
  {
    id: 31,
    title: "W9",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777820788_8633710021_n.jpg",
    description: ""
  },
  {
    id: 32,
    title: "W10",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777810004_f01c97ff88_n.jpg",
    description: ""
  },
  {
    id: 33,
    title: "S6",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777809994_1d441edb9d_n.jpg",
    description: ""
  },
  {
    id: 34,
    title: "S7",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54776733067_ff995302a4_n.jpg",
    description: ""
  },
  {
    id: 35,
    title: "S8",
    category: "Flash",
    imageURL: "https://live.staticflickr.com/65535/54777586946_b54e6d559f_n.jpg",
    description: ""
  }
];
}
