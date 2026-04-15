import { chatEventRepo, noteRepo } from "@/src/repositories";
import ChatStream from "@/src/widgets/ChatStream";

export default async function ChatView() {

    const chatEvents = await chatEventRepo.getMockup()
    const notes = await noteRepo.getMyNotes()
    console.log(notes)

    return (
        <div className="w-full h-full">
            <ChatStream
                chatEvents={chatEvents}
                className="h-[80%]"
            ></ChatStream>
        </div>
    )
}