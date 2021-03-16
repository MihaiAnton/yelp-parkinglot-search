import React from 'react'

import { Route, Switch } from 'react-router-dom'
import SearchScreen from './YelpParkingLots/SearchScreen/SearchScreen'

const MainBlock = (props) => {
  return (
    <div>
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <div>
              <h1>Welcome</h1>
              <a href="search">Search parking lots</a>
            </div>
          )}
        />
        <Route path="/search" exact component={SearchScreen} />
      </Switch>
    </div>
  )
}

export default MainBlock
