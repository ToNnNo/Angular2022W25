import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Film } from 'src/app/interfaces/film.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  film?: Film;

  constructor(private filmService: FilmService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if(params.has('id')) {
        this.filmService.find(+params.get('id')!).subscribe({
          next: (film: Film) => {
            this.film = film;
          },
          error: (error) => {
            this.router.navigateByUrl('/404')
          }
        })
      }else{
        this.router.navigateByUrl('/404')
      }
    });
  }

  public edit(data: Film): void {
    let film = {...this.film, ...data}; // merge de 2 objets
    this.filmService.edit(film.id!, film).subscribe( (film: Film) => {
      this.router.navigateByUrl('/films');
    });

  }

}
