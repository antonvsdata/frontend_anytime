## Coursework for a Front-End Development course

This repository contains assignments and a projects for the CT70A9110 Software Development Skills: Front-End Anytime course offered by LUT University.

The folder coursework holds the exercises, made according to the great [videos by Traversy Media](https://www.youtube.com/watch?embed=no&v=gYzHS-n2gqU).

### The project

The project folder holds my project: A draft of a website for Kuopio Society of Technology (Kuopion Teknillinen Seura).  The website is hosted using GitHub Pages. [Link to deployed project webiste](https://antonvsdata.github.io/frontend_anytime/).  
For a tour of the project, see the [video description](https://youtu.be/BISOIrZmS9s).

The project is built with HTML5, Sass and vanilla JavaScript.

#### Running the project locally
To view the project locally, clone the repository, and open the file ```project/dist/index.html```. If you want to modify the project, you need to install Sass. First [install Node.js](https://nodejs.org/en/download/) to get the Node package manager, then navigat to the project folder and run:

```
npm init
npm install sass
```

You are then set to modify the project however you see fit! To automatically compile the Sass scripts to CSS, run ```npm run sass```.

#### Looking at the code

The project is organized as follows:

- the dist folder contains an HTML file for each page
- img folder contains all the images
- js folder contains JavaScript files used to change the language and control menu behaviour for smaller screens.
- css folder contains the compiled CSS file. Do no edit this by hand, since the styling is done in Sass.
- scss folder contains the Sass files:
  - main.scss: Styles for general elements and contact info page
  - _config.scss: Settings for the background image and transitions
  - _menu.scss: Horizontal navigation bar
  - _menu_mobile.scss: Menu behind hamburger button
  - _mobile.scss: Responsiveness, choosing between menus
  - _form.scss: Form style
