
type items = {
    id: number,
    name: string,
    calories: number
}

type listProps = {
    items: items[]
    category: string
}
function List({ items, category }: listProps) {
    return (
        <>
            <h2 className="font-bold text-3xl text-center text-gray-600 border-[3px] border-black bg-[hsl(185,100%,50%)] rounded-r-sm m-8 p-4">{category}</h2>
            <ol className="decoration-none text-center ml-11 mb-8">
                {items.map((item) => (
                    <li className="font-semibold" key={item.id}> <span className="text-gray-600 text-2xl"> {item.name} </span> -<span className="font-bold text-2xl"> {item.calories} </span> </li>
                ))}
            </ol>
        </>
    )
}

export default List;