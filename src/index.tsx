import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

const initialState: any = {}

const reducer = combineReducers({
    cart: (state: any = initialState) => state,
})
const store = createStore(reducer, initialState)

// const testUrl = 'http://localhost:3000/test';
// const testUrl = '/api/test';
const helloWorldUrl = '/api/test';
const worldHelloUrl = '/api/worldHello';

class App extends React.Component<any, any> {
    componentDidMount() {
        fetch(helloWorldUrl)
    }

    render() {
        return (
          <>
            <div onClick={() => fetch(helloWorldUrl)}>
                <h1>Hello, World!</h1>
            </div>
            <div onClick={() => fetch(worldHelloUrl)}>
            <h1>World, Hello!</h1>
        </div>
        </>
    )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
