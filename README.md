# The Game of __Go__ (Weiqi)

A personal project to create the ancient board game **Go** in React.
  
A demonstration of general React principles, custom components, React _Context_, responsive design, CSS modules, and modern organized JavaScript / TypeScript code.

## Features ##

Coming soon.

## Accessibility ##

The goal is to make this web-based game as accessible as possible.

For markup, the game board is using the ARIA role **grid**, which includes child elements designated as rows and cells. 
Using just CSS `display:grid` on an unordered list of items was not a viable option, as the structure of the board would not be present and easily navigatable.
ARIA grid was chosen over a table due to the interactivity of each point on the board (grid cell):

> The grid role is for a widget that contains one or more rows of cells. The position of each cell is significant and can be focused using keyboard input.
> &mdash; <cite>[MDN][1]</cite>

[1]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role

> Grids differ from tables in how they support interactivity: all cells are focusable and keyboard navigable, and the general idea is that many if not all of the cells will support some type of user action. 
> &mdash; <cite>[Sarah Higley][2]</cite>

[2]: https://sarahmhigley.com/writing/grids-part1/

Guidelines: https://w3c.github.io/aria-practices/#grid

Work in progress and to be documented:
- Labeling and screen reader considerations
- Keyboard navigation + "a single stop in the tab order"

## Development Notes / Available Scripts

In the project directory, you can run:

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


## Additional Create React App Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)