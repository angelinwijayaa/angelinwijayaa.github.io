import logo from './logo.svg';
import './App.css';

function Topnav(props) {
  return (
    <div className='topnav'>
      <div className="title">
          <p>💗 Welcome to Purefoams Shop! 💗</p>
      </div>
      <div className="grid-cols-1">
        <button>Home</button>
        <button>Shop all</button>
        <button>New arrival</button>
        <button>Sales</button>
        <button>FAQs</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Topnav />
    </div>
  );
}

export default App;
