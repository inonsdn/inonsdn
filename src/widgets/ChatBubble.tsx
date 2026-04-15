'use client'
import { twMerge } from "tailwind-merge"
import Card from "../components/Card"

const baseClasses =`
    max-w-[60vw]
    mix-w-[20vw]
    flex
    flex-col
    gap-2
    `

interface ChatBubbleProps {
    value: string
    className?: string
    senderUsername: string
    isMine: boolean
}

export default function ChatBubble({value, senderUsername, isMine, className}: ChatBubbleProps) {

    // merge style class
    const mergedClassName = twMerge(baseClasses, className).trim()
    const chatStatus = "Read"
    const senderAlignment = isMine ? 'self-end mr-4' : 'self-start ml-4'

    const username = isMine ? "You" : senderUsername

    return (
        <div className={mergedClassName}>
            <p className={`text-purple-300 ${senderAlignment}`}>
                {username}
            </p>
            <Card className="p-3 max-w-full w-full h-auto">
                <p className="wrap-break-word whitespace-pre-wrap text-white">
                    {value}
                </p>
            </Card>
            {/* <p className="text-xs text-right text-purple-300">{chatStatus}</p> */}
        </div>
    )
}