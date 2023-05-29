export default function Button(props: any): JSX.Element {
  return (
    <button onClick={props.onClickProp} type={props.typeProp || "button"}
            className={props.classNameProp}
    >
      {props.children}
    </button>
  )
}