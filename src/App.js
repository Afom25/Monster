import React, { Component } from 'react';
import {CardList}from './components/card-list/CardList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {SearchBox} from './components/search-box/Search'; 

class App extends Component {
  constructor(){
    super();


    this.state= {
      monsters:[],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users}))
  }
 

  

  render(){
  
  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase()));
  return (
   <div className='container text-center'>
<h1> MONSTER-SEARCH</h1>
<hr></hr>
     <SearchBox
     placeholder='search monsters' handleChange={e => this.setState({searchField :e.target.value})}/> <hr></hr>

<CardList monsters={filteredMonsters}/>



   
   </div>
  );
}
}

export default App;
