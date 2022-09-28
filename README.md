# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). 
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Advice generator app solution](#frontend-mentor---advice-generator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Extra features added](#extra-features-added)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

&#9745; View the optimal layout for the app depending on their device's screen size

&#9745; See hover states for all interactive elements on the page

&#9745; Generate a new piece of advice by clicking the dice icon

### Extra features added

&#9745; Disabled the button for the duration of caching to allow for better UX.

&#9745; Added loading animation to the button during its disabled period.

&#9744; Smooth transitions of advice text content.

### Screenshot

<img src="completed-screenshot.png" >

### Links

-   Live Site URL: [Netlify](https://jakegodsall-advice-generator.netlify.app/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   SASS
-   7-1 SASS Architecture
-   Mobile-first workflow
-   XMLHttpRequest object

### What I learned

-   This is the first project I have worked on involving external API's. I understand that the
    XMLHttpRequest object is a somewhat outdated solution to asynchronous data retrieval, but I
    wanted to understand how it all works from the ground up.

-   I learned about the `Cache-Control` HTTP headerfield and its corresponding `max-age` directive.

### Useful resources

-   [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) Cache-Control HTTP Header

## Author

-   Website - [Jake Godsall](https://jakegodsall.com)
-   Frontend Mentor - [@jakegodsall](https://www.frontendmentor.io/profile/jakegodsall)
-   LinkedIn - [@godsalljake](https://www.linkedin.com/in/godsalljake/)

## Acknowledgments

I received significant advice regarding the caching of API responses from
[Alexander Morse](https://github.com/Sakeran) on Frontend Mentor.
