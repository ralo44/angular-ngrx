import { ItemModel } from '@core/models/Item.interface';
import { ItemsState } from '@core/models/item.state';
import { createReducer, on } from '@ngrx/store';
import { loadedItems, loadItems } from '../actions/items.actions';


export const initialState: ItemsState= {loading:false, items:[]}

export const itemsReducer = createReducer(
    initialState,
    on(loadItems, (state) =>{
        return {... state, loading:true }
    }),
    on(loadedItems, (state, {items}) =>{
        return {... state, loading:false, items:items }
    })
  );