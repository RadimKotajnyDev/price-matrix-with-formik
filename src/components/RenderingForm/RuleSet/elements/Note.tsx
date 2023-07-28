import {Field} from "formik";

export default function Note(props: {nameProp: string}) {
  return (
    <div className="flex flex-col pb-5 border-b-2 border-gray-200 w-full">
      <label className="LabelClass">Offer Code</label>
      <Field type="text" name={props.nameProp} className="InputClass" />
    </div>
  )
}