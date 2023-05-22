export default function Button(props: any): JSX.Element {
  return (
    <button onClick={props.onClickProp}
            className={props.classNameProp}
    >
      {props.children}
    </button>
  )
}