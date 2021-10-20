import { Component } from '@angular/core';
import { IDataForm } from './models/data-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularExercise';
  page = 1;
  dataForm: IDataForm = {};
}
