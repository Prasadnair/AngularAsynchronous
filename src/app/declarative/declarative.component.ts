import { Component } from '@angular/core';
import { catchError,combineLatest, EMPTY,map} from 'rxjs';
import {DeclarativeService} from './declarative.service';
@Component({
  selector: 'app-declarative',
  templateUrl: './declarative.component.html',
  styleUrls: ['./declarative.component.scss']
})
export class DeclarativeComponent {
errorMessage ='';

users$ = this.declarativeService.users$.pipe(
  catchError(err => {
    this.errorMessage = err;
    return EMPTY;
  })
);

todos$ = this.declarativeService.todos$.pipe(
  catchError(err => {
    this.errorMessage = err;
    return EMPTY;
  })
);

selectedUser$ = this.declarativeService.selectedUser$.pipe(
  catchError(err => {
    this.errorMessage = err;
    return EMPTY;
  })
);

usersWithTodos$ = this.declarativeService.usersWithTodos$.pipe(
  catchError(err => {
    this.errorMessage = err;
    return EMPTY;
  })
)

vm$ = combineLatest([
  this.selectedUser$,
  this.todos$
]).pipe(
  map(([user, todos]) => ({ user, todos }))
);



constructor(private declarativeService: DeclarativeService){}

onSelected(userId: number): void {
  this.declarativeService.onSelected(userId);
}

}
