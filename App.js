import './App.css';
// import Welcome from './components/ClassComponent.js'
// import Hello  from './components/FunctionalComponent.js';
import TodoList from './components/TodoList.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Welcome/>
       <Hello/> */}
       <TodoList/>
       
      </header>
    </div>
  );
}

export default App;
