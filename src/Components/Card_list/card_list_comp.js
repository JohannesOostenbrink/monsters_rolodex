import {Component} from 'react';
import card from './card.css'


class CardList extends Component{

    render(){
        const {monsters} = this.props;
        return(
            <div className = 'card-list'>
                    {monsters.map(monster => {
                        const {Name , email ,id}  = monster;

                    
                    
                    return(
                        <div className = 'card-container' key={id}>
                           <img  
                            alt={`monster ${Name}`}
                            src= {`https://robohash.org/${id}?set=set2&size=180x180`}/>
                            <h2>{Name}</h2>
                            <p>{email}</p>

                        </div>
                        

                   )} )}

                    
                </div>
        )
    }

}

export default CardList; 