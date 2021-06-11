import React from 'react';
import CharacterCard from './CharacterCard';

/** TODO
 * function component for generic list
 * renders `ul` of supplied components, using supplied keys if any,
 * or defaulting to index as key
 * @param {React.Props} props - list of items, a react component for the item
 * @return {JSX}
 * 
 * @todo ??? why did I write this
 */
const List = (props) => (
    <ul className='list'>
      {props.items.map((v,i)=><props.component item={v} key={v.key||v.id||v||i} />)}
    </ul>
  );

// const ListItem = ({item})=> <li className='list-item'>{item}</li>;
// const items = [<CharacterCard character="Amber" key="Amber"/>, <CharacterCard character="Diona" key="Diona"/>, <CharacterCard character="Test" key="Test"/>];
// function TestList (props) {return (<List component={ListItem} items={items} />)}
// export default TestList;

export default List;