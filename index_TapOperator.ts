import { of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

// tap logged den Output von filter und somit den Input von map
// Gut zum Debuggen
of(1, 7, 3, 6, 2)
  .pipe(
    filter((value) => value > 5),
    tap(
      (value) => console.log('Spy: ', value)),
    map((value) => value * 2)
  )
  .subscribe((value) => console.log('Output: ', value));
