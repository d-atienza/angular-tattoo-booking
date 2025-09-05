import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

interface ContactForm {
  firstName: string,
  lastName: string,
  email: string,
  mobile: string,
  additionalNotes: string,
}

@Component({
  selector: 'app-form-details',
  imports: [FormsModule],
  templateUrl: './form-details.component.html',
  styleUrl: './form-details.component.css'
})

export class FormDetailsComponent {
  
  // contact details
  form : ContactForm = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    additionalNotes: '',
  }

  submit() {
    console.log(this.form)

    emailjs.send('service_zm2klxz', 'template_mv5bhni', {...this.form}, {publicKey: '2RTRStL7xKPYzKNMx'})
      .then(
        () => {
          console.log('Sent!');
          window.confirm("Enquiry has been submitted :)");
          let form = document.getElementById('contact-details')
          if(form) (form as HTMLFormElement).reset(); 
        },
        (error) => {
          console.log('Failed :(', (error as EmailJSResponseStatus).text);
        },)
  }
}
