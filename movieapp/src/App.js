
import Buscador from "./componentes/buscador";
import SingleMovie from "./componentes/SingleMovie";

function App() {

  return (
  
  <div className="App">
<Buscador className="search"/>
element={<SingleMovie/>} 
  
  </div>
  )
}

export default App;