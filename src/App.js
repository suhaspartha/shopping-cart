import './App.css';
import Somename, { someVar } from './login/Login';

function App() {
  return (
    <div>
      <Somename name="suhas" export = {someVar}/>
    </div>
  );
}

export default App;
