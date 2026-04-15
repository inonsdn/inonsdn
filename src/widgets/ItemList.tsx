import { twMerge } from "tailwind-merge"
import Divider from "../components/Divider"


export interface ItemInfo {
    key: any
    header: string
    description?: string
    onItemClicked_cb?: () => (null)
}

interface ItemListProps {
    items: Array<ItemInfo>
    className?: string
    constructComponentFunc?: (item: any) => (React.ReactNode)
}

const baseClasses = `
    w-full
    h-full
    flex-col
    justify-center
    items-center
`

const itemClasses = `
    w-full
    py-2
    flex
    flex-row
    justify-between
    m-2

    hover:bg-accent
    active:scale-95
    transition duration-150 ease-out
`

export default async function ItemList({items, className}: ItemListProps) {

    const mergedClassName = twMerge(baseClasses, className).trim()
    return (
        <div className={mergedClassName}>
            {items.map((item) => {return (
                <div key={item.key} className="w-full justify-center">
                    <div className={itemClasses}>
                        <p>{item.header}</p>
                        <p>{item.description}</p>
                    </div>
                    <Divider></Divider>
                </div>
            )})}
        </div>
    )
}