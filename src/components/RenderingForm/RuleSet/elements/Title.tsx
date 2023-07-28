export const Title = (props: {ruleSetID: number | string | null, ruleSetPriority: number | string | null}) => {
  return (
    <p className="font-semibold text-4xl text-gray-800">Ruleset {props.ruleSetID || <span className="font-light">-</span>}
      <span className="font-thin mx-2">|</span>
      Priority: #{props.ruleSetPriority}
    </p>
  )
}