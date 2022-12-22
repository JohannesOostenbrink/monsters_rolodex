import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor(){ // constructor runs first - in anything and in any class
    super();     // constructor here initializes the state 

    this.state={
      monsters:[],
      searchField = ''

  };
}

componentDidMount() { // This run 3rd - Updates the state and then render re-renders
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() =>
   { return {monsters:users};
}))
}

  render(){ // Renders run second. It mounts initial UI on to the DOM  
    
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
     });

    return (
      <div className="App">
        <div className = "Monsters">
          <input className = 'search-box' type='search' placeholder='search monsters' 
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();
           

            this.setState(
              () => {
              return {searchField };
            })
          
          }}>search</input>

         {filteredMonsters.map(
          (monster) => {
            return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
              </div>
            )
          }
         )
         
         }
        </div>
       
      </div>
    )
  }
 
}

export default App;
