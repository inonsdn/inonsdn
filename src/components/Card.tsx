import { twMerge } from "tailwind-merge"

const baseClasses =`
    rounded-lg
    bg-secondary
    overflow-hidden
    flex flex-nowrap
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