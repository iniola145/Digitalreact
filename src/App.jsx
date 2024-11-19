import styled from 'styled-components';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import New from "./components/New";

const Tunde = ({name}) => {
  return (
    <div>{name}</div>
  )
}
function App() {
  return (
    <Wrapper className="App">
      <Home/>
      <About/>
      <Tunde name="ballon"/>
      <New x="Deep problem"/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: red;

  h1{
    color: green;
    }
`

export default App;
