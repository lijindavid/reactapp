import logo from './logo.svg';
import './App.css';
import AppExt from './AppExt'
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
function App() {
  return(
<Router>
  <Route exact path="/" component={AppBody}></Route>
  <Route exact path="/new" component={AppExt}></Route>
</Router>
  );
}
const AppBody = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='/new'>
          Learn React
          </Link>
      </header>
    </div>
  );
}
export default App;
