import logo from './logo.svg';
import './App.css';
// import Temp_CharacterListItem from './temp.js'
import CharacterListItem from './CharacterListItem.js'

function App() {
  const mock_CHARACTERS = [
    'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test',
  ];
  return (
    <div className="character-list">
      {mock_CHARACTERS.map(character => <CharacterListItem key={character} character={character} />)}
    </div>
  );
  // return (
    // <>
    //   <Temp_CharacterListItem character="Test"/>
      // <CharacterListItem character='Test' />
    // </>
  // );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
