import React, {Component}from 'react';
import { connect } from 'react-redux';
import {setSearchField,requestRobots } from './actions';
import CardList from './CardList';
import Searchbox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
import Header from './Header';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		isPending: state.requestRobots.isPending,
		robots: state.requestRobots.robots,
		error: state.requestRobots.error
	}
}

 const mapDispatchToProps = (dispatch) =>{
 	return {
 		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
 		onRequestRobots: ()=>dispatch(requestRobots())
 	}
 }

class App extends Component{
	componentDidMount(){
		this.props.onRequestRobots();
	}
	render()
	{
		
		const {searchField, onSearchChange,robots, isPending} = this.props;
		const filteredRobots = robots.filter(
			robot =>{
				return robot.name.toLowerCase().includes(searchField.toLowerCase());
			}
		)
		if(isPending)
		{
			return <h1> Loading </h1>
		}
		else
		{
		  return(
			<div className="tc">
				<Header />
				<Searchbox searchChange={onSearchChange}/>
				<Scroll>
					<CardList robots = {filteredRobots} />
				</Scroll>
			</div>
			);
		}
		
	}
}
	

 

export default connect(mapStateToProps,mapDispatchToProps)(App);