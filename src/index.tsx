import 'styles/css/main.css'
import 'styles/scss/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { Cart, Catalog, Header, Order, Scroller, Footer } from './containers'

// const testUrl = 'http://localhost:3000/test';
// const testUrl = '/api/test';
const helloWorldUrl = '/api/test'
const worldHelloUrl = '/api/worldHello'

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
                <Header />
                <Cart />
                <Catalog />
                <Order />
                <Scroller />
                <Footer />
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
