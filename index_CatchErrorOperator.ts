import { Observable, of, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Fehlgeschlagenen Reqest simulieren
const failingHttpRequest$ = new Observable(subscriber => {
  setTimeout(() => {subscriber.error(new Error('Timeout'));
  }, 3000);
});

console.log('App started')

// Definierten Wert zurück geben
// failingHttpRequest$.pipe(
//   catchError(error => of('Fallback value'))
// ).subscribe(
//   value => console.log(value)
// )

// Nichts zurück geben, nur Complete ausführen
failingHttpRequest$.pipe(
  catchError(error => EMPTY)
).subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completed')
}
)

