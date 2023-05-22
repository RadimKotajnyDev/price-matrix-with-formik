const InputField = (props: any) => {
    return (
        <div className="flex flex-wrap -mx-3 mb-0">
            <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor={props.htmlForProp}>
                            {props.labelProp}
                </label>
                <input onChange={props.onChangeProp} name={props.nameProp}
                       value={props.valueProp} readOnly={false}
                       className={props.InputClassNameProp}
                    id={props.idProp} type={props.typeProp} placeholder={props.placeholderProp}/>
            </div>
        </div>
    );
}

export default InputField;