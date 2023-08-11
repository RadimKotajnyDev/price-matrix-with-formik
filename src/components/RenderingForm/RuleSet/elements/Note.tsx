import {Field} from "formik";

export const Note = (props: {nameProp: string | null}) => {
  return (
    <div className="flex flex-col pb-5 border-b-2 border-gray-200 w-full">
      <label className="LabelClass">Note</label>
      <Field type="text" name={props.nameProp} className="InputClass" />
    </div>
  )
}