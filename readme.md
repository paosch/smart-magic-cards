# Smart Magic Cards
My solution to Smart Pension's technical test for trainee frontend developers.

### Original requirements
- Make sure all 4 suits of cards are rendered. There are 13 cards in each suit (♥,   ♣, ♦, ♠). :heavy_check_mark:
- Add 3 buttons to the flow that will do 3 actions:
  - **Shuffle:** Randomly shuffles all cards. :heavy_check_mark:
  - **Show/Hide:** Hide all the cards by adding a class (CSS is already included). :heavy_check_mark:
  - **Magic:** Order the cards again by suit. :heavy_check_mark:


#### Extra features
  - Value of each card visible on initial render.
  - Animation: cards rotate when the user hovers over them.
  - A sound plays when the user clicks on the Magic button.
  - All but one of the tests in `cypress/integration/magic-trick.js` pass.



### To see how Smart Magic Cards works:
#### Clone the repository
```
git clone git@github.com:paosch/smart-magic-cards.git
```

#### Install
```
yarn install
```

### To run the Cypress tests:
```
yarn test
```
