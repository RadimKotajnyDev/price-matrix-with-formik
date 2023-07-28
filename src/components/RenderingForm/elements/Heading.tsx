interface HeadingProps {
    data: {name: string}
}

export const Heading = ({data}: HeadingProps) => {
    return (
        <div className="mt-5 sticky top-0 z-50 block w-fit ml-auto mr-auto">
            <div className="p-3 w-fit bg-white bg-opacity-20 backdrop-blur-lg  drop-shadow-lg rounded-md text-center">
                <h1 className="text-3xl text-gray-700">{data.name || null}</h1>
            </div>
        </div>
    )
}