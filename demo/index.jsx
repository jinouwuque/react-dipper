import React from 'react';
import ReactDOM from 'react-dom';

//import ReactDipper from '../src/index.jsx';
import ReactDipper from '../build/index';

const appDom = document.getElementById('app');

ReactDOM.render(<div style={{'width':'100%', 'height': '100%'}}>
  <ReactDipper />
</div>, appDom);