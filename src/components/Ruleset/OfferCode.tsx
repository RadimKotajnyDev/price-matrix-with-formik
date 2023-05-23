import {Field} from "formik";

export default function OfferCode({nameProp}: any) {
  return (
    <>
      <label>Note</label>
      <Field type="text" name={nameProp} />
    </>
  )
}