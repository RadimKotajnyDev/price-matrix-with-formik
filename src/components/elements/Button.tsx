export default function Button(props: any): JSX.Element {
  return (
    <div className={props.center}>
      <button onClick={props.onClickProp} type={props.typeProp || "button"}
              className={props.classNameProp}
      >
        {props.children}
      </button>
    </div>
  )
}