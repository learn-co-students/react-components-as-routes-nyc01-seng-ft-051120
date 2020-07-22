import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>This is Home component!</h1>
    </div>
  );
};

const About =()=>{
  return (
    <div>
       <h1>This is About component!</h1>
    </div>
  )
}
const Message = ( ) => {
  return(
    <div>
      <h1>Leave us a message</h1>
      <form>
        <div>
          <label htmlFor="username">Message</label><br/>
          <textarea placeholder="some text..."></textarea>
        </div>
        <div>
          <button type="submit" name="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="username"/>
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="password"/>
          <label htmlFor="password">Password</label>
        </div>
      </form>
    </div>
  )
}

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = ( ) => {
    return(
      <div>
        <NavLink to="/" exact style={link} activeStyle={{background:'darkblue'}}>Home</NavLink>
        <NavLink to="/about" exact style={link} activeStyle={{background:'darkblue'}}>About</NavLink>
        <NavLink to="/login" exact style={link} activeStyle={{background:'darkblue'}}>Login</NavLink>
        <NavLink to="/message" exact style={link} activeStyle={{background:'darkblue'}}>Message</NavLink>
      </div>
    )
}



ReactDOM.render(
  (
    <Router>
      <NavBar/>
      {/* <Route exact path="/" component={Home}/> */}
      <Route exact path="/" render={()=> <h1>From Route render Function, Home!</h1>}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/message" component={Message}/>
    </Router>
  ),
  document.getElementById('root')
);
