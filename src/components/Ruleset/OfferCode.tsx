import {Field} from "formik";

export default function OfferCode({nameProp}: any) {
  return (
    <div className="flex flex-col ml-5 border-l-2 border-gray-200 px-5 w-1/2">
      <label className="LabelClass">Offer Code</label>
      <Field type="text" name={nameProp} className="InputClass w-full" />
    </div>
  )
}