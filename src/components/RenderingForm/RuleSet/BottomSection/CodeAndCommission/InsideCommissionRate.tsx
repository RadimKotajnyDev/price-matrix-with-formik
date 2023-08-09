import {Field} from "formik";
import {BottomSectionInterface} from "../../../../../configs/interface/BottomSectionInterface.ts";

export const InsideCommissionRate = (props: {insideCommissionRate: BottomSectionInterface['insideCommissionRate']}) => {
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