import { Injectable} from '@angular/core';
import { Observable,of } from 'rxjs';
import { Task } from '../Task';
import { TASK } from '../task.mock';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks() :Observable<Task[]>  {
    const tasks = of(TASK);
    return tasks;
  }
}
