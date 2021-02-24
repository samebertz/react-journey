import React from 'react';

const List = ({Component, items}) => (
  <ul className='list'>
    {items.map(_=> <Component item={_} />)}
  </ul>
);

const ListItem = ({item}) => <li className='list-item'>{item}</li>;

<List Component={ListItem} items={items} />