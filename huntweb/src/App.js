import React from 'react';
import Header from './component/Header/Index'
import './style.css'
import Main from './pages/main/index'


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
    
    <Main />
  </div>
)

export default App;
