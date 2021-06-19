import React from "react"
import "./stylesheets/index.scss"
import { Route, Switch } from "react-router-dom"
import { boolean, string } from "yargs"
import Home from "./pages/Home"
import Layout from "./components/layout/Layout"
import Building from "./pages/Building"

type routeType = {
  exact: boolean
  path: string
  component: any
}

const RoutesList: routeType[] = [
  { exact: true, path: "/", component: Home },
  { exact: true, path: "/building/:id", component: Building }
]

const App = () => {
  return (
    <Layout>
      <Switch>
        {RoutesList.map(r => (
          <Route
            key={r.path}
            component={r.component}
            path={r.path}
            exact={r.exact}
          />
        ))}
      </Switch>
    </Layout>
  )
}

export default App
