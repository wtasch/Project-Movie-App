import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import './Login.css';


    function Login(props){
    const [state, setState]=useState({
        username:'',
        password:''
        
    })

   const handleChange=(e)=>{
        console.log(e.target)
        const {name,value}=e.target;
        setState(prevState=>({
            ...prevState,          
            [name]:value
        }))
    }

    const createLogin=(e)=>{
        console.log(props)
        e.preventDefault();
        // const pastUsers=state.username;
        // console.log(pastUsers);
        // pastUsers.push(user);
        // setState({users:pastUsers})
    props.history.push('/')
    }

        return(        
            <form className="Login-Form"  onSubmit={createLogin}>
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