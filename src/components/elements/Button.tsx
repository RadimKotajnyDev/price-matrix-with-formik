export default function Button(props: any): JSX.Element {
  return (
    <div className={props.center}>
      <button onClick={props.onClickProp}
              className={props.classNameProp}
      >
        {props.children}
      </button>
    </div>
  )
}