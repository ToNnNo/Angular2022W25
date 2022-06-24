import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  users$?: Observable<User[]>;

  /**
   * private userService?: UserService;
   * constructor(userService: UserService) {
   *  this.userService = userService;
   * }
   */
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    /*this.userService.findAll().subscribe( (users: User[]) => {
      this.users = users;
    });*/

    this.userService.findAll().subscribe({
      // success
      next: (users: User[]) => {
        this.users = users;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('fini ...');
      }
    });

    try {
      this.users$ = this.userService.findAll();
    } catch(e){
      console.log(e)
    } finally {
      console.log('fini 2 ..')
    }
  }

  public createUser(): void {
    const user = { name: 'Stéphane', username: 'ToNo', email: 'john.doe@gmail.com', phone: '06 118 218 00' };
    this.userService.create(user).subscribe( (user: User) => {
      console.log(user);
    })
  }
}
