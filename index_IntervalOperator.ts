import { Observable, interval } from 'rxjs';

console.log('App started');

const subscription = interval(1000).subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completed')
});

setTimeout(() => {
  console.log('Unsubscribe')
  subscription.unsubscribe();
}, 5000);

// const interval$ = new Observable<number>(subscriber => {

//   let counter = 0;

//   const intervalId = setInterval(() => {
//     console.log('TimeOut');
//     subscriber.next(counter++);
//   }, 1000);
//   return () => clearInterval(intervalId);
// });

// const subscription = interval$.subscribe({
//   next: value => console.log(value),
// });

// setTimeout(() => {
//   console.log('Unsubscribe')
//   subscription.unsubscribe();
// }, 5000);