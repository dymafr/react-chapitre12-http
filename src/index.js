import React, { Component } from 'react';
import './index.css';
import ReactDom from 'react-dom';
import Listuser from './Listuser';
import Adduser from './Adduser';
import './conf/axios-conf';
import * as axios from 'axios';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUser: null
    }
  }

  componentDidMount() {
    axios.get('/users', {
      timeout: 2000,
      headers: {
        hello: 123
      }
    }).then( response => response.data )
      .then( users => this.setState({ users }) )
      .catch( err => console.log(err))
  }
  
  deleteUser = (id) => {
    axios.delete(`/users/${ id }`).then( res => console.log(res) )
  }

  render() {
    return (
      <div style={ { minHeight: '100vh'} } className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center">
        <Listuser deleteUser={ this.deleteUser} users={ this.state.users } selectUser={ (index) => this.setState({ selectedUser: index }) } />
        <hr className="w-100 my-5" />
        <Adduser user={ this.state.users && this.state.users[this.state.selectedUser] ? this.state.users[this.state.selectedUser] : null } />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));