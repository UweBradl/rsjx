// Simulation an error
import { Observable, forkJoin } from 'rxjs';

const a$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.next('A');
    subscriber.complete();
  }, 3000)
  return () => {console.log('A TearDown')}
});

const b$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.error('ERROR');
  }, 5000)
  return () => {console.log('B TearDown')}
});

forkJoin([a$, b$]).subscribe({
  next: value => console.log(value),
  error: err => console.log('Failed: ', err)
});

