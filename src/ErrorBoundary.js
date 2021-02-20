import React,{component} from 'react'

class ErrorBoundary extends component{
	constructor(props)
	{
		super(props);
		this.state={
			hasError: false
		}
	}

	componentDidCatch(error,info){
		this.state.hasError=true;
	}
	render()
	{
		if(this.state.hasError)
		{
			return <h1> There seems to have been some error. We are looking into it </h1>;
		}
		else
		{
			return {this.props.children};
		}
	}
}