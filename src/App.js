import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor(){
    super();

    this.state={
      monsters:[
      {
        name: 'Linda',
        id: 'sdf',
      },
      {
        name: 'Frank',
        id: sfddfs,
      },
      {
        name: 'Jacky',
        id: 'rgf'
      }
      {
        name: 'Leeham',
        id: 'thdf'
      }

    ]};

  }

  render(){
    return (
      <div className="App">
        <div className = "Monsters">
         {this.state.monsters.map(
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
