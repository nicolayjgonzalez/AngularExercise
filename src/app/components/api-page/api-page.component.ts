import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayerI } from 'src/app/models/player.interface';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrls: ['./api-page.component.scss']
})
export class ApiPageComponent implements OnInit, OnDestroy {

  @Input()  page: number | undefined;
  @Output() pageChange = new EventEmitter<number>();

  playerList: PlayerI[] = [];
  playerListSuscription: Subscription;

  constructor(private dataService: DataServiceService) {
    this.playerListSuscription = this.dataService.consumeData().subscribe((res)=>{
      this.playerList = res.values;
    });
   }

  ngOnInit(): void {
  }

  ngOnDestroy():void {
    if (this.playerListSuscription) {
      this.playerListSuscription.unsubscribe();
    }
  }

  startAgain(){
    this.pageChange.emit(1);
  }

  backPage(){
    this.pageChange.emit(2);
  }

}
