import './App.css'
import RulesetsForm from './components/RulesetsForm.tsx'
import Button from "./components/elements/Button.tsx";
import {ButtonClass, AddRulesetClass, center} from "./configs/classNames/ClassNames.tsx"
import {Heading} from "./components/Heading.tsx";
import {fetchData} from "./API.tsx";

const data = await fetchData() //fetching data on parent component
function App() {
  return (
    <div id="App">
      <Heading dataName={data.name} dataID={data.id} />
      <RulesetsForm />
      <Button center={center}
              classNameProp={ButtonClass + AddRulesetClass}
      >Add Ruleset</Button>
    </div>
  )
}

export default App
