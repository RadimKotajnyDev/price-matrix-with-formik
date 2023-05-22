import Note from "./Note.tsx";

interface RulesetProps {
  Key: number,
  RulesetID: number,
  RulesetPriority: number
}

export default function Ruleset({ Key, RulesetID, RulesetPriority}: RulesetProps) {

  return (
    <div key={Key}
      className="w-fit p-4 bg-gray-500">
      <div>
        <p className="font-semibold text-4xl">Ruleset {RulesetID}
          <span className="font-thin">|</span>
          Priority: #{RulesetPriority}
        </p>
        {/* TODO: Priority changer */}
        <Note />
      </div>
    </div>
  )
}