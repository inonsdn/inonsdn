import { twMerge } from "tailwind-merge"

const baseClasses =`
    rounded-lg
    bg-secondary
    overflow-x-auto
    flex flex-nowrap
    w-200
    h-20
    `

interface CardProps {
    className?: string
    children?: React.ReactNode
    scrollClass?: string
    layoutClass?: string
}

export default function Card ({className = '', children}: CardProps) {

    // merge style class
    const mergedClassName = twMerge(baseClasses, className).trim()

    return (
        <div className={mergedClassName}>
            {children}
        </div>
    )
}