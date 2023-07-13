import {
  SelectField1,
  SelectField256,
  SelectField3,
  SelectField4
} from "../../../configs/options/SelectFieldsOperators.tsx";

export function MapOperators(fieldId: number) {
  switch (fieldId) {
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

export function MapValueStoreType(fieldId: number, valueInt: number, valueDecimal: number, valueDateTime: any, valueString: string) {
  switch (fieldId) {
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

export function MapValueType(fieldId: number) {
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
    //TODO: find out which value is going to be stored
  }
}

export function SelectStoreValue(fieldId: number, setFieldValue: any, valueInt: number, valueDecimal: number, valueDateTime: any, valueString: string) {
  switch (fieldId) {
    case 0:
      setFieldValue(valueString, null)
      setFieldValue(valueDateTime, null)
      setFieldValue(valueDecimal, null)
      setFieldValue(valueInt, null)
      break;
    case 1:
      setFieldValue(valueString, null)
      setFieldValue(valueDateTime, null)
      setFieldValue(valueDecimal, null)
      setFieldValue(valueInt, "")
      break;
    //valueInt
    case 2:
      setFieldValue(valueString, null)
      setFieldValue(valueDateTime, "")
      setFieldValue(valueDecimal, null)
      setFieldValue(valueInt, null)
      break;
    //valueDateTime
    case 3:
      setFieldValue(valueString, null)
      setFieldValue(valueDateTime, null)
      setFieldValue(valueDecimal, null)
      setFieldValue(valueInt, "")
      break;
    //valueInt
    case 4:
      setFieldValue(valueString, "")
      setFieldValue(valueDateTime, null)
      setFieldValue(valueDecimal, null)
      setFieldValue(valueInt, null)
      break;
    //valueString
    case 5:
      setFieldValue(valueString, null)
      setFieldValue(valueDateTime, "")
      setFieldValue(valueDecimal, null)
      setFieldValue(valueInt, null)
      break;
    //valueDateTime
    case 6:
      setFieldValue(valueString, null)
      setFieldValue(valueDateTime, null)
      setFieldValue(valueDecimal, "")
      setFieldValue(valueInt, null)
      break;
    // valueDecimal
    //TODO: find out which value is going to be stored
  }
}

export function StoreInteger(fieldId: number, value: string) {
  switch (fieldId) {
    case 1:
    case 3:
    case 6:
      return parseInt(value)
    default: return value
  }
}