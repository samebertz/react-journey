import logo from './logo.svg';
import './App.css';
import Temp_CharacterListItem from './temp.js'
import CharacterListItem from './CharacterListItem.js'

function App() {
  return (
    <>
      <Temp_CharacterListItem character="Test"/>
      <CharacterListItem character='Test' />
    </>
  );
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
