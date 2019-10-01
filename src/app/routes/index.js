import React from "react"
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"

import { store } from "../redux/store"
import { Directory } from "./directory"
import routes from "./routes"


const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: async operation => {
    const token =
      (await localStorage.getItem('token')) ||
      process.env.REACT_APP_GITHUB_TOKEN
    //console.log(process.env.REACT_APP_GITHUB_TOKEN)
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
})

export const Root = () => (
  <ApolloProvider client={client}>
    <Provider store={store.state}>
      <ConnectedRouter history={store.history}>
        <Directory paths={routes} />
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>
)
