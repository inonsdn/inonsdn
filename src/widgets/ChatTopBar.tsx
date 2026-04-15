'use client'
import { twMerge } from "tailwind-merge"
import Card from "../components/Card"
import ChatBubble from "./ChatBubble"
import ChatInput from "./ChatInput"
import {ChatEvent} from "@/src/repositories/ChatEventRepo"
import Button from "../components/Button"
import { useRouter } from "next/navigation"

const baseClasses =`
    w-full
    flex
    flex-row
    items-center
    justify-between
    `

interface ChatTopBarProps {
    className?: string
}

export default function ChatTopBar({className}: ChatTopBarProps) {

    const router = useRouter()

    const handleBackClick_cb = () => {
        router.push('/')
    }

    return (
        <Card className={baseClasses}>
            <Button
                name="<<"
                onClick={handleBackClick_cb}
                className="h-full"/>
            <h2 className="flex-1 text-center">
                Test
            </h2>
            <Button
                name="..."
                className="h-full"/>
        </Card>
    )
}