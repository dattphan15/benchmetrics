# Benchmetrics
An assessment project created with React, Express.JS and Postgres. Benchmetrics is a Data Analytics company that provides businesses with insights of their performance over time and comparison to similar websites.

<br>  

### Server Dependencies  

-  "cors": "^2.8.5",
-  "dotenv": "^16.0.1",
-  "express": "^4.18.1",
-  "fast-csv": "^4.3.6",
-  "fs": "0.0.1-security",
-  "multer": "^1.4.5-lts.1",
-  "nodemon": "^2.0.19",
-  "pg": "^8.7.3",
-  "sequelize": "^6.21.2"  


### Client Dependencies
-  "@testing-library/jest-dom": "^5.16.4",
-  "@testing-library/react": "^13.3.0",
-  "@testing-library/user-event": "^13.5.0",
-  "axios": "^0.27.2",
-  "bootstrap": "^5.1.3",
-  "react": "^18.2.0",
-  "react-bootstrap": "^2.4.0",
-  "react-dom": "^18.2.0",
-  "react-scripts": "5.0.1",
-  "web-vitals": "^2.1.4"

<br>  

# Run The Project


##  Start the server
1. Create an `.env` file following the example format in the server directory.

2. Launch Postgres

3. Insert Database Schema located in `server/db/schema/01_analytics.sql` and verify the columns are appearing in the `analytics` table.

4. Install Postman (Desktop version) and create a form-data POST request to `localhost:3001/api`.  

```js
key: file-data  
// upload the data.csv file
value: data.csv
```

Once you receive a 200 status OK, the data is loaded into the database and ready to fetch from the frontend client.

5. Follow the below steps to start the backend server.  
`cd ~/server`  
`npm install`  
`npm start`

<br>  

## Start the frontend client
`cd ~/client`  
`npm install`  
`npm start`
