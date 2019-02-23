# react-express-docker-skeleton
A skeleton React/Express/Docker app

After downloading, run `npm run install` once to install the dependencies.

Run `npm run dev` to start the development server.

Run `npm run prod` to start the production server.

This project contains an Express.js app in the "api" folder and a React.js app in the "client" folder. The development configuration starts the Express and React apps in their own containers. The production configuration builds the React app and copies the build artifacts into the same container as the Express app. The Express app then serves up the React files along with the API.   

In the development configuration, the Express app serves an API on port 3001 and the React app serves HTML/CSS/JS on port 3000. 

In the production configuration, the Express app serves an API on port 3001, but it is not publicly accessible. Nginx runs on port 80 and proxies API requests to the Express app on port 3001.
