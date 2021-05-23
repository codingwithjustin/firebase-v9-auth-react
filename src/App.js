import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { Home } from './Home'
import { SignUp } from './SignUp'
import { Login } from './Login'
import { useAuthState } from './firebase'

const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  return (
    <Route
      {...props}
      render={routeProps =>
        isAuthenticated ? <C {...routeProps} /> : <Redirect to="/login" />
      }
    />
  )
}

const UnauthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  return (
    <Route
      {...props}
      render={routeProps =>
        !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
      }
    />
  )
}

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{' '}
        <Link to="/signup">SignUp</Link>
      </div>
      <AuthenticatedRoute exact path="/" component={Home} />
      <UnauthenticatedRoute exact path="/signup" component={SignUp} />
      <UnauthenticatedRoute exact path="/login" component={Login} />
    </Router>
  )
}

export default App
