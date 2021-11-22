import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})

export class EditTaskPage implements OnInit {

  task: Task = {title: '', description: '', duration: undefined}

  constructor(private tasksService: TasksService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.task = this.tasksService.getTask(+id)
    }
  }

  saveTask() {
    this.tasksService.saveTask(this.task)
    this.router.navigateByUrl('/ex08sgg4')
  }
}
