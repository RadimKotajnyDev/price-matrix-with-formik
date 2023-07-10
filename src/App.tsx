import './App.css'
import RenderingForm from './components/RenderingForm.tsx'
import {fetchData} from "./API.tsx";

const data = await fetchData() //fetching data on parent component
function App() {
  return (
    <div id="App">
      <RenderingForm dataName={data.name} dataID={data.id} />
    </div>
  )
}

export default App
