import {
  SelectField1,
  SelectField25,
  SelectField3,
  SelectField4
} from "../../../../../configs/options/SelectFieldsOperators.tsx";

export function MapOperators(fieldId: string | number | null) {
  switch (fieldId) {
    case 0:
      return <option key={0} value={0}>---select operator---</option>
    case 1:
      return SelectField1.map((current: {name: string, id: number}) => (
        <option key={current.id} value={current.id}>{current.name}</option>
      ))
    case 2:
    case 5:
      return SelectField25.map((current: {name: string, id: number}) => (
        <option key={current.id} value={current.id}>{current.name}</option>
      ))
    case 3:
      return SelectField3.map((current: {name: string, id: number}) => (
        <option key={current.id} value={current.id}>{current.name}</option>
      ))
    case 4:
      return SelectField4.map((current: {name: string, id: number}) => (
        <option key={current.id} value={current.id}>{current.name}</option>
      ))
    default:
      alert("mapping error!")
      break;
  }
}

export function MapValueType(fieldId: string | number | null) {
  switch (fieldId) {
    case 1:
      return "number"
    case 2:
      return "date"
    case 3:
      return "number"
    case 4:
      return "text"
    case 5:
      return "date"
  }
}
