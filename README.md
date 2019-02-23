# react-express-docker-skeleton
A skeleton React/Express/Docker app

After downloading, run `npm run install` once to install the dependencies.

Run `npm run dev` to start the development server.

Run `npm run prod` to start the production server.

This project contains an Express.js app in the "api" folder and a React.js app in the "client" folder. The development configuration starts the Express and React apps in their own containers. The production configuration builds the React app and copies the build artifacts into the same container as the Express app. The express app then serves up the React files along with the API.   

Caveats: The production configuration isn't exactly production-ready as it really should have something like nginx in front of the Express app and serving up the React files. 
