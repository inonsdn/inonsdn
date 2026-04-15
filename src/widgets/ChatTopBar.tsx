'use client'
import { twMerge } from "tailwind-merge"
import Card from "../components/Card"
import ChatBubble from "./ChatBubble"
import ChatInput from "./ChatInput"
import {ChatEvent} from "@/src/repositories/chats/ChatEventRepo"

const baseClasses =`
    w-full
    flex
    flex-col
    bg-background
    h-full
    `

interface ChatTopBarProps {
    className?: string
}

export default function ChatTopBar({className}: ChatTopBarProps) {

    return (
        <Card className="w-full justify-items-center shrink-0">
            <p>Test User</p>
        </Card>
    )
}