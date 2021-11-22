import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [];
  tasksCounter: number = 2;

  constructor() {
    this.tasks = [
    {
    id: 0,
    title: 'Ordenar el escritorio',
    description: 'Sacarlo todo, limpiar y tirar lo que no sirve.',
    duration: 20
    },
    {
    id: 1,
    title: 'Hacer la colada',
    description: 'Separar la ropa blanca de la ropa de color.',
    duration: 30
    }
    ];
  }

  public getTasks(): Task[] {
    return this.tasks
  }

  public getTask(id: number): Task {
    return { ...this.tasks.filter(t => t.id === id)[0] }
  }

  public saveTask(t: Task) {
    if(t.id == undefined) { // si no tiene ID significa que hemos seleccionado una nueva tarea
      t.id = this.tasksCounter++;
      this.tasks.push(t);
    } else { // si tiene ID significa que hemos seleccionado una tarea concreta
      this.deleteTask(t.id);
      this.tasks.push(t);
    }
  }

  public deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id != id)
  }
}
