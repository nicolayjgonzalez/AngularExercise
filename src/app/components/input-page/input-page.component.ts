import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { IDataForm } from 'src/app/models/data-form';
import { DataServiceService } from 'src/app/services/data-service.service';
// import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss'],
})
export class InputPageComponent implements OnInit, OnDestroy {
  @Input() page: number | undefined;
  @Output() pageChange = new EventEmitter<number>();
  dataForm: IDataForm = {};
  dataSuscription: Subscription;

  constructor(private dataService: DataServiceService) {
    this.dataSuscription = this.dataService.data$.subscribe((newData) => {
      this.dataForm = newData;
    });
  }

  ngOnInit(): void {}

  continue() {
    this.dataService.setData$(this.dataForm);
    this.pageChange.emit(2);
  }

  ngOnDestroy(): void {
    if (this.dataSuscription) {
      this.dataSuscription.unsubscribe();
    }
  }
}
