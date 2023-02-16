import { Observable, Subscriber } from 'rxjs';

// This example doesn't work, because
// the button isn't shown for any reasons

const helloButton = document.querySelector('button#hello');

const helloClick$ = new Observable<MouseEvent>( subscriber => {
  helloButton.addEventListener('click', (event) => {
    subscriber.next(event);
  });
});

helloClick$.subscribe(
  event => console.log('Sub1: ', event.type, event.x, event.y)
);

setTimeout(() => {
  console.log('Subscription 2 started');
  helloClick$.subscribe(
    event => console.log('Sub2: ', event.type, event.x, event.y)
  );
}, 5000);


