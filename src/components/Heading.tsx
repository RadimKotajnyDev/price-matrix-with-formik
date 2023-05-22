interface HeadingProps {
  dataName: string,
  dataID: number
}

export const Heading = ({ dataName, dataID }: HeadingProps) => {
    return <div className="flex justify-center w-full">
      <div className="p-6 bg-gray-300 rounded-2xl text-center">
        <h1 className="text-4xl">{dataName || null}</h1>
        <hr className="my-2" />
        <h2 className="text-3xl font-light">MatrixID: {dataID || null}</h2>
      </div>
  </div>
}