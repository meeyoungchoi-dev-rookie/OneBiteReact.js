import logo from './logo.svg';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';



function App() {
  let name = "묭이";

  const style = {
    App: {
      backgroundColor: "white",

    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };

  const func = () => {
    return "func";
  }

  return (
    <div className="App" style={style.App}>
      <MyHeader />
      <Counter/>

      <MyFooter/>
    </div>
  );
}

// App이라는 모듈을 내보내겠다
export default App;
