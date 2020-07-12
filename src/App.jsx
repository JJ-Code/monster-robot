import React, { useState, useEffect, Fragment } from 'react';
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import Scroll from "./components/scroll/Scroll";
//import { robots } from './robots';

import './App.css';


const App = () => {
  const initalState = {
    robotFriends: [],
    searchField: "",
  }
  const [robotSearch, setRobotSearch] = useState(initalState)
  const { robotFriends, searchField } = robotSearch;

  const fetchRobots = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(robots => setRobotSearch({ robotFriends: robots, searchField: "" }))
  }

  useEffect(() => {
    fetchRobots()
    console.log("I ran");

  }, [])


  const onSearchChange = (e) => {
    e.preventDefault();
    if (e.target.value !== '') {
      //console.log(e.target.value);
      let results = robotFriends.filter(robotFriend => robotFriend.name.toLowerCase().includes(searchField.toLowerCase()))
      setRobotSearch({ ...robotSearch, robotFriends: results, searchField: e.target.value }
      )
    } else {
      fetchRobots();
    }
  }

  console.log(robotFriends);

  return (
 
    
    <div className='App tc'>
      <h1 className='f1'>Robot Friends</h1>

      {robotFriends.length === 0 ? (<h1>Loading...</h1>) :
        (<Fragment>
          <SearchBox onSearchChange={onSearchChange} />
          <Scroll>
            <CardList robots={robotFriends} />
            </Scroll>
        </Fragment>)}
    </div>
  );
};

export default App;
