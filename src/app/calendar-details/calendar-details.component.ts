import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarDetails } from '../calendar-details';

@Component({
  selector: 'app-calendar-details',
  imports: [FormsModule],
  templateUrl: './calendar-details.component.html',
  styleUrl: './calendar-details.component.css'
})
export class CalendarDetailsComponent {
  
  calendar : CalendarDetails = {
    calendar: '',
    calendarDateSelected: '',
  }

  dateSelected() {
    let dateParsed = String(this.calendar.calendar);
    if (dateParsed !== '') {
      console.log(dateParsed)
    }
  }
  
}
