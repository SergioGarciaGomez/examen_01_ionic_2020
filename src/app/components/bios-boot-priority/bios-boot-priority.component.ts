import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bios-boot-priority',
  templateUrl: './bios-boot-priority.component.html',
  styleUrls: ['./bios-boot-priority.component.scss'],
})
export class BiosBootPriorityComponent implements OnInit {

  biosComponents: string[] = [
    'Hard drive 1',
    'Hard drive 2',
    'USB',
    'CD ROM',
    'PXE' 
  ];

  constructor() { }

  ngOnInit() {
  }

  public subirElemento(name: string) {
    //la posicion del nombre buscado
    const position: number = this.biosComponents.indexOf(name);
    //ahora cambiamos nuestro array
    const aux = this.biosComponents[position - 1];
    this.biosComponents[position - 1] = name;
    this.biosComponents[position] = aux;
  }

  public bajarElemento(name: string) {
    //la posición del nombre buscado
    const position: number = this.biosComponents.indexOf(name);
    //ahora cambiamos nuestro array
    const aux = this.biosComponents[position + 1];
    this.biosComponents[position + 1] = name;
    this.biosComponents[position] = aux;
  }
}
