export const ExclusionDates = () => {

  //TODO: add functionality

  return (
    <section className="flex flex-row border-t-2 pt-2">
      <div className="flex flex-col">
        <p className="LabelClass">Exclusion dates:</p>
        <table className="border-collapse border border-black text-center my-3">
          <thead>
            <tr>
              <td className="border border-black bg-gray-200">Time/(Eve/mat)</td>
              <td className="border border-black bg-gray-200">Date from</td>
              <td className="border border-black bg-gray-200">Date to</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black">
                <input type="text" className="TableInput" value="Mat"/>
              </td>
              <td className="border border-black">
                <input type="date" className="TableInput" value=""/>
              </td>
              <td className="border border-black">
                <input type="date" className="TableInput" value=""/>
              </td>
            </tr>
            <tr>
              <td className="border border-black">
                <input type="time" className="TableInput" value="15:30"/>
              </td>
              <td className="border border-black">
                <input type="date" className="TableInput" value=""/>
              </td>
              <td className="border border-black">
                <input type="date" className="TableInput" value=""/>
              </td>
            </tr>
            <tr>
              <td className="border border-black">
                <input type="time" className="TableInput" value="19:30"/>
              </td>
              <td className="border border-black">
                <input type="date" className="TableInput" value=""/>
              </td>
              <td className="border border-black">
                <input type="date" className="TableInput" value=""/>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" className="ButtonClass bg-secondary px-2 py-1 w-fit">Add exclusion date</button>
      </div>
    </section>
  )
}