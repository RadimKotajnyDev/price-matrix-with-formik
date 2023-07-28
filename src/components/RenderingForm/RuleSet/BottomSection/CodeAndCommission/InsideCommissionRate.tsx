import {Field} from "formik";

const widthClass = " w-full min-w-[100px] max-w-[120px]"

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
        className={"InputClass" + widthClass}
        type="number"
        name={insideCommissionRate}
      />
    </div>
  )
}