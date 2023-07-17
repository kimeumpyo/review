import { Component } from "react";

class ErrorComponent extends Component{

	state = {
		error : false, // 에러 발생하면 true
		message : "에러발생!"
	}
	componentDidCatch(error, info){
		console.log("error : ",error, info);

		this.setState({error : true, message: error.message});
	}

	render(){
		if(this.state.error) return <div>{this.state.message}</div>;
		return this.props.children;
	}
}

export default ErrorComponent;