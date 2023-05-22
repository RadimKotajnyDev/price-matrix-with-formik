import './App.css'
import Ruleset from './components/Ruleset.tsx'
import Button from "./components/elements/Button.tsx";
import ButtonClass from "./components/elements/classNames/ButtonClass.tsx";
import AddRulesetClass from "./components/elements/classNames/AddRulesetClass.tsx";
import {Heading} from "./components/Heading.tsx";

function App(): JSX.Element {
  return (
    <div id="App">
      <Heading />
      <Ruleset />
      <Button classNameProp={ButtonClass + AddRulesetClass}>Add Ruleset</Button>
    </div>
  )
}

export default App
