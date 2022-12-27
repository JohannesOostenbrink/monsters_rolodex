
import './App.css';
import React, {useState, useEffect} from 'react';
import CardList from './Components/Card_list/card_list_comp'
import Search from './Components/Search_box/search'


const App = () => {

       const[searchField, setSearchField] = useState('');
       const [monsters, setMonsters] = useState([]);     
       const [filteredMonsters, setFilteredMonsters] = useState(monsters);
      
        useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => setMonsters(users));
    
       }, []);                
                                                       
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


    return(

      <div className = 'App'>

        <h1 className = "AppTitle" >Monsters Rolodex</h1>

         <Search 
         onChangeHandler = {onSearchChange}
         placeHolder = 'search monsters'
         className = 'monsters_searchbox' />
+
         <CardList monsters = {filteredMonsters} />
         
         </div>

    )
}

export default App;
