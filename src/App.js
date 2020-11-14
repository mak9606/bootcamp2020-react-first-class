import './App.css';
import Hello from './Hello';

function App({name, age}) {
  return (
   <div>
     Hello world from react.js
     <br/>
  <div>Hello again from the other side of the world  {name} and age={age-6}</div> 
  <Hello fname={name}></Hello>
  <h4>Unordered list</h4>
  <ul>
        <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
  <h4>Ordered list</h4>
  <ol>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ol>
    </div>
    
  );
}

export default App;
