import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

const sliderInput = document.querySelector('input#Slider');

// Eingabe mit debounceTime verzögern.
// Nur der letzte Wert wird nach 2 Sekunden übermittelt
fromEvent(sliderInput, 'input').pipe(
  debounceTime(2000),
  map(event => event.target['value'])
).subscribe(
  value => console.log(value)
);
