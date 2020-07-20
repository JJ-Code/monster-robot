import React from 'react'
import SearchBox from "../search-box/SearchBox";
import { connect } from 'react-redux';
import { setCurrentSearch } from "../../actions/robotsActions";

const Header = ({ setCurrentSearch }) => {
  const onSearchChange = (e) => {
    e.preventDefault();
    setCurrentSearch(e.target.value)
  }
  return (
    <div>
      <h1 className='f1'>Robot Friends</h1>
      <SearchBox onSearchChange={onSearchChange} />
    </div>
  )
}

export default connect(null, { setCurrentSearch })(Header);
