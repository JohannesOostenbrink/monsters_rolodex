import {Component} from 'react';
import './search.css'


class Search extends Component{

    render(){
        const {onChangeHandler, placeholder, className} = this.props;
        return(
            <div>
                   
              <input 
              className = {`search_box ${className}`}
              type='search' 
              placeholder = {placeholder}
              onChange={onChangeHandler}/>

                </div>
        )
    }
}

export default Search; 

