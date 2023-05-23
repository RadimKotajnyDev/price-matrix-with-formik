import {Field} from "formik";

export default function OfferCode({nameProp}: any) {
  return (
    <>
      <label className="font-semibold">Offer Code</label>
      <Field type="text" name={nameProp} className="h-fit" />
    </>
  )
}