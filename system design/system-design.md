1) Requirements gathering : 
functional requirements - user flows, features, screen breakdown.

2) HLD : What are the major pieces and how do they communicate?
Decide frontend architecture
Routing, State Management, API Contract, Caching, Real-time Strategy
Folder Architecture.
Deployment Tool or strategy.

3) LLD : How to design each piece/feature/component. 
component writing -> state -> props -> API integration -> custom hook.

Uptil here, are thinking steps and noting on paper

Now actions : 
4) Project setup & Basic Library install:

5) component deisgn as thought in lld.

6) Edge cases

7) Error handling 

8) Performance

9) Scalability + Maintainability

10) Testing / Security

11) Deployment


# Requirement 

An Email Login as patient -> add blood group, location -> maplist and donor details -> emergrncy request created -> nearby donors are notified.
An Email Login as donor -> add blood group, location, mode : charity/pay ->  donor registered 
                        -> receives emergency request -> accept or reject -> patient notified -> patient accepts the acceptance by donor

Emergency Request - status, mode : null (initially) after donor is confirmed - charity/pay
At transaction point -> donor requests settlement -> if the mode od accepted request is - pay . Patient sees - settle by pay else simply - approve settlement done.

Note :  1 email can have one donor and 1 patient account.


# HLD 
1) Authentication ans session - how long a user remains validated , system knows that the user is existing. When exactly the user will be logged out.
- possible tech stack - db authentication, firebase auth, AuthO (Very capable, but probably more infrastructure than you need for this project), Other Third-party (but extra platform involved), 
- we'll choose => firebase auth , because frontend-heavy project. It provides local, session (survives page refreshes, ends when tab/browser is closed) and none - (cannot survive page refreshes) peristence types. we will choose localstorage. We can customize also (eg. after 30 days of inactivity)

2) keep the ActiveMode somewhere so that the app's UI can be shown accordingly.
- possible tech - db, sessionStorage (but activeMode info is lost when tab is closed), localStorage, IndexedDB (good for Large offline application data), React Query (good for Large offline application data), state management library (zustand, context API, redux), firebase authenticated object.

ques. Why we will not use firebase authenticated object ? 
donor → patient → donor without changing their authentication identity. Can be used for fixed role like user is admin, and not currently the user is using admin side. Also, changing Firebase custom claims involves backend/admin operations and token propagation. You don't want a server round-trip/token refresh every time the user switches.

ques. Why not use db ? 
The user is logged-in in laptop as donor. the same user account then logs in from mobile as patient, then in the next api call or page refresh , based on the response rhe the laptop user will become donor. this is not correct.

- We will choose : zustand . Since the activeMode is app's global state we will use state management and zustand is lightweight and good choose of light state. And with its persistence middleware, it can synchronize that state with storage.
zustand + will the store this state in-memory that is when the app is running. when tab is closed and reopened - it rehydrates and bring back state.

3) Storing emergency request







