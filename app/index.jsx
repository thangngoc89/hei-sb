// IMPORTANT: This needs to be first (before any other components)
// to get around CSS order randomness in webpack.
import './css/app'

// Some ES6+ features require the babel polyfill
// More info here: https://babeljs.io/docs/usage/polyfill/
// Uncomment the following line to enable the polyfill
// require("babel/polyfill");

import React from 'react'
import ReactDOM from 'react-dom'
import Application from './components/Application'
import Parse from 'parse'

Parse.initialize('wUyaZGM0qPNvr2DvKOgGTJSPXa1GWcHV3v3otEiX', 'UuxpC6qz6NeU8pauVnzZ7gp9mViPMR3UeUx9K4Fd')

ReactDOM.render(<Application />, document.getElementById('app'))
