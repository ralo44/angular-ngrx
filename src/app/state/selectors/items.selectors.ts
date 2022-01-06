import { ItemsState } from '@core/models/item.state';
import { createSelector, createFeatureSelector, FeatureConfig } from '@ngrx/store';
import { AppState } from "../app.state";

export const selectItemsFeature = (state: AppState) => state.items

export const selectListItems = createSelector(
    selectItemsFeature,
    (state:ItemsState) => state.items
)
export const selectLoading = createSelector(
    selectItemsFeature,
    (state:ItemsState) => state.loading
)