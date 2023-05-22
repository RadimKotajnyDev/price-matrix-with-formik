export default function Ruleset({ Key, RulesetID, RulesetPriority}) {

  return (
    <div key={Key}
      className="w-fit p-4 bg-gray-500">
      <div>
        <p className="font-semibold text-4xl">Ruleset {RulesetID}
          <span className="font-thin">|</span>
          Priority: #{RulesetPriority}
        </p>
        {/* TODO: Priority changer */}
      </div>
    </div>
  )
}