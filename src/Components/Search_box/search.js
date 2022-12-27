import {Component} from 'react';
import './search.css'

const Search = ({onChangeHandler, placeHolder, className}) => (
    
    <div>
                   
       <input 
              className = {`search_box ${className}`}
              type='search' 
              placeholder = {placeHolder}
              onChange={onChangeHandler}/>

     </div>
)


export default Search; 

