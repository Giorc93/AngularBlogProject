import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public secText = 'Form Text';

  public user: any;
  public field: string;

  constructor() {
    this.user = {
      name: '',
      surname: '',
      bio: '',
      genre: '',
    };

    this.field = '';
  }

  ngOnInit(): void {}

  onSubmit(): any {
    console.log(this.user);
  }

  clickEvent(): any {
    alert('Click pressed');
  }

  onBlur(): any {
    alert('Blur event');
  }

  keyEvent(): any {
    alert('Enter key up event');
  }
}
