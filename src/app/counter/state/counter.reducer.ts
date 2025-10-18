import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export interface CounterState {
  count: number;
  isLoading: boolean;
  error: string | null;
}

export const initialState: CounterState = {
  count: 0,
  isLoading: false,
  error: null,
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => ({ ...state, count: state.count + 1 })),
  on(CounterActions.decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(CounterActions.reset, (state) => ({ ...state, count: 0 })),
  on(CounterActions.loadInitialValue, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(CounterActions.loadInitialValueSuccess, (state, { value }) => ({
    ...state,
    count: value,
    isLoading: false,
  })),
  on(CounterActions.loadInitialValueFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
