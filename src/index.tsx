import React from 'react';
import ReactDOM from 'react-dom/client';
import './react-select.scss';
import './index.css'
import App from './App';
import MultiSelect from "./MultiSelect";
import SingleSelect from "./SingleSelect";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
      {/*<SingleSelect />*/}
      {/*<MultiSelect />*/}
  </React.StrictMode>
);
