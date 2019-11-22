import React from 'react';
import './App.css';

//import for router
import { Route, Link } from 'react-router-dom'

import HomePage from  './pages/HomePage'
import ShopPage from './pages/ShopPage'

const HomePageTest = (props) => {
  return (
    <div>
     <button onClick={() => props.history.push('/topics')}>Go to topics page</button>
      <h1>Home Page</h1>
    </div>
  )
}

const HatsPage = () => {
    return (
      <div>
        <h1>Hats Page</h1>
      </div>
    )
}

const TopicsList = () => {
  return (
    <div>
      <h1>Topics List</h1>
    </div>
  )
}

const TopicDetail = (props) => {
  return (
    <div>
      <h1>Topics Detailz {props.match.params.topicId}</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </div>
  );
}

export default App