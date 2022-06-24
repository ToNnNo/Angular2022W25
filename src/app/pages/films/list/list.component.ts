import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmService } from '../../../services/film.service';
import { Observable } from 'rxjs';
import { Film } from '../../../interfaces/film.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  films$?: Observable<Film[]>;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.films$ = this.filmService.findAll();
  }

  public remove(id: number): void {
    this.filmService.delete(id).subscribe(() => {
      this.films$ = this.filmService.findAll();
    })
  }

}
