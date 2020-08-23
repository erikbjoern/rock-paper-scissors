# Rock, Paper, Scissors game

[Deployed App on Netlify](https://erikbjoern-rock-paper-scissors.netlify.app/)

A web app where two local players can play 'Rock, paper, scissors' against eachother, each using a set of keys on the same keyboard. Their choices have to be made before the countdown is over, and are then displayed, represented by two hands. There's a set score limit of 3 points. Whoever reaches that score is determined the final winner.

* Project scaffolded with create-react-app
* Cypress installed for feature tests
* Game rules (game logic) are implemented, including that a player looses for not making a choice
* Player input through hotkeys is implemented
* Timer is implemented
* Manual game start is implemented
* Accumulation of points is implemented
* Game stopping on reached score limit is implemented
* Game restart after a set is implemented
* Sass used for extended CSS functionality
* Following visuals are implemented:
    * a representation of the timer, ticking
    * a button to start the game
    * animated representations of both players
    * a representation of both players' choices
    * both a static and an animated indication that they have to make a choice
    * an indication that they were too slow in making a choice (or didn't make any)
    * each player's score
    * the score limit
    * the final winner when score limit is reached
    * a sheet of the keybindings used for the hotkeys
    * nice colors, fonts, and images!
    
## Packages used:
* Cypress for feature testing
* Start-server-and-test for combined server and test start script

## Plan for improvements next in line:
* Display amount of sets won for each player
* Possibility to set custom score limit, timer and hotkeys
* Possibility to play against other player online

## For possible future development
* Possibility to play against CPU with random choices

## User Stories
### 1. The Game rules
```
As a player
In order to play by the game rules
I want 'rock' to win over 'scissors'
I want 'scissors' to win over 'paper'
I want 'paper' to win over 'rock'
```
### 2. Player hotkeys

```
In order to play a game of 'rock paper scissors' against another person
I want the application to allow for two local players playing against each other

In order not to give away my choice of 'rock', 'paper' or 'scissors' by typing or using the mouse
I want to be able to make my choice by using a single key for each choice
```
### 3. Automatically determine winner after timeout
```
In order to keep the game exciting
I want there to be a short time limit within which the player has to pick their choice
```
### 4. Visuals
#### 4.1 Start button
```
In order to be ready when the game starts
I want to start the timer manually
```
#### 4.2 Countdown
```
In order to know how long I have to make my pick
I want there to be a visual representation of the timer

In order to understand that not making a choice makes me lose
I want there to be a fitting visual indication of that
```
#### 4.3 Score
```
In order to keep track of my and my opponents score
I want it to be displayed on the screen
```
#### 4.4 Score limit
```
In order to determine a final winner
I want there to be a score limit to determine the winning score
```
#### 4.5 Hotkeys sheet
```
In order to know which key represents which choice
I want the keybindings of the hotkeys to be displayed
```
