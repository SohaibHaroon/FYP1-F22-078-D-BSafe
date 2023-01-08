import logo from './logo.svg';
import './App.css';
import Leaderboard from './board';
import Navbar from './Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className='board' id='main'>
        <Leaderboard />
      </div>
    </>
  );
}

export default App;
