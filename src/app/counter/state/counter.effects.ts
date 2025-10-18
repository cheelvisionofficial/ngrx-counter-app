import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CounterActions from './counter.actions';
import { catchError, delay, EMPTY, map, mergeMap, Observable, of, tap } from 'rxjs';
import { CounterState } from './counter.reducer';
import { Action, Store } from '@ngrx/store';

@Injectable()
export class CounterEffects {
  private readonly actions$ = inject(Actions);
  private readonly store = inject(Store<CounterState>);

  // loadInitialValue$: Observable<ReturnType<typeof CounterActions.loadInitialValueSuccess>> = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(CounterActions.loadInitialValue),
  //     map(() => {
  //       return CounterActions.loadInitialValueSuccess({ value:123 })
  //     })
  //   )
  // );

  loadInitialValue$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CounterActions.loadInitialValue),
      mergeMap(() =>
        of(Math.floor(Math.random() * 100)).pipe(
          delay(2000),
          tap((value) => this.store.dispatch(CounterActions.loadInitialValueSuccess({ value }))),
          catchError(() => {
            this.store.dispatch(
              CounterActions.loadInitialValueFailure({ error: 'Failed to load value' })
            );
            return EMPTY; // ✅ EMPTY = no further emissions
          })
        )
      )
    ),
    { dispatch: false } // ✅ important line
  );
}
  