import { Component, ElementRef, input, ViewChild } from '@angular/core';
// import { TattooDesignOptions } from '../tattoo-gallery';

@Component({
  selector: 'app-tattoo-gallery',
  imports: [],
  templateUrl: './tattoo-gallery.component.html',
  styleUrl: './tattoo-gallery.component.css'
})
export class TattooGalleryComponent {

  // tattooOptions: TattooDesignOptions[] = [
  //   {
  //     id: 1,
  //     title: 'A1',
  //     category: 'Flash',
  //     imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQ6wLbAn7aIIt23c-fPy3Wp0HcYqJYj-4cw&s',
  //     description: 'Pepe The Frog'
  //   },
  //   { id: 2,
  //     title: 'A2',
  //     category: 'Flash',
  //     imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU44pORy1uY_CYPpUs5unLlKhOAulnNgRosA&s',
  //     description: 'Pepe The Frog'
  //   }
  // ];



  @ViewChild('teams') teams!: ElementRef;
	selectedTeam = '';
	onSelected():void {
		this.selectedTeam = this.teams.nativeElement.value;
	}

  // tattooOptions = input.required<TattooDesignOptions>();

  // showMSG() {
  //   console.log(this.tattooOptions().title + ' design has been selected');
  // }
}
