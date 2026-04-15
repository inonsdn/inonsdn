import type { ChangeEventHandler, KeyboardEventHandler } from "react"
import { twMerge } from "tailwind-merge"

const baseClasses =`
    w-full
    rounded-md
    bg-secondary
    px-3
    py-2
    h-10
    text-base
    text-white
    placeholder:text-foreground
    focus:border-none
    focus:outline-none
    `

interface TextInputProps {
    value?: string
    placeholder?: string
    className?: string
    onValueUpdate_cb?: ChangeEventHandler<HTMLInputElement>
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>
}

export default function TextInput({ value, placeholder, className, onValueUpdate_cb, onKeyDown }: TextInputProps) {

    // merge style class
    const mergedClassName = twMerge(baseClasses, className).trim()

    return (
        <input
            type="text"
            value={value}
            placeholder={placeholder}
            className={mergedClassName}
            onChange={onValueUpdate_cb}
            onKeyDown={onKeyDown}
        />
    )
}