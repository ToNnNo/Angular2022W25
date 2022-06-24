import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Film } from '../../../interfaces/film.interface';

@Component({
  selector: 'app-form-film',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() film?: Film;
  @Output() submitEvent = new EventEmitter<Film>()

  form = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    released: new FormControl(null),
    director: new FormControl(null),
    plot: new FormControl(null)
  })

  constructor() { }

  ngOnInit(): void {
    if( this.film ) {
      this.form.setValue({
        title: this.film?.title,
        released: this.film?.released,
        director: this.film?.director,
        plot: this.film?.plot,
      });
    }
  }

  public titleIsValid(): boolean {
    const title = this.form.get('title')!;
    return title.touched && title.hasError('required');
  }

  public submit(): void {
    this.form.markAllAsTouched();

    if( this.form.valid ) {
      this.submitEvent.emit(this.form.getRawValue());
    }
  }

}
