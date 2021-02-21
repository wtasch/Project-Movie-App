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
        const {username,password};
        this.setState({
            
            [username]:value,
            [password]:value
        })
    }

    render(){
        return(        
            <form>
                <label htmlFor="username">username</label>
                <input 
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                  <label htmlFor="password">Password</label>
                <textarea
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