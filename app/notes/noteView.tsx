import Card from "@/src/components/Card"
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
        <div className="w-full h-full justify-center">
            <ItemList
                items={itemInfos}
                className="w-[80%]"
            ></ItemList>
        </div>
    )
}