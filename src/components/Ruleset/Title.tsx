export const Title = (props: any) => {
  return (
    <p className="font-semibold text-4xl text-gray-800">Ruleset {props.rulesetID || "-"}
      <span className="font-thin mx-2">|</span>
      Priority: #{props.rulesetPriority}
    </p>
  )
}