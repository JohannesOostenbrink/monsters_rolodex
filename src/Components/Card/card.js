import {Component} from 'react'
import './card.css'

class Card extends Component{

    render(){
        const {id, name, email,} = this.props.monsters;
        const image = <img alt={`monster ${name}`} src= {`https://robohash.org/${id}?set=set2&size=180x180`}/>
        return(
            <div className = 'card-container' key={id}>
                   {image}
                   <h2>{name}</h2>
                   <p>{email}</p>
              

                </div>
        )
    }
}

export default Card; 
