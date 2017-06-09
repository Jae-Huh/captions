import React from 'react'

import AddImage from './AddImage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import Login from './Login'
import NavBar from './NavBar'
import Register from './Register'
import ImageList from './ImageList'
import ProfilePage from './ProfilePage'
import WaitingIndicator from './WaitingIndicator'
import ImageCaption from './ImageCaption'
import ErrorMessage from './ErrorMessage'
import ImageContainer from './ImageContainer'
import AddCaptionContainer from './AddCaptionContainer'

const App = (props) => (

  <Router>
    <div className='app'>
      <NavBar />
      <ErrorMessage />
      {props.waiting && <WaitingIndicator />}
      <Route exact path='/' component={ImageList} />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/images/add' component={AddImage} />
        <Route path='/profile/:id' component={ProfilePage} />
        <Route exact path='/images/:id' component={ImageContainer} />
        <Route path='/images/:id/add-caption' component={AddCaptionContainer} />
        <Route path='/images/:id/:captionid' component={ImageCaption} />
      </Switch>
    </div>
  </Router>
)

function mapStateToProps (state) {
  return {
    waiting: state.waiting
  }
}
export default connect(mapStateToProps)(App)
