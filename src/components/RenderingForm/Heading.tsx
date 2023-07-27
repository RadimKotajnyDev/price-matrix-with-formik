interface HeadingProps {
    data: any
}

export const Heading = ({data}: HeadingProps) => {
    return (
        <div className="mt-5 sticky top-0 z-50 block w-fit ml-auto mr-auto">
            <div className="p-3 w-fit bg-white bg-opacity-20 backdrop-blur-lg  drop-shadow-lg rounded-2xl text-center">
                <h1 className="text-3xl text-gray-700">{data.name || null}</h1>
                <h2 className="text-2xl font-light text-gray-700">MatrixID: {data.id || null}</h2>
            </div>
        </div>
    )
}