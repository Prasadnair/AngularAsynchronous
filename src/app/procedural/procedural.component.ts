import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ToDo,User,ProceduralService} from './procedural.service'
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-procedural',
  templateUrl: './procedural.component.html',
  styleUrls: ['./procedural.component.scss']
})
export class ProceduralComponent implements OnInit {
  errorMessage='';
  users:User[]=[];
  selectedUser?:User;
  todo:ToDo[]=[];
  
  constructor(private proceduralService:ProceduralService,private http:HttpClient){

  }
  
  ngOnInit(): void {
    this.proceduralService.getUsers().subscribe(
      users=>this.users =users
    )
  }

  // Nested subscribes 🚫
  onSelectedx(userId: number): void {
    this.http.get<User>(`${this.proceduralService.userUrl}/${userId}`).pipe(
      tap(user => this.selectedUser = user),
      tap(user => this.http.get<ToDo[]>(`${this.proceduralService.todoUrl}?userId=${user.id}`).pipe(
        tap(todos => this.todo = todos)
      ).subscribe(data => console.log('todos:', data))
      ),
    ).subscribe(data => console.log('user:', data));
  }

  // Higher order mapping operator ➕
  onSelected(userId: number): void {
    this.http.get<User>(`${this.proceduralService.userUrl}/${userId}`).pipe(
      tap(user => this.selectedUser = user),
      switchMap(user =>
        this.http.get<ToDo[]>(`${this.proceduralService.todoUrl}?userId=${user.id}`).pipe(
          tap(todos => this.todo = todos)
        ))
    ).subscribe();
  }

}
