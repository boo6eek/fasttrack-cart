import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {MuiThemeProvider} from '@material-ui/core/styles';
import store, {history} from './store/index';
import theme from './config/theme';
import {App} from './components/modules';

const root = document.getElementById('root');

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <Router history={history}>
          <App/>
        </Router>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>
);

render(<Root/>, root);

if (module.hot) {
  module.hot.accept(Root, () => render(<Root/>, root));
}
