import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import './Login.css';


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    handleChange=(e)=>{
        console.log(e.target)
        const {name,value}=e.target;
        this.setState({
            
            [name]:value
        })
    }

    createLogin=(e)=>{
        console.log(this.props)
        e.preventDefault();
    this.props.history.push('/')
    }

    render(){
        return(        
            <form className="Login-Form"  onSubmit={this.createLogin}>
                <label className="Login-Label" htmlFor="username">username</label>
                <input className="Login-Input"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                  <label className="Login-Label" htmlFor="password">Password</label>
                <input className="Login-Input"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <input 
                className="Login-Submit" 
                type="submit" 
                value="Login!"
               />
            </form>
        )
    }
}
export default withRouter(Login);