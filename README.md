## Calculator app
This project is about a calculator app that does the basic math function (+,-,x,/) and '=','AC','+/-','%' functonalities.
Online Preview: https://calculatorsemifinal.herokuapp.com/

## Screenshot

![screenshot](https://github.com/userman95/calculator/blob/develop/public/Screenshot%20(177).png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for further development.

### Installing

Necessary tools to be installed: 
* [Node.js, npm](https://www.npmjs.com/get-npm)
* [React](https://www.codecademy.com/articles/react-setup-i)

## Built With

* Node.js
* React-DOM
* React-Create-App
* npm 6.4.1
* Javascript (ES6)
* HTML5
* CSS3

## Run the application
### Clone the repository
`git clone git@github.com:userman95/calculator.git`
### and then just run it with 
`npm start`

### cheers!

## Deployment

To deploy your app in Github-pages, install gh-pages module from npm.
Run: `npm install gh-pages --save-dev` and then go to your `package.json` file,
add homepage: `"homepage": "http://username.github.io/my-app"` , at the start of the file , 
and 
```
"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
```
Finally, run `npm run deploy` and wait for it till is throws a `Published message`

## Authors

* **[Orestis Kaplanis](https://github.com/userman95)**
