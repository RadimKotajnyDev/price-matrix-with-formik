import './App.css'
import RulesetsForm from './components/RulesetsForm.tsx'
import {fetchData} from "./API.tsx";

const data = await fetchData() //fetching data on parent component
function App() {
  return (
    <div id="App">
      <RulesetsForm dataName={data.name} dataID={data.id} />
    </div>
  )
}

export default App
