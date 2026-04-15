
export interface User {
    id: string
    username: string
}

export class UserRepo {
    private readonly baseUrl = process.env.BASE_URL
    private readonly userId = "8f6ca383-44af-46be-8dd2-5d037f4c3f22"

    async registerUser(username: string, passwd: string): Promise<void> {
        const requestUrl = `${this.baseUrl}/registerUser`
        const res = await fetch(
            requestUrl,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: passwd
                })
            }
        )
    }

    async login(username: string, passwd: string): Promise<User> {
        const requestUrl = `${this.baseUrl}/login`
        const res = await fetch(
            requestUrl,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: passwd
                })
            }
        )

        const data = await res.json()
        return {
            id: data.id,
            username: data.username
        }
    }
}