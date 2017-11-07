# BeautyCounter Front End Test

## Part one: UI

Your UI designer provides the comps (attached) for part of a page. Translate it into HTML/CSS without using a pre-made UI kit such as Foundation or Bootstrap. Feel free to use a pre/post-processor, however. The UI is expected to gracefully adapt to mobile, tablet and desktop in the browser.

Notes:
+ [ ] The menu bar will scroll on mobile

Ideal:
+ [ ] Writes clean, reusable classes
+ [ ] Use of naming pattern e.g. BEM
+ [ ] UI correctly adapts to viewport sizing
+ [ ] Eye for correct typography, color and sizing

### Instructions

*Tested on Edge, Chrome, Firefox and Mobile Safari.

```
npm install
npm run start:dev
```

## Part two: State & API integration
Marketing would like to display information about characters using the Star Wars API (https://swapi.co/).
Create a search bar with autocomplete that queries Star Wars character names with an option to select a character. Feel free to use any JavaScript framework of your liking.
Styling/CSS is not assessed in this section, so feel free to use prepackaged UI kits such as Bootstrap.

Notes:
+ [ ] Upon selection of Star Wars characters, the UI will populate with full + information about the character such as name, height, home planet etc.
+ [ ] Going back to the search and selecting a new character will update the + information listed on the fly.
+ [ ] Clicking on the home planet takes the user to a new route with information + about the home planet as listed from the API (2nd API call)
+ [ ] Marketing would also like the UI to display a picture of the character. The + API, however, does not provide a picture attribute.  Add an additional hook to + scrape images for the selected character so that you can show an image.

Ideal:
+ [ ] Use of a JavaScript framework
+ [ ] Use of state management
+ [ ] Modular & DRY with use of a design pattern
+ [ ] Use of promises/generators/observables etc. rather than callbacks

### Instructions

