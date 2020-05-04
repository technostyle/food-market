import React from 'react'
import { Cart, Catalog, Header, Order, Scroller, Footer } from './containers'

const helloWorldUrl = '/api/test'
const worldHelloUrl = '/api/worldHello'

export class App extends React.Component<any, any> {
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
