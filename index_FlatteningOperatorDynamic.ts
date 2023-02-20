import { fromEvent, of, EMPTY } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, concatMap, catchError } from 'rxjs/operators';

const endpointInput: HTMLInputElement = 
  document.querySelector('input#endpoint');
const fetchButton = document.querySelector('button#fetch');  

// Bei falschem Suchwert wird Fehler nach außen durchgereicht.
// fromEvent(fetchButton, 'click').pipe(
//   map(() => endpointInput.value),
//   concatMap(value =>
//   // Inner subscription
//   ajax(
//     `https://random-data-api.com/api/${value}/random_${value}`)
//   ),
// ).subscribe({
//     next: value => console.log(value),
//     error: err => console.log('Error: ', err)
// });

// Bei falschem Suchwert wird nur complete gesendet 
// und der Fehler unterdrückt
// Bei complete läuft die äußere Scubscription dann auch 
// nicht mehr.
// fromEvent(fetchButton, 'click').pipe(
//   map(() => endpointInput.value),
//   concatMap(value =>
//   // Inner subscription
//   ajax(
//     `https://random-data-api.com/api/${value}/random_${value}`)
//   ),
//   catchError(() => EMPTY)
// ).subscribe({
//     next: value => console.log(value),
//     error: err => console.log('Error: ', err),
//     complete: () => console.log('Completed')
// });

// In diesem Beispiel wird der Fehler in der Inner 
// Subscription geworfen und dort abgefangen.
// Die äußere Subscription läuft weiter.
fromEvent(fetchButton, 'click').pipe(
  map(() => endpointInput.value),
  concatMap(value =>
  // Inner subscription
  ajax(
    `https://random-data-api.com/api/${value}/random_${value}`).pipe(
      catchError(error => of(`Could not get data: ${error}`))
    )
  ),
).subscribe({
    next: value => console.log(value),
    error: err => console.log('Error: ', err),
    complete: () => console.log('Completed')
});
