import {
  EmptySelect,
  SelectField1,
  SelectField256,
  SelectField3,
  SelectField4
} from "../../../configs/options/SelectFieldsOperators.tsx";

export function MapOperators(fieldId: number) {
  switch(fieldId) {
    case 0:
      return EmptySelect.map((current) => (
        <option key={current.id} value={current.id}>{current.name}</option>
      ))
    case 1:
      return SelectField1.map((current) => (
        <option key={current.id} value={current.id}>{current.name}</option>
      ))
    case 2:
    case 5:
    case 6:
      return SelectField256.map((current) => (
        <option key={current.id} value={current.id}>{current.name}</option>
      ))
    case 3:
      return SelectField3.map((current) => (
        <option key={current.id} value={current.id}>{current.name}</option>
      ))
    case 4:
      return SelectField4.map((current) => (
        <option key={current.id} value={current.id}>{current.name}</option>
      ))
    default:
      alert("mapping error!")
      break;
  }
}