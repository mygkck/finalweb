import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.style.css';

class CardList extends Component {
  render() {
    const { uniler } = this.props;
    return (
      <div className='card-list'>
        {
          uniler.map((uniler, i) => {
            return (
              <Card uniler={uniler} key={i}/>
            )
          })
        }
      </div>
    );
  }
}

export default CardList;
