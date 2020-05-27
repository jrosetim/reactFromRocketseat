import React from 'react';
import Header from './component/Header/Index'
import './style.css'
import Routes from './routes'


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Julio</h1>
//     </div>
//   );
// }

const App = () => (
  <div>
    <Header />
    
    <Routes />
  </div>
)

export default App;
