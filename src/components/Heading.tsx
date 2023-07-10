interface HeadingProps {
  dataName: string,
  dataID: number,
}

export const Heading = ({dataName, dataID}: HeadingProps) => {
  return <div className="mt-5">
    <div className="p-6 bg-white bg-opacity-20 backdrop-blur-lg  drop-shadow-lg rounded-2xl text-center">
      <h1 className="text-4xl text-gray-700">{dataName || null}</h1>
      <h2 className="text-3xl font-light text-gray-700">MatrixID: {dataID || null}</h2>
    </div>
  </div>
}