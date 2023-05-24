import './App.css'
import RulesetsForm from './components/RulesetsForm.tsx'
import {Heading} from "./components/Heading.tsx";
import {fetchData} from "./API.tsx";

const data = await fetchData() //fetching data on parent component
function App() {
  return (
    <div id="App">
      <Heading dataName={data.name} dataID={data.id} />
      <RulesetsForm />
    </div>
  )
}

export default App
