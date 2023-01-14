import './App.css';
import TopBar from './components/TopBar';
import BackGround from './components/BackGround';
import StoreListing from './components/StoreListing';
//import StoreListing from './components/StoreListing';
function App() {
  return (
    <div className="App">
      <TopBar />
      <BackGround />
      <StoreListing />
      </div>
  );
}

export default App;
