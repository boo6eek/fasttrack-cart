import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { connectRouter, routerMiddleware as useRouterMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import reducers from './reducers'

const history = createBrowserHistory()
const routerMiddleware = useRouterMiddleware(history)
const reducer = combineReducers({
  ...reducers,
  router: connectRouter(history),
})

const initialState = {}
const enhancers = []

const middleware = [routerMiddleware, thunk]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  const { createLogger } = require('redux-logger')
  const logger = createLogger()

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }

  middleware.push(logger)
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
)

const store = createStore(reducer, initialState, composedEnhancers)

export { history }

export default store
