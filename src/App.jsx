import React, { useState } from 'react';
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import { robots } from './robots';

import './App.css';


const App = () => {
  const initalState = {
    robotFriends: robots,
    searchField: "",
  }

  const [robotSearch, setRobotSearch] = useState(initalState)

  const { robotFriends, searchField } = robotSearch;

  //console.log(robotSearch.robotFriends);

  const onSearchChange = (e) => {
    e.preventDefault();
    if (e.target.value !== '') {
      console.log(e.target.value);
      let results = robotFriends.filter(robotFriend => robotFriend.name.toLowerCase().includes(searchField.toLowerCase()))
      setRobotSearch({ ...robotSearch, robotFriends: results, searchField: e.target.value }
      )
    } else {
      setRobotSearch(initalState);
    }
  }


  return (
    <div className='App tc'>
      <h1 className='f1'>Robot Friends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <CardList robots={robotFriends} />
    </div>
  );
};

export default App;
