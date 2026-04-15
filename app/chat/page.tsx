import { chatEventRepo } from "@/src/repositories";
import ChatStream from "@/src/widgets/ChatStream";

export default async function ChatView() {

    const chatEvents = await chatEventRepo.getMockup()

    return (
        <div className="w-full h-full">
            <ChatStream
                chatEvents={chatEvents}
            ></ChatStream>
        </div>
    )
}