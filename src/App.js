import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
 import { loadStripe } from '@stripe/stripe-js';
 import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';


 const promise = loadStripe("pk_test_51Hb7dfAbqWokr4jsD2lxFB8Qf9JeewW433kY7JCODT5qxf48jJ1hYjAjqgacBXkpkTtvf2E9Gkpaa0hukaXvbWCq00osEX6CjG");



function App() {
  const[{user}, dispact] = useStateValue();

  //A piece of code which runs based on a given condition
   // useEffect is very POWERFUL learn to use it

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      if (authUser) {
        //the user is logged in..

          dispact({
            type: "SET_USER",
            user: authUser,
          });
      }else{
        // the user is logged out
          dispact({
            type: "SET_USER",
            user: null,
        });
      }
    }); 

    return ()=>{
      //Any cleaning setup go in here..
      unsubscribe();
    }

  }, []);

  console.log("user is  >>>", user);

  return (
    <Router>
      <div className="app">
      <Switch>
      <Route path ="/orders">
          <Header /> 
          <Orders />
        </Route>
      <Route path ="/login">
          <Login />
        </Route>
        <Route path ="/checkout">
          <Header />  
          <Checkout />
        </Route>
        <Route path ="/payment">
        <Header /> 
        <Elements stripe={promise}>
        <Payment />
        </Elements>
        </Route>
        <Route path ="/">
           <Header />
           <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
