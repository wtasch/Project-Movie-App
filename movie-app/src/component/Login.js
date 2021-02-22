import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import './Login.css';
import users from '../users.json';


    function Login(props){
        console.log(users)
    const [state, setState]=useState({
        username:users[0].username,
        password:users[0].password
    })


    //followed the example from caseybook
    //along with using the following url from medium:
    //https://medium.com/technoetics/create-basic-login-forms-using-react-js-hooks-and-bootstrap-2ae36c15e551

   const handleChange=(e)=>{
        console.log(e.target)
        const {name,value}=e.target;
        setState(prevState=>({
            ...prevState,          
            [name]:value
        }))
    }

    const userLogin=(e)=>{
        console.log(props)
        e.preventDefault();
        // const pastUsers=state.username;
        // console.log(pastUsers);
        // pastUsers.push(user);
        // setState({users:pastUsers})
        if(state.username==='')
    props.history.push('/')
    }

        return(        
            <form className="Login-Form"  onSubmit={userLogin}>
                <label className="Login-Label" htmlFor="username">username</label>
                <input className="Login-Input"
                    type="text"
                    name="username"
                    value={state.username}
                    onChange={handleChange}
                />
                  <label className="Login-Label" htmlFor="password">Password</label>
                <input className="Login-Input"
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                />
                <input 
                className="Login-Submit" 
                type="submit" 
                value="Login!"
               />
            </form>
        )
    }


export default withRouter(Login);