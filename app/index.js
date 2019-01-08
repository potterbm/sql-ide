import { Provider } from 'react-redux';
import App          from './components/App';
import React        from 'react';
import ReactDOM     from 'react-dom';
import store        from './store';

const render = (Component) => {
  ReactDOM.render(
    <Provider store={ store }>
      <Component />
    </Provider>,
    document.getElementById('react-root'),
  );
};

render(App);
