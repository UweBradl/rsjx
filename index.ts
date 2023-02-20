import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const endpointInput: HTMLInputElement = 
  document.querySelector('input#EndpointInput');
const fetchButton = document.querySelector('input#ClickButton');  

fromEvent(fetchButton, 'click').pipe(
  map(() => endpointInput.value)
).subscribe(
  value => console.log(value)
);


