import {Field} from "formik";

export const PriceBandCodes = (props: {nameProp: string | null | string[] }) => {

    const {nameProp} = props

    return (
        <div className="flex flex-col w-full text-secondary">
            <label className="LabelClass">Price Band Code(s)</label>
            <p className="text-xs font-light mb-2 ml-2 text-secondary">Insert one or more price band codes. <br/>(divide them with new line)</p>
            <Field as="textarea" type="text" name={nameProp} className="InputClass" />
        </div>
    )
}