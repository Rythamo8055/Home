
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { AppShowcase } from "@/components/apps/AppShowcase";
import { ChatbotFab } from "@/components/chatbot/ChatbotFab";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-grow">
        <AppShowcase />
      </main>
      <ChatbotFab />
      <Footer />
    </div>
  );
}
