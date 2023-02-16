import { fromEvent, Observable, Subscriber } from 'rxjs';

const triggerButton = document.querySelector('button#ClickButton');

const subscription = fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
  (event) => console.log(event.type, event.x, event.y)
);

setTimeout(() => {
  console.log('Unsubscribed');
  subscription.unsubscribe();
}, 5000);

// const triggerClick$ = new Observable<MouseEvent>((subscriber) => {

//   const clickHandlerFunction = event => {
//     console.log('Event callback executed');
//     subscriber.next(event);
//   }

//   triggerButton.addEventListener('click', clickHandlerFunction);
//   // TearDown logic
//   return () => {
//     triggerButton.removeEventListener('click', clickHandlerFunction);
//   }
// });

// const subscription = triggerClick$.subscribe(
//   event => console.log(event.type, event.x, event.y)
// );

// setTimeout(() => {
//   console.log('Unsubscribed');
//   subscription.unsubscribe();
// }, 5000);
