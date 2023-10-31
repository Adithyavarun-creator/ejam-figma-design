# ejam design task implemented using Reactjs

## What is been created in this repository

This project is a Figma design to React js Application

1. Creating multiple Components in React
2. Converting Figma designs to react js code for 2 screens
3. Using images and icons from Figma design
4. Handling designs in media queries of above 1500px and 360px to 500px(So totally 2)
5. Deployed in Vercel

## Live Application URL

### https://ejam-figma-design.vercel.app

This URL has the application deployed in Vercel as per instructions

## Prerequisites

### create a react application using npx create-react-app -my-todo --template-typescript

Vite requires Node.js version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

```bash
npm create vite@latest
```

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm run dev
```

The Application Runs on **localhost:3000**

## Application design

#### Components

1. **TopBar** Component : This Component contains the website shopping policies with icons and texts

2. **Header** Component : This Component contains logo and the secured way of virus policied and terms

3. **App** Component : This is the main Component contains the route for Desktop View and Mobile View

4. **Footer** Component : This Component contains email and encryption details

#### Pages

1. **Homepage** Page : This page contains the click functions for both mobile and desktop view

2. **Desktop** Page : This Component contains the design view which has screen resoultion or width greater than 1500px. So this will not display design less than 1500px width of your screen

3. **Mobile** Page : This Component contains the design view which has screen resoultion or width within 360px-500px. So this will not display design less than 360px and greater than 500px width of your screen

#### Routes

The application has a react-router-dom routing to 2 routes, one is for mobile view(360px-500px) and another one for desktop view(1600px) as per given in figma design

## Resources

**npm create vite@latest** : The following link has all the commands that can be used with npm create vite@latest
https://github.com/Adithyavarun-creator/ejam-figma-design
