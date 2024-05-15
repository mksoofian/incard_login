Deployed in Vercel: https://incard-login.vercel.app/
Mimiced basic design from: https://www.incard.co/

Primary objectives:

- Practice creating (login) forms.
- Session persistence and expiration.

Requirements:

- [x] - It should consist of at least two pages - the login and a home page.
- [x] - It should be functional e.g. login should take users to the home page - use 'incard' for username and password.
- [x] - It should Handle errors e.g. if incorrect details were entered or session has expired.
- [x] - The session should be persistent e.g. on page reload the user should not be taken back to the login page. If the session has expired then they should be redirected back to the login page.
- [ ] - It would be nice to support SSR.
- [ ] - Create 2-3 unit tests.
- [ ] - Deploy the app to Netlify.

Updates recommended by mentor 5/10/24

- [x] - Note above as checkboxes
- [x] - fix hover and pointer on login button
- [x] - update color to match incard's
- [-] - don't mix and match styling of classNames and inLine. Choose 1 to avoid issues
- [x] - add hover to nav links
- [x] - move local storage checks and isLoggedIn checks to providers
- [x] - move authContext to body of Providers. No need for the seperate component
- [x] - remove extra div from the header
- [x] - remove useEffect from nav
- [x] - create handleLogout and move the logic from nav into a function in the Provider and to the AuthContext
- [x] - move the logic of signIn and logOut into the return
- [x] - move home into App
- [x] - use === not ==
- [x] - add useEffect to provider and move isLoggedIn logic from the onSubmit there
- [ ] - add protected routes & unprotected routes
    // NOTES: Cannot figure out why refreshing page after logging in is setting state to false...?
- [x] -add invalid/username password --> implement this error with setError from react-form
