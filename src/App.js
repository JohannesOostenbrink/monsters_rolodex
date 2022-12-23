
import './App.css';
import {Component} from 'react';
import CardList from './Components/Card_list/card_list_comp'
import Search from './Components/Search_box/search'


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

onSearchChange = (event) => { // keep this out of render so we can reference this anywhere when rendering 
  const searchField = event.target.value.toLocaleLowerCase();
  this.setState(
    () => ({ searchField }))
};

  render(){ // Renders run second. It mounts initial UI on to the DOM  
    
    const { monsters, searchField} = this.state; // for optimization
    const {onSearchChange} = this; // for optimization

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
     }); // new variable filteredMonsters inside the render function. It is not being returned from the function

    return (
      <div className="App">

         <Search 
         onChangeHandler = {onSearchChange}
         placeholder = 'search monsters'
         className = 'search_box' />

         <CardList monsters = {filteredMonsters} />

    
       
      </div>
    )
  }
 
}

export default App;
