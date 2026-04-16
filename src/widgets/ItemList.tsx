'use client'
import { twMerge } from "tailwind-merge"
import Divider from "../components/Divider"
import Button from "../components/Button"
import TextInput from "../components/TextInput"
import { useState } from "react"


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
    flex
    flex-col
`

const itemClasses = `
    w-full
    py-2
    flex
    flex-row
    justify-between
    my-1

    hover:bg-accent
    active:scale-95
    transition duration-150 ease-out
`

export default function ItemList({items, className}: ItemListProps) {

    const [filterText, setFilterText] = useState('')

    const mergedClassName = twMerge(baseClasses, className).trim()

    const getFilteredItems = () => {
        if (filterText === '') {
            return items
        }
        return items.filter((item) => item.header.toLowerCase().includes(filterText.toLowerCase()))
    }

    return (
        <div className={mergedClassName}>
            <div className="flex flex-row my-2 justify-center items-center">
                <p>Filter</p>
                <TextInput
                value={filterText}
                onValueUpdate_cb={(event) => setFilterText(event.target.value)}
                ></TextInput>
            </div>
            <Divider></Divider>
            <div className="flex-1 overflow-y-auto h-screen">
                {getFilteredItems().map((item) => {return (
                    <div key={item.key} className="w-full flex flex-col justify-center">
                        <div className={itemClasses}>
                            <div className="flex flex-col">
                                <p className="text-xl">{item.header}</p>
                                <p className="text-xs text-purple-100">{item.description}</p>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p>X</p>
                            </div>
                        </div>
                        <Divider></Divider>
                    </div>
                )})}
            </div>
        </div>
    )
}