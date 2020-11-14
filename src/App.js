import './App.css';
import Hello from './Hello';

function App({name, age}) {
  return (
   <div>
     Hello world from react.js
     <br/>
  <div>Hello again from the other side of the world {name} and age={age-6}</div> 
  <Hello fname={name}></Hello>
    </div>
    
  );
}

export default App;
