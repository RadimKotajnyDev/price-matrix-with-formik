import {
  SelectField1,
  SelectField256,
  SelectField3,
  SelectField4
} from "../../../../configs/options/SelectFieldsOperators.tsx";

export function MapOperators(fieldId: string | number | null) {
  switch (fieldId) {
    case 0:
      return <option key={0} value={0}>---select operator---</option>
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

export function MapValueStoreType(fieldId: number | "", valueIntName: string | number, valueDecimalName: string | number, valueDateTimeName: string | number, valueStringName: string | number) {
  switch (fieldId) {
    case 1:
      return valueIntName
    //valueInt
    case 2:
      return valueDateTimeName
    //valueDateTime
    case 3:
      return valueIntName
    //valueInt
    case 4:
      return valueStringName
    //valueString
    case 5:
      return valueDateTimeName
    //valueDateTime
    case 6:
      return valueDecimalName
  }
}

export function MapValueType(fieldId: string | number | null) {
  switch (fieldId) {
    case 1:
      return "number"
    //valueInt
    case 2:
      return "datetime-local"
    //valueDateTime
    case 3:
      return "number"
    //valueInt
    case 4:
      return "text"
    //valueString
    case 5:
      return "datetime-local"
    //valueDateTime
    case 6:
      return "number"
    // valueDecimal
  }
}

export function StoreInteger(fieldId: number | "", value: string): string | number {
  switch (fieldId) {
    case 1:
    case 3:
    case 6:
      return parseInt(value)
    default: return value
  }
}