import './App.css';
import Counter from './Component/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>I am Joy Bolod</h1>
      <Counter></Counter>
      </header>
    </div>
  );
}

// function Counter(){
//   const [count,setCount] = useState(10);
//   const handleIncrease = () => console.log('clicked');
//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick = {handleIncrease}>Increase</button>
//     </div>
//   )
// }

export default App;
