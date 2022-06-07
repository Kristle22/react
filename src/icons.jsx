import './App.scss';
import Counter from './Components/019/Counter';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to class</h1>
        <Counter when={'today'} />
      </header>
    </div>
  );
}
export default App;
