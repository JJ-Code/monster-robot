import React, { useEffect } from 'react';
import CardList from "./components/card-list/CardList";
import Scroll from "./components/scroll/Scroll";
import Header from "./components/header/Header";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";
import { connect } from 'react-redux';
import { fetchRobots } from "./actions/robotsActions";
import './App.css';


const App = ({ robots: { robotFriends, noResults }, fetchRobots }) => {

  useEffect(() => {
    fetchRobots()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='App tc'>
      <Header />
      <Scroll>
        {robotFriends.length === 0 ? (<h1>Loading...</h1>) :
          (
            <ErrorBoundry>
              {(noResults === true) ? (<h2>No results...</h2>) : (<CardList robots={robotFriends} />)}
            </ErrorBoundry>
          )}
      </Scroll>
    </div>


  );
};

const mapStateToProps = state => ({
  robots: state.robots
});

export default connect(mapStateToProps, { fetchRobots })(App);
