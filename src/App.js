import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import CardList from './Components/Card_list/card_list_comp'



class App extends Component {
  constructor(){ // constructor runs first - in anything and in any class
    super();     // constructor here initializes the state 

    this.state={
      monsters:[],
      searchField: '',

  };
}

componentDidMount() { // This run 3rd - Updates the state and then render re-renders
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() =>
   { return {monsters:users};
}))
}

onSearchChange = (event) => {
  const searchField = event.target.value.toLocaleLowerCase();
  this.setState(
    () => ({ searchField }))
};

  render(){ // Renders run second. It mounts initial UI on to the DOM  
    
    const { monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
     });

    return (
      <div className="App">
        
          <input className = 'search-box' type='search' placeholder='search monsters' 
          onChange={onSearchChange}/>

         <CardList/>

    
       
      </div>
    )
  }
 
}

export default App;
