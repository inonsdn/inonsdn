'use server'

import { noteRepo } from "@/src/repositories"
import { redirect } from "next/navigation"

export async function createNoteAction(formData: FormData) {
    const title = formData.get('title') as string
    const text = formData.get('text') as string
    await noteRepo.createNote(title, text)
    redirect('/notes')
}
