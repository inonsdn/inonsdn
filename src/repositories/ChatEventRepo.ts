
export interface ChatEvent {
    id: number
    text: string
    sender: string
    eventTimestamp: number
}

export class ChatEventRepo {
    private readonly baseUrl = process.env.BASE_URL

    async getMockup(): Promise<Array<ChatEvent>> {
        const res = await fetch("https://dummyjson.com/quotes")
        const data = await res.json()

        return data.quotes.map((r: any) => ({
            id: r.id,
            text: r.quote,
            sender: r.author,
        }))
    }

    async getChats(): Promise<ChatEvent> {
        const res = await fetch(this.baseUrl)
        const data = await res.json()

        return data.map((r: any): ChatEvent => ({
            id: r.id,
            text: r.text,
            sender: r.sender,
            eventTimestamp: r.event_timestamp
        }))
    }
}