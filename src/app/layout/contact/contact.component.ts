import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      shouldAddToNewsletter: new FormControl(false)
    });
  }

  public onSubmit() {
    let message = '';
    if (this.contactForm.value.shouldAddToNewsletter) {
      message = `Message was successfully sent for ${this.contactForm.value.name}! We will get back to you at our earliest conveience at ${this.contactForm.value.email}, thank you for signing up for our Newsletter!`;
    } else {
      message = `Message was successfully sent for ${this.contactForm.value.name}! We will get back to you at our earliest conveience at ${this.contactForm.value.email}. If you would like to opt in to our Newsletter please submit another form.`;
    }
    alert(message);
  }

}
