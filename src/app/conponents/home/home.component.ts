import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Object;

  titulo: boolean = false;
  constructor( private data: DataService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.data.getUser().subscribe(data =>{
      this.users=data;
      console.log(this.users);
    })
  }




  clickUno(){
    console.log("un clcik");
    this.titulo=true;
  }

  doble(){
    console.log("dos clciks");
  }
  hover(){
    console.log("hover activado");
  }
  afuera(){
    console.log("fuera de mi vida bb");
  }

  rapido(){
    console.log("click rapido");
  }
  suelta(){
    console.log("suelta el button");
  }
}
