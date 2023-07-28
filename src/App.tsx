import './App.css'
import RenderingForm from './components/RenderingForm/RenderingForm.tsx'
import {FetchData} from "./configs/API.tsx";

const data = await FetchData() //fetching data on parent component
function App() {
  return (
    <div id="App">
      <RenderingForm data={data} />
    </div>
  )
}

export default App
