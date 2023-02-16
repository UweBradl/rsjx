import { Observable } from 'rxjs';

const interval$ = new Observable<number>(subscriber => {
  let counter = 1;
  const intervalId = setInterval(() => {
    console.log('Counting');
    subscriber.next(counter++)
  }, 2000);
  return () => {
    clearInterval(intervalId);
  }
});

const subscribtion = interval$.subscribe( 
  value => console.log(value)
);

setTimeout(() => {
  console.log('Unsubscribe');
  subscribtion.unsubscribe();
}, 7000);
