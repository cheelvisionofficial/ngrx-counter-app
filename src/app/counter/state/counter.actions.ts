import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');

export const loadInitialValue = createAction('[Counter] Load Initial Value',props<{ value: number }>());
export const loadInitialValueSuccess = createAction(
  '[Counter] Load Initial Value Success',
  props<{ value: number }>()
);
export const loadInitialValueFailure = createAction(
  '[Counter] Load Initial Value Failure',
  props<{ error: string }>()
);
