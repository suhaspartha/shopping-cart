import './App.css';
// import Somename, { someVar } from './login/Login';
import SomeHook from './login/LoginHook';

function App() {
  return (
    <div>
      {/* <Somename name="suhas" export = {someVar}/> */}
      <SomeHook name="suhas"/>
    </div>
  );
}

export default App;
