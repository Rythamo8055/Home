import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { ChatbotFab } from "@/components/chatbot/ChatbotFab";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12 md:py-16 lg:py-20 flex items-center justify-center">
        <ContactForm />
      </main>
      <ChatbotFab />
      <Footer />
    </div>
  );
}
