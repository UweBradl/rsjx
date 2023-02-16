import { from } from 'rxjs';

// From oprator with arry as parameter
// const nameArr = ['Alica', 'Ben', 'Charlie'];

// from(nameArr).subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });

// From operator with promise as parameter
const somePromise = new Promise((resolve, reject) => {
  // resolve('Resolved');
  reject('Rejected');
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: (value) => console.log(value),
  error: err => console.log('Error: ', err),
  complete: () => console.log('Completed')
});
