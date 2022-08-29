import logo from './logo.svg';
import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';


function App() {
  let name = "묭이";
  return (
    <div className="App">
      <MyHeader />
      <header className="App-header">
       <h2>안녕 리액트 {name}</h2>
      </header>
      <MyFooter/>
    </div>
  );
}

// App이라는 모듈을 내보내겠다
export default App;
