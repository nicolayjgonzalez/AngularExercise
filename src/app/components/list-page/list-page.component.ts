import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { IDataForm } from 'src/app/models/data-form';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})

export class ListPageComponent implements OnInit, OnDestroy {

  @Input()  page: number | undefined;
  @Output() pageChange = new EventEmitter<number>();
  dataForm: IDataForm = {};
  dataSuscription: Subscription;

  
  constructor(private dataService: DataServiceService) {
    this.dataSuscription = this.dataService.data$.subscribe((newData)=>{
      this.dataForm = newData;
    });    
  }
  
  ngOnInit(): void {
  }

  continue(){
    this.pageChange.emit(3);
  }

  backPage(){
    this.pageChange.emit(1);
  }
  
  ngOnDestroy(): void {
    if (this.dataSuscription) {
      this.dataSuscription.unsubscribe();
    }
  }

}
