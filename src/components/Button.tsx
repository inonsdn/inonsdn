'use client'

import type { MouseEventHandler } from "react"
import { twMerge } from "tailwind-merge"

const baseClasses =`
    rounded-lg
    bg-secondary
    px-4
    h-10
    text-white
    font-semibold
    hover:bg-accent
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-accent
    disabled:opacity-50
    disabled:cursor-not-allowed
    whitespace-nowrap
    flex-shrink-0
    active:scale-95
    transition duration-150 ease-out
    `

interface ButtonProps {
    name: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string
}

export default function Button({ name, onClick, className = '' }: ButtonProps) {
    // handle in case no callback
    const handleClick = onClick ?? ((e) => {
        console.log(e)
    })

    // merge style class
    const mergedClassName = twMerge(baseClasses, className).trim()

    return (
        <button
            type="button"
            onClick={handleClick}
            className={mergedClassName}
        >
            {name}
        </button>
    )
}