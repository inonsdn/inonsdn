'use client'
import type { KeyboardEvent } from "react"
import { twMerge } from "tailwind-merge"
import TextInput from "../components/TextInput"
import Button from "../components/Button"
import { useState } from "react"

const baseClasses =`
    w-full
    flex
    items-stretch
    gap-2
    `

interface ChatInputProps {
    className?: string
}

export default function ChatInput({className}: ChatInputProps) {

    const [text, setText] = useState("")

    const handleSend_cb = () => {
        console.log(text)
        setText("")
    }

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault()
            handleSend_cb()
        }
    }

    // merge style class
    const mergedClassName = twMerge(baseClasses, className).trim()

    return (
        <div className={mergedClassName}>
            <TextInput
                value={text}
                onValueUpdate_cb={(event) => setText(event.target.value)}
                onKeyDown={handleInputKeyDown}
            />
            <Button
                name="|>"
                className="w-20"
                onClick={handleSend_cb}
            />
        </div>
    )
}