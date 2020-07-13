import React, { useEffect, Fragment } from 'react';
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import Scroll from "./components/scroll/Scroll";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";
import { connect } from 'react-redux';
import { fetchRobots, setCurrentRobots  } from "./actions/robotsActions";
import './App.css';
//import { robots } from './data/robots';
//import { setSearchField } from "./actions/searchActions";



const App = ({ robots: { robotFriends }, fetchRobots, setCurrentRobots }) => {


  useEffect(() => {
    fetchRobots()
    // eslint-disable-next-line
  }, [])



  const onSearchChange = (e) => {
    e.preventDefault();
    if (e.target.value !== '') {
      //console.log(e.target.value);
      setCurrentRobots(e.target.value)

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
  robots: state.robots
});

export default connect(mapStateToProps, { fetchRobots, setCurrentRobots })(App);
