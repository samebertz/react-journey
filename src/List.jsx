import React from 'react';

const List = (props) => (
  <ul className='list'>
    {props.items.map(_=> <props.component item={_} key={_.id||_} />)}
  </ul>
);

// const ListItem = ({item})=> <li className='list-item'>{item}</li>;

// <List Component={ListItem} items={items} />

export default List;