import {Field} from "formik";

export const OfferCode = ({nameProp}: any) => {
  return (
    <div>
      <label className="LabelClass">Offer Code</label>
      <Field type="text" name={nameProp} className="InputClass w-full" />
    </div>
  )
}