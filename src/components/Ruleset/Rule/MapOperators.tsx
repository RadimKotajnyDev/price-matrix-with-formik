import {
  SelectField1,
  SelectField256,
  SelectField3,
  SelectField4
} from "../../../configs/options/SelectFieldsOperators.tsx";

export function MapOperators(fieldId: number) {
  switch(fieldId) {
    case 0:
      return <option key={0} value={0}>---select option---</option>
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

export function mapValueType(fieldId: number, valueInt: number, valueDecimal: number, valueDateTime: any, valueString: string) {
  switch(fieldId) {
    case 1:
      return valueInt
      //valueInt
    case 2:
      return valueDateTime
      //valueDateTime
    case 3:
      return valueInt
      //valueInt
    case 4:
      return valueString
      //valueString
    case 5:
      return valueDateTime
      //valueDateTime
    case 6:
      return valueDecimal
      //TODO: find out which value is going to be stored
  }
}