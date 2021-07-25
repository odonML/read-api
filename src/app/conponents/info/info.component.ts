import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  user= [];
  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.route.params.subscribe((params) =>{
      const id = params['id'];
      console.log(id);
      this.getDetail(id);
    })
  }
  getDetail(id){
    this.data.getById(id).subscribe((data: any) =>{
      this.user=data.data;
    })
  }
}
