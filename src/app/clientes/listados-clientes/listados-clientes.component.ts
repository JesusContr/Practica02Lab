import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from '../cliente.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listados-clientes',
  templateUrl: './listados-clientes.component.html',
  styleUrls: ['./listados-clientes.component.css']
})
export class ListadosClientesComponent implements OnInit {

  clientes: Cliente[] =[

  ];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientes=this.clientesService.getClientes();
  }

}
