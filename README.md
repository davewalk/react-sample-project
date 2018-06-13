# react-sample-project  

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).  

### Installation
`yarn install` or `npm install`

### Usage
To run the app locally using `react-scripts`:  

`REACT_APP_API_ENDPOINT={api_endpoint} yarn start`

### Directory Structure
I initially developed this app's components in the `App.js`. This is recommended in ["Thinking in React"](https://reactjs.org/docs/thinking-in-react.html) and led to faster development at first. Then I decided to break out the components into separate subdirectories. I like this approach because:  
1. It's easy to understand where everything is and imports are manageable  
2. Tests can easily live close to the code they are testing (`__tests__`) and import paths are still simple  
3. Components can be made up of multiple files. At the very least I could see the need for styling files if I were to use [css-modules](https://github.com/gajus/react-css-modules)  

### Deployment
TBD

### Future Work
* Add [Flow](https://flow.org/) for type safety  
* Add [Redux](https://redux.js.org) for caching of API calls and better fetching in general  
* More unit tests!  
* Break out routes into separate files. Since there's only one non-root route this isn't necessary right now  
