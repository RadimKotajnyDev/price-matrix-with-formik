import './App.css'
import RenderingForm from './components/RenderingForm/RenderingForm.tsx'
import {fetchData} from "./configs/API.tsx";

const data = await fetchData() //fetching data on parent component
function App() {
  return (
    <div id="App">
      <RenderingForm data={data} />
    </div>
  )
}

export default App
