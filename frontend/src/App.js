import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import Home from './components/Home';
import Createnote from './components/Createnote';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/notes" exact>
         <Notes/>
        </Route>
        <Route path="/createnote" exact>
          <Createnote/>
        </Route>

      </div>
    </Router>

  );
}

export default App;
