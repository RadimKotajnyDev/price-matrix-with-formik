import {Field} from "formik";
import {InputClass} from "../../configs/classNames/ClassNames.tsx";

export default function OfferCode({nameProp}: any) {
  return (
    <div className="flex flex-col ml-10 border-l-2 border-gray-300 px-5">
      <label className="font-semibold">Offer Code</label>
      <Field type="text" name={nameProp} className={InputClass} />
    </div>
  )
}