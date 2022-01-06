import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadedItems, loadItems } from 'src/app/state/actions/items.actions';
import { selectLoading } from 'src/app/state/selectors/items.selectors';
import { ItemModel } from "@core/models/Item.interface";

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {

  loading$:Observable<any> = new Observable()
  constructor(
    private store: Store<any>, 
    private showCaseService: ShowCaseService) {


  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading)
    this.store.dispatch(loadItems())

    // this.showCaseService.getDataApi().subscribe((respuesta:ItemModel[]) =>{
    //   this.store.dispatch(loadedItems({
    //     items:respuesta
    //   }))
    // })
  }


}
