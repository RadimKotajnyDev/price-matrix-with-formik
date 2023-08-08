import {Field} from "formik";


interface InsideCommissionRateProps {
  insideCommissionRate: string | null
}

export const InsideCommissionRate = (props: InsideCommissionRateProps) => {
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