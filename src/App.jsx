import React, { useState, useEffect, Fragment } from 'react';
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import Scroll from "./components/scroll/Scroll";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";
import { connect } from 'react-redux';
import { setSearchField } from "./actions/actions";
import './App.css';
//import { robots } from './data/robots';




const App = ({ search: { searchField }, setSearchField }) => {
  const initalState = {
    robotFriends: []
  }
  const [robotSearch, setRobotSearch] = useState(initalState)
  const { robotFriends } = robotSearch;

  const fetchRobots = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(robots => setRobotSearch({ robotFriends: robots }))
  }

  useEffect(() => {
    fetchRobots()
    console.log("I ran");

  }, [])



  const onSearchChange = (e) => {
    e.preventDefault();
    if (e.target.value !== '') {
      //console.log(e.target.value);
      setSearchField(e.target.value)
      console.log(searchField);
      let results = robotFriends.filter(robotFriend => robotFriend.name.toLowerCase().includes(searchField.toLowerCase()))
      setRobotSearch({ robotFriends: results }
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
            <ErrorBoundry>
              <CardList robots={robotFriends} />
            </ErrorBoundry>
          </Scroll>
        </Fragment>)}
    </div>


  );
};

const mapStateToProps = state => ({
  search: state.search
});

export default connect(mapStateToProps, { setSearchField })(App);
