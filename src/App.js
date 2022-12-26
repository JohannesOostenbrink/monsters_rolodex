
import './App.css';
import React, {useState, useEffect} from 'react';
import CardList from './Components/Card_list/card_list_comp'
import Search from './Components/Search_box/search'


const App() => {

    return(
       <div className="App">

       const[searchField, setSearchField] = useState('');
       const [monsters, setMonsters] = useState([]);      // [value, setValue] first one is the value that you want the store
                                                          // second one is the value you want to set 
       const [filteredMonsters, setFilteredMonsters] = useState(monsters);
      
        useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => setMonsters(users))
    
       }, []);                    // accepts two arguments first is function callBack, 
                                 // second is an array dependency
                                 // In this case we don't want to fetch data again and therefore we pass it an empty array 
        useEffect(() => {
          const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
           });
           
           setFilteredMonsters(newFilteredMonsters);
        }, [monsters, searchField]);


       const onSearchChange = (event) => { 
          const searchFieldString = event.target.value.toLocaleLowerCase();
          setSearchField(searchFieldString);
        };


    

        <h1 className = "AppTitle" >Monsters Rolodex</h1>

         <Search 
         onChangeHandler = {onSearchChange}
         placeholder = 'search monsters'
         className = 'monsters_searchbox' />

         <CardList monsters = {filteredMonsters} />

    
       
      </div>
    )
}

export default App;
