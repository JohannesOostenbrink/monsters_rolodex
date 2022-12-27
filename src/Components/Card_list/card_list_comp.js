import {Component} from 'react';
import Card from '../Card/card.js';
import './cardList.css';


const CardList = ({monsters}) => (
  <div className = 'card-list'>
    {monsters.map((monster) => {
       return <Card monster = {monster} />;
    })}
   </div>  

    )


export default CardList; 