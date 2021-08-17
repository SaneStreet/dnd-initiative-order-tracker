# Creating a Dungeons & Dragons Initiative Roll Order Tracker with JavaScript and React.js
With the help of Filip Danic on [Youtube](https://www.youtube.com/channel/UClctBvKpOUts0_B_kvooo_w) I have made an Dungeons & Dragons Initiative tracker to learn about React.js.

This is one of my first projects using React.js and he does a good job explaining how it works and what uses it has.

## Structure
The React app is made of 'cards' and 'roll' buttons.
Each card has a player name, initiative number, roll D20 button, health points and a remove button.
The app starts with 4 Cards added, which can all be changed to whatever name, order number or heatlth pool the player has.

The button 'Add a Card' adds a card to the current Card pool, but with -100 initiative points and 8 health.
Everytime the D20 button is clicked on any player card, it "rolls" a 20 sided die, and then gets sorted in the list automatically.

Every animation done with the list and cards of players/creatures is done with a community created React library called [React FlipMove](https://github.com/joshwcomeau/react-flip-move) made by Joshua Comeau.

## What you need:
You need to have Node installed on your system, and run 'npm start' to start up the React App. From here you want to go to your browser and type in 'localhost:3000', this will take you to the Initiative Tracker.