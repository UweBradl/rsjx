import { Observable } from 'rxjs';

const oberservable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed.');
  subscriber.next('Alice');
  subscriber.next('Ben');
  setTimeout(() => {
    subscriber.next('Charlie');
  }, 2000);
  setTimeout(() => {
    subscriber.error(new Error('ERROR'))
  }, 4000)
  return () => {
    console.log('Teardown');
  };
});

console.log('Before subscribe.');
oberservable$.subscribe({
  next: (value) => console.log(value),
  error: err => console.log(err.message),
  complete: () => console.log('Completed'),
});
console.log('After subscribe.');
