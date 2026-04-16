import TextInput from "@/src/components/TextInput"
import Button from "@/src/components/Button"
import { createNoteAction } from "./actions"

export default function NewNotePage() {
    return (
        <div className="w-full h-full flex justify-center items-start pt-10">
            <form action={createNoteAction} className="w-[80%] flex flex-col gap-4">
                <h1 className="text-xl font-semibold text-foreground">New Note</h1>
                <TextInput
                    name="title"
                    placeholder="Title"
                />
                <textarea
                    name="text"
                    placeholder="Write your note..."
                    rows={8}
                    className="w-full rounded-md bg-secondary px-3 py-2 text-base text-white placeholder:text-foreground focus:outline-none resize-none"
                />
                <Button name="Save" type="submit" />
            </form>
        </div>
    )
}
