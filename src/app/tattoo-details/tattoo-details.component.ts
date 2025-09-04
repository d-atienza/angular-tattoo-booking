import { Component, OnInit } from '@angular/core';
import { NgOptionComponent, NgSelectComponent } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { BodyPartOptions, SizeOptions } from '../../tattoo-details';

@Component({
  selector: 'app-tattoo-details',
  imports: [NgSelectComponent, FormsModule, NgOptionComponent],
  templateUrl: './tattoo-details.component.html',
  styleUrl: './tattoo-details.component.css'
})
export class TattooDetailsComponent implements OnInit {

  selectedBodyPart = [1];
	bodyParts = [
      { id: 1, label: 'Arm (Upper)' },
      { id: 2, label: 'Arm (Lower)' },
      { id: 3, label: 'Leg (Upper)' },
      { id: 4, label: 'Leg (Lower)' },
      { id: 5, label: 'Back (Upper)' },
      { id: 6, label: 'Back (Lower)', disabled: true },
  ];

selectedSize = [1];

  sizes = [
      { id: 1, label: '2 inches' },
      { id: 2, label: '3 inches' },
      { id: 3, label: '4 inches' },
      { id: 4, label: '5 inches' },
      { id: 5, label: '6 inches', disabled: true },
    ]

	ngOnInit() {}

	toggleDisabled() {
		const bodyPart: any = this.bodyParts[1];
		bodyPart.disabled = !bodyPart.disabled;
    const size: any = this.sizes[1];
		size.disabled = !size.disabled;
	}

  
}
