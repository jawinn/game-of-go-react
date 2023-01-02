# The Game of __Go__ (Weiqi)

A personal project to create the ancient board game **Go** in React.
  
A demonstration of general React principles, custom functional components, responsive design, CSS modules, and modern organized JavaScript / TypeScript code.  
Gameplay is local. In other words, players take turns in the same web browser.

Version: 0.1.1 - Not yet fully playable.

## Screenshots ##

![Screenshot of the game being played. The main gameplay UI showing the game board with some black and white stones placed on it.](/public/docs/screenshot-go-board-gameplay.png)

## Features ##

All features will eventually be documented here, along with some screenshots and gifs.

The first goal is to get a local base version of the game working, allowing two players on the same device to play against each other. Those tasks
and additional feature ideas are documented in the Issues section of this repository, with the **enhancement** label.

- [Base Features](https://github.com/jawinn/game-of-go-react/issues/1)
- [Game Settings and Theme Selector](https://github.com/jawinn/game-of-go-react/issues/2)

## Accessibility ##

One of the goals of this web-based game is to make it as accessible as possible, so that it can be played with a keyboard and/or with the assistance of a screen reader.

For markup, the game board is using the [ARIA role **grid**](https://w3c.github.io/aria-practices/#grid), which includes child elements designated as rows and cells. 
Using just CSS `display:grid` on an unordered list of items was not a viable option, as the structure of the board would not be present and easily navigatable.
ARIA grid was chosen over a table due to the interactivity of each point on the board (grid cell):

> The grid role is for a widget that contains one or more rows of cells. The position of each cell is significant and can be focused using keyboard input.
> &mdash; <cite>[MDN][1]</cite>

[1]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role

> Grids differ from tables in how they support interactivity: all cells are focusable and keyboard navigable, and the general idea is that many if not all of the cells will support some type of user action. 
> &mdash; <cite>[Sarah Higley][2]</cite>

[2]: https://sarahmhigley.com/writing/grids-part1/

Work in progress and to be documented:
- Labeling and screen reader considerations
- Keyboard navigation + "a single stop in the tab order"


## Storybook: View Isolated Components ##

Components in this project support Storybook. To run the Storybook and view its web interface:  
`npm run storybook`

<br>

## Running the Project and Development Notes

**Initial Installation:**  
Run `nvm use` to use the working version of Node specified in the `.nvmrc` file.  
Run `npm install` to install all packages.

> **Note** When running npm audit, run it with the production flag: `npm audit --production`

**Available Scripts**  
In the project directory, you can then run any of the following scripts (defined in `package.json`):

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.