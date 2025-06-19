MongoDB, ExpressJs, ReactJs, NodeJs

- command to run Backend : npm run dev
- command to run frontend : npm run dev

- APIs tested using Postman
  packages used : express, mongoose(for connecting to mongodb,schema,model), bcryptjs(for password hashing),dotenv(to access env variables)
  react-router-dom(for navigation)

step1:
Files and Folder Structure
-Backend

- .env (sensitive info stored)
- .gitignore (files and folders not to upload on github)
- models folder (user,board,task)
- router folder
- controller folder
- config folder

step 2:
. created server using express
. created schema and model
. database connection established
. created routes
. created controllers for signup,signin,crud of task and board

-Frontend
.commands used : npm create vite @latest .
npm i
npm run dev

- created pages
  .SignIn
  .SignUp
  .Home
  \*Tailwind css configuration
