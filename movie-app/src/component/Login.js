import React, {Component} from 'react'

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

    render(){
        return(        
            <form className="Login-Form">
                <label htmlFor="username">username</label>
                <input 
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                  <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <input type="submit" value="Login!"/>
            </form>
        )
    }
}
export default Login;