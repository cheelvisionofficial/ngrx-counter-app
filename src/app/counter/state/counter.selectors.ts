import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';

// Step 1: Select Feature Slice
export const selectCounterFeature = createFeatureSelector<CounterState>('counter');

// Step 2: Create specific selectors
export const selectCount = createSelector(selectCounterFeature, (state) => state.count);
export const selectIsLoading = createSelector(selectCounterFeature, (state) => state.isLoading);
export const selectError = createSelector(selectCounterFeature, (state) => state.error);
