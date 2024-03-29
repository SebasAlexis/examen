import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Informacion } from '../../models/Informacion';

@Component({
  selector: 'app-regulaciones',
  templateUrl: './regulaciones.component.html',
  styleUrls: ['./regulaciones.component.css']
})

export class RegulacionesComponent implements OnInit {
  informaciones: Informacion[] = [];

  constructor(private informacionService: InformacionService) {}

  ngOnInit() {
    this.informacionService.getInfo().subscribe(data => {
      this.informaciones = data;
      console.log(this.informaciones);
    });
  }
}

