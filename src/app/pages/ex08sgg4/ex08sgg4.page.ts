import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-ex08sgg4',
  templateUrl: './ex08sgg4.page.html',
  styleUrls: ['./ex08sgg4.page.scss'],
})
export class Ex08sgg4Page implements OnInit {

  constructor(private tasksService: TasksService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  goEditTask(id: number) {
    this.router.navigateByUrl(`/edit-task${id != undefined ? '/' + id : ''}`);
  }

  deleteTask(id: number) {
    this.tasksService.deleteTask(id)
  }

  async goTaskInfo(t: Task) {
    console.log('alerta');
    const alert = await this.alertController.create({
      header: 'Información de la tarea',
      message: `<p class="ion-text-start"><strong>${t.title}</strong></p>
                <p class="ion-text-start">${t.description}</p>
                <p class="ion-text-start"><ion-icon name="alarm-outline" slot="start"></ion-icon> ${t.duration} minutos</p>`,
      buttons: [
        {
          text: 'Aceptar',
          role: 'Aceptar'
        }
      ]
    });
    await alert.present();
  }

  async confirmDeleteTask(t: Task) {
    console.log('alerta');
    const alert = await this.alertController.create({
      header: 'Borrar tarea',
      message: `¿Estás seguro de que quieres borrar la tarea <strong> ${t.title}</strong>?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Aceptar',
          handler: () => {
            this.deleteTask(t.id);
          }
        }
      ]
    });
    await alert.present();
  }
}