import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';
import { Film } from '../../../interfaces/film.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private filmService: FilmService, private router: Router) { }

  ngOnInit(): void {
  }

  public save(data: Film): void {
    this.filmService.save(data).subscribe( (film: Film) => {
      this.router.navigateByUrl('/films');
    });

  }

}
