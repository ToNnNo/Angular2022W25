import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = {};

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      const id = +params.get('id')!;
      if( !isNaN(id) ) {
        this.userService.find(id).subscribe( (user: User) => {
          this.user = user;
        })
      }
    });
  }

}
