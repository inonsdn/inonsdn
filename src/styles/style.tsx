import type { CSSProperties } from "react"

export interface ButtonStyle extends CSSProperties {
    backgroundColor?: string
    color?: string
    padding?: string
    borderRadius?: string
    border?: string
    cursor?: string
    fontSize?: string
    fontWeight?: string | number
    transition?: string
}