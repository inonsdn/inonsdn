'use client'
import { twMerge } from "tailwind-merge"
import Card from "../components/Card"
import ChatBubble from "./ChatBubble"
import ChatInput from "./ChatInput"
import {ChatEvent} from "@/src/repositories/chats/ChatEventRepo"
import ChatTopBar from "./ChatTopBar"

const baseClasses =`
    w-full
    h-full
    flex
    flex-col
    bg-background
    overflow-hidden
    `

interface ChatStreamProps {
    chatEvents: Array<ChatEvent>
    className?: string
}

export default function ChatStream({chatEvents, className}: ChatStreamProps) {

    // merge style class
    const mergedClassName = twMerge(baseClasses, className).trim()

    const isMine = (chatEvent: ChatEvent) => {
        return chatEvent.sender === "Rumi"
    }

    const chatAlignClassNameFunc = (chatEvent: ChatEvent) => {
        return isMine(chatEvent) ? 'self-end mr-4' : 'self-start ml-4'
    }

    return (
        <Card className={mergedClassName}>
            <ChatTopBar>
            </ChatTopBar>
            <div className="flex-1 overflow-y-auto flex flex-col gap-2 items-start px-4">
                {chatEvents.map((c) => (
                    <ChatBubble
                        key={c.id}
                        value={c.text}
                        senderUsername={c.sender}
                        isMine={isMine(c)}
                        className={`${chatAlignClassNameFunc(c)}`}
                    />
                ))}
            </div>
            <div className="shrink-0 w-full px-4 py-2">
                <ChatInput></ChatInput>
            </div>
        </Card>
    )
}