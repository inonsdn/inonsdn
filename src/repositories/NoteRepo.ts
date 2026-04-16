
export interface Note {
    id: number
    text: string
    title: string
    // updatedTimestamp: number
}

export class NoteRepo {
    private readonly baseUrl = process.env.BASE_URL
    private readonly userId = "8f6ca383-44af-46be-8dd2-5d037f4c3f22"

    async getMockup(): Promise<Array<Note>> {
        const res = await fetch("https://dummyjson.com/quotes")
        const data = await res.json()

        return data.quotes.map((r: any) => ({
            id: r.id,
            text: r.quote,
            sender: r.author,
        }))
    }

    async updateNote(id: number, title: string, text: string): Promise<Note> {
        const requestUrl = `${this.baseUrl}/notes/${id}`
        const res = await fetch(requestUrl, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, text }),
        })
        const data = await res.json()
        return { id: data.Id, title: data.Title, text: data.Text }
    }

    async createNote(title: string, text: string): Promise<Note> {
        const requestUrl = `${this.baseUrl}/notes`
        const res = await fetch(requestUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: this.userId, title, text }),
        })
        const data = await res.json()
        return { id: data.Id, title: data.Title, text: data.Text }
    }

    async getMyNotes(): Promise<Array<Note>> {
        const requestUrl = `${this.baseUrl}/myNotes/${this.userId}`
        const res = await fetch(
            requestUrl,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        const data = await res.json()

        return data.map((r: any): Note => ({
            id: r.Id,
            text: r.Text,
            title: r.Title,
            // updatedTimestamp: r.Updated_timestamp
        }))
    }
}