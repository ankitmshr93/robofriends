import React, {Component}from 'react';
import CardList from './CardList';
import Searchbox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
 
class App extends Component{
	constructor()
	{
		super();
		this.state =
		{
			robots:[], //currently static so not really needed but if information is coming from some source then needed.
			searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{
			return response.json();
		})
		.then(users =>{
			this.setState({robots: users});
		} )
	}

	onSearchChange=(event)=>
	{
		this.setState({searchfield: event.target.value})
	}

	render()
	{
		const filteredRobots = this.state.robots.filter(
			robot =>{
				return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
			}
		)

		if(this.state.robots.length ===0)
		{
			return <h1> Loading </h1>
		}
		else
		{
		  return(
			<div className="tc">
				<h1 className='f1'> RoboFriends </h1>
				<Searchbox searchChange={this.onSearchChange}/>
				<Scroll>
				 <ErrorBoundary>
					<CardList robots = {filteredRobots} />
				</ErrorBoundary>
				</Scroll>
			</div>
			);
		}
		
	}
}
 

export default App;