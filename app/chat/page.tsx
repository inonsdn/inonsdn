import { chatEventRepo } from "@/src/repositories";
import ChatStream from "@/src/widgets/ChatStream";

export default async function ChatView() {

    const chatEvents = await chatEventRepo.getMockup()

    return (
        <div className="w-50 h-200 overflow-hidden bg-foreground">
            <ChatStream
                chatEvents={chatEvents}
            ></ChatStream>
        </div>
    )
}