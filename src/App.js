import logo from './logo.svg';
import './App.css';
import './button.css';

function Topnav(props) {
  return (
    <div className='topnav'>
      <div className="title">
          <p>💗 Welcome to Purefoams Shop! 💗</p>
      </div>
      <div className="grid-cols-1">
        {/* <div className="btn-one">Home</div>
        <div className="btn-one">Shop all</div>
        <div className="btn-one">New arrival</div>
        <div className="btn-one">Sales</div>
        <div className="btn-one">FAQs</div> */}
        <button>Home</button>
        <button>Shop all</button>
        <button>New arrivals</button>
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
      <div className="wrapper">
        <div className="sliding-background"></div>
      </div>
    </div>
  );
}

export default App;
