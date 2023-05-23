import {Field} from "formik";

export default function OfferCode({nameProp}: any) {
  return (
    <>
      <label>Offer Code</label>
      <Field type="text" name={nameProp} />
    </>
  )
}