'use client'
import { twMerge } from "tailwind-merge"
import Card from "../components/Card"
import ChatBubble from "./ChatBubble"
import ChatInput from "./ChatInput"
import {ChatEvent} from "@/src/repositories/ChatEventRepo"
import Button from "../components/Button"
import { useRouter } from "next/navigation"

const baseClasses =`
    max-w-screen
    justify-center
    flex
    flex-row
    rounded-lg
    overflow-x-auto
    flex flex-nowrap
    `

const menuClass = `
    px-4
    py-2
    hover:bg-accent
    rounded-lg
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-accent
    disabled:opacity-50
    disabled:cursor-not-allowed
    active:scale-95
    transition duration-150 ease-out
`

interface TabProps {
    className?: string
}

const menuNames = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Notes',
        path: '/notes',
    },
    {
        name: 'ChatLog',
        path: '/chat',
    },
    {
        name: 'Dashboard',
        path: '/',
    },
    // 'Dashboard',
    // 'Dashboard',
    // 'Dashboard',
    // 'Dashboard',
    // 'Dashboard',
    // 'Dashboard',
    // 'Dashboard',
    // 'Dashboard',
]


export default function Tab({className}: TabProps) {

    const router = useRouter()

    const handleBackClick_cb = () => {
        router.push('/')
    }

    const menuComponents = () => {
        return menuNames.map((m) => {
            const onClickMenu = () => {
                console.log('Menu click', m.name)
                router.push(m.path)
            }
            return (
                <div className={menuClass}
                    key={m.name}
                    onClick={onClickMenu}
                    >
                    <p>{m.name}</p>
                </div>
            )}
        )
    }

    return (
        <div className={baseClasses}>
            {menuComponents()}
        </div>
    )
}