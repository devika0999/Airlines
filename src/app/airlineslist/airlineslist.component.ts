import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-airlineslist',
  templateUrl: './airlineslist.component.html',
  styleUrls: ['./airlineslist.component.css']
})
export class AirlineslistComponent implements OnInit {

  constructor(private myapi:ApiService) { 
         
    this.fetchData()

  }

  fetchData=()=>{
    this.myapi.viewAirlines().subscribe(
      (data)=>{
        this.airlines=data
      }
    )
  }

  airlines:any=[]

  ngOnInit(): void {
  }

}
