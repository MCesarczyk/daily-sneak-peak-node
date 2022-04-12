# Teacher's assistant
## Backend setup:
1. Clone GitHub repository.

2. Run 
```
npm install
```
in root folder.

1. Create `.env` file by copying `.env.template`.
2. Setup database.
   1. Install PostgreSQL globally using method of choice, depending on your system.

   2. Log in as user `postgres`.
   3. Create user.
   4. Crease database for development and production.
   5. Give new user permissions to database.
   6. Write down credentials and also database name into `.env` file.
   7. Install pg-migrator globally
      ```
      npm install -g pg-migrator
      ```
   8. Go to `/sql/migrate` directory.
   9. Roll migrations
      ```
      $ pg-migrator postgres://username:password@localhost/daily_sneak_peak_development
      (daily_sneak_peak_production)
      ```
3. Run Node server
    ```
    npm run devstart
    ```
    The server will start on [*http://localhost:5000*](http://localhost:5000)

4. Check backend operation (GET, POST, PUT) by invoking testing functions from `/utils` folder.\
   You can also check RestAPI operation using `curl` in console or using tools like: *[Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/)*

5. If you need API only to use with your own frontend, just end here, remove `Frontend` directory and deploy the app.

____
## Frontend setup:
1. Run 
```
yarn install
```
in `/Frontend` directory.

2. When in *`development`*, start App using:
```
yarn start
```
3. On *`production`* create production build calling:
```
npm run build
```
4. Next run 
```
`node client.js` 
```
   or use supervisor program of your choice,
    ex. *[pm2](https://pm2.keymetrics.io/)* to serve `index.html` indirectly through serving agent: `client.js`\

   5. Open [*http://localhost:4000*](http://localhost:4000) to view it in your browser.\
       The page will reload when you make changes.\
   You may also see any lint errors in the console.

___
## Frontend testing:

1. Launch the test runner, Jest, in the interactive watch mode.
```
yarn test
```
2. To check coverage, run: 
```
yarn coverage
```
and open `'/Frontend/coverage/index.html'` in your browser.

Enjoy! 😃🍸🎉