import React, { Component } from 'react';
import { authenticateUser } from '../data/api';
import './login.css';
import axios from 'axios';

class Login extends Component {
    state = {
        email:'',
        password:''
    }
    
    componentDidMount(){
        axios.get('http://localhost:8080/health')
        .then((response) => {
            console.log(response.data);
        })
        .catch(error => console.error(error))
    }

    handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        this.setState({[key]: value })
    }

    handleClick = () => {
        authenticateUser(this.state.email, this.state.password)
        .then((userId) => {
            return this.props.history.push(`/home/${userId}`)
        })
        .catch((error) => {
            alert(`not authenticated: ${error}`)
        })
    }

    render() {
        return(
            <div className="login-wrapper">
                <div className="login-logo"></div>
                <input name='email' value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
                <input name='password' value={this.state.password} onChange={this.handleChange} placeholder="Password" type="password"/>
                <div className="login-submit" onClick={this.handleClick}>Sign In</div>
            </div>
    )
    }
}

export default Login;