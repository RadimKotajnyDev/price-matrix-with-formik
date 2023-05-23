import {Field} from "formik";
import {InputClass} from "../../configs/classNames/ClassNames.tsx";

export default function OfferCode({nameProp}: any) {
  return (
    <>
      <label className="font-semibold">Offer Code</label>
      <Field type="text" name={nameProp} className={InputClass} />
    </>
  )
}