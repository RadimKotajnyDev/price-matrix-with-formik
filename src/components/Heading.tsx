import {fetchData} from "../API.tsx";

const data = await fetchData();

export const Heading = () => {
    return <div className="flex justify-center w-full">
      <div className="p-6 bg-gray-300 rounded-2xl text-center">
        <h1 className="text-4xl">{data.name || null}</h1>
        <hr className="my-2" />
        <h2 className="text-3xl font-light">MatrixID: {data.id || null}</h2>
      </div>
  </div>
}