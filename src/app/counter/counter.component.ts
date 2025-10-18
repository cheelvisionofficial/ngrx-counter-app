import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from './state/counter.actions';
import * as CounterSelectors from './state/counter.selectors';
import { CounterState } from './state/counter.reducer';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  imports: [AsyncPipe,CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  private readonly store = inject(Store<CounterState>);

  count$: Observable<number> = this.store.select(CounterSelectors.selectCount);
  isLoading$: Observable<boolean> = this.store.select(CounterSelectors.selectIsLoading);
  error$: Observable<string | null> = this.store.select(CounterSelectors.selectError);

  handleIncrement() {
    this.store.dispatch(CounterActions.increment());
  }

  handleDecrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  handleReset() {
    this.store.dispatch(CounterActions.reset());
  }

  handleLoadValue() {
    this.store.dispatch(CounterActions.loadInitialValue({value: 10}));
  }
}
