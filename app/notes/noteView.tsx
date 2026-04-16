import Link from "next/link"
import { Note } from "@/src/repositories/NoteRepo"
import ItemList, { ItemInfo } from "@/src/widgets/ItemList"


interface NoteViewProps {
    notes: Array<Note>
}

function convertNoteToItems(notes: Array<Note>) {
    const items = []
    for (const note of notes) {
        items.push({
            key: note.id,
            header: note.title,
            description: note.text
        })
    }
    return items
}

export default async function NoteView({notes}: NoteViewProps) {

    const itemInfos = convertNoteToItems(notes)

    return (
        <div className="w-full h-full flex flex-col items-center pt-10 gap-4">
            <div className="w-[80%] flex justify-end">
                <Link
                    href="/notes/new"
                    className="rounded-lg bg-secondary px-4 h-10 text-white font-semibold hover:bg-accent flex items-center transition duration-150 ease-out"
                >
                    + New Note
                </Link>
            </div>
            <ItemList
                items={itemInfos}
                className="w-[80%]"
            />
        </div>
    )
}