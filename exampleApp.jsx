import { counterStore } from './store/stores'

function App() {
  const [counter, setCounter, { increase, decrease }] = counterStore();

  return (
    <div className="App">
      <h1>{counter.count}</h1>
      <button onClick={() => increase(counter, setCounter)}>Increase</button>
      <button onClick={() => decrease(counter, setCounter)}>Decrease</button>
    </div>
  )
}

export default App;