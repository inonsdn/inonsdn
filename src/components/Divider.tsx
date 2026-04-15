import { twMerge } from "tailwind-merge"

interface DividerProps {
    className?: string
}
const baseClasses = `
    w-full
    border-b-1
    justify-center
`

export default async function Divider({className}: DividerProps) {
    const mergedClassName = twMerge(baseClasses, className).trim()
    return (
        <div className={mergedClassName}></div>
    )
}