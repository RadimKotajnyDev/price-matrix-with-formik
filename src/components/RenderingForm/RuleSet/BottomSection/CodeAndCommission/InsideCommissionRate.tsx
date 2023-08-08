import {Field} from "formik";


interface Props {
  insideCommissionRate: string | null
}

export const InsideCommissionRate = (props: Props) => {
  const {
    insideCommissionRate
  } = props
  return (
    <div className="flex flex-col">
      <label className="LabelClass">Inside Commission (%)</label>
      <Field
        className={"InputClass w-full"}
        type="number"
        pattern="/^\d+$/"
        min={0}
        //max={100}
        name={insideCommissionRate}
      />
    </div>
  )
}