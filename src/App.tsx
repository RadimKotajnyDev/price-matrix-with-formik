import './App.css'
import RenderingForm from './components/RenderingForm/RenderingForm.tsx'
import {FetchData} from "./configs/API.tsx";

const matrix = await FetchData() //fetching data on parent component
function App() {
  return (
    <div id="App">
      <RenderingForm matrix={matrix} />
    </div>
  )
}

export default App
