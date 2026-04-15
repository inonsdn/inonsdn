import { noteRepo } from "@/src/repositories";
import ItemList from "@/src/widgets/ItemList";
import NoteView from "./noteView";

export default async function NotePage() {

    const notes = await noteRepo.getMyNotes()
    console.log(notes)

    return (
        <NoteView
            notes={notes}
        >

        </NoteView>
    )
}