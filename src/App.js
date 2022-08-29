import logo from './logo.svg';
import './App.css';

function App() {
  let name = "묭이";
  return (
    <div className="App">
      <header className="App-header">
       <h2>안녕 리액트 {name}</h2>
      </header>
    </div>
  );
}

// App이라는 모듈을 내보내겠다
export default App;
