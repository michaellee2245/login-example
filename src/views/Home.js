import React, { Component } from 'react';
import { findById } from '../data/api';
import { Link } from 'react-router-dom';
import './home.css';

function Header(props) {
    return <div className="home-header">
     <div>Welcome {props.user.firstName}!</div> 
        <Link to='/login'>Log Out</Link>
     </div>
}

class Home extends Component {
    state = {
        user: {}
    }

    componentDidMount() {
    const id = this.props.match.params.id;
    findById(id)
    .then((user) => {
        this.setState({ user })
    })
    .catch((error) => {
        console.error(error)
    })
}
    render() {
        if (!this.state.user.id) return <div>Loading...</div>

        return(
            <div>
                <Header user = {this.state.user} history={this.props.history} />
                <div className="home-body">
                    <div className="side-bar"></div>
                    <div className="main-content"></div>
                </div>
            </div>
        )
    }
}

export default Home;