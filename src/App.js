import logo from './logo.svg';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';


function App() {
  let name = "묭이";

  const style = {
    App: {
      backgroundColor: "black",

    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };



  return (
    <div className="App" style={stype.App}>
      <MyHeader />
      
       <h2 style={style.h2}>안녕 리액트 {name}</h2>
       <b id="bold_text" style={style.bold_text}>React.js</b> 

      <MyFooter/>
    </div>
  );
}

// App이라는 모듈을 내보내겠다
export default App;
