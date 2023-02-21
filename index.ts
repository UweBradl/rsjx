import { Subject, fromEvent, BehaviorSubject } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

const loggedInSpan: HTMLElement = document.querySelector('span#logged-in');
const loginButton: HTMLElement = document.querySelector('button#login');
const logoutButton: HTMLElement = document.querySelector('button#logout');
const printStateButton: HTMLElement = document.querySelector('button#print-state');

// Usage of behavior subject with inital logged in status
const isLoggedIn$ = new BehaviorSubject<boolean>(false);

fromEvent(loginButton, 'click').subscribe(() => isLoggedIn$.next(true));
fromEvent(logoutButton, 'click').subscribe(() => isLoggedIn$.next(false));

// Navigation bar
isLoggedIn$.subscribe(
  isLoggedIn => loggedInSpan.innerText = isLoggedIn.toString()
);

// Show or hide buttons
isLoggedIn$.subscribe(isLoggedIn => {
  loginButton.style.display = isLoggedIn ? 'none' : 'block';
});
isLoggedIn$.subscribe(isLoggedIn => {
  logoutButton.style.display = isLoggedIn ? 'block' : 'none';
});

fromEvent(printStateButton, 'click').pipe(
  withLatestFrom(isLoggedIn$)
).subscribe(
  ([event, isLoggedIn]) => console.log('Login state: ', isLoggedIn)
);

// Usage of normal subject
// const isLoggedIn$ = new Subject<boolean>();

// fromEvent(loginButton, 'click').subscribe(() => isLoggedIn$.next(true));
// fromEvent(logoutButton, 'click').subscribe(() => isLoggedIn$.next(false));

// // Navigation bar
// isLoggedIn$.subscribe(
//   isLoggedIn => loggedInSpan.innerText = isLoggedIn.toString()
// );

// // Show or hide buttons
// isLoggedIn$.subscribe(isLoggedIn => {
//   loginButton.style.display = isLoggedIn ? 'none' : 'block';
// });
// isLoggedIn$.subscribe(isLoggedIn => {
//   logoutButton.style.display = isLoggedIn ? 'block' : 'none';
// });

