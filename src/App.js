// import logo from './logo.svg';
// import './App.css';
import { observer } from "mobx-react";
import store from "./store";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const { countClass, countClassAuto, countObject } = store;
  return (
    <div className="App">
      <div style={{ marginBottom: "50px" }}>
        <h1>Count (Class)</h1>
        <div>number: {countClass.number}</div>
        <button onClick={() => countClass.increase()}>plus</button>
        <button onClick={() => countClass.decrease()}>minus</button>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <h1>Count (ClassAuto)</h1>
        <div>num: {countClassAuto.number}</div>
        <button onClick={() => countClassAuto.increase()}>increment</button>
        <button onClick={() => countClassAuto.decrease()}>decrement</button>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <h1>Count (Object)</h1>
        <div>num: {countObject.num}</div>
        <button onClick={() => countObject.increase()}>increment</button>
        <button onClick={() => countObject.decrease()}>decrement</button>
      </div>
    </div>
  );
}

export default observer(App);
