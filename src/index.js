import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import userMockData from './MockData/userMockData.json'

ReactDOM.render(<App rows={userMockData} />, document.getElementById('root'));
