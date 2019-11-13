import React from 'react';
import './App.css';

//import for router
import { Route } from 'react-router-dom'

import HomePage from  './pages/HomePage'

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

const TopicDetail = () => {
  return (
    <div>
      <h1>Topics Detailz</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />
      <Route exact path='/topics' component={TopicsList} />
      <Route exact path='/topics/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App