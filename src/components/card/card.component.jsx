import { Component } from 'react';
import './card.style.css';

class Card extends Component {
    render() {
        const {name, web_pages} = this.props.uniler;
        return (
            <div className='card-container'>
                <img src={`https://robohash.org/${name}?set=set3&size=180x180`} alt={`uniler ${name}`} />
                <h2>{name}</h2>
                <p>{web_pages[0]}</p>
            </div>
        );
    }
}

export default Card;