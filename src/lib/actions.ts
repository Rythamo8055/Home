"use server";

import { z } from "zod";
import { summarizeApp, type SummarizeAppInput } from "@/ai/flows/app-assistant-summary";
import { appAssistantDetails, type AppAssistantDetailsInput } from "@/ai/flows/app-assistant-details";
import { appsData, type PortfolioApp } from "@/lib/app-data";

// Contact Form
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = ContactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  // In a real app, you'd send an email or save to a database here
  console.log("Contact form submitted:", parsed.data);

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}


// Chatbot
export type ChatbotResponse = {
  answer: string;
  isError?: boolean;
};

function findAppInQuery(query: string): PortfolioApp | null {
  const lowerQuery = query.toLowerCase();
  for (const app of appsData) {
    if (lowerQuery.includes(app.name.toLowerCase()) || lowerQuery.includes(app.id.toLowerCase())) {
      return app;
    }
  }
  return null;
}

export async function getChatbotResponse(question: string): Promise<ChatbotResponse> {
  if (!question.trim()) {
    return { answer: "Please ask a question." };
  }

  try {
    const targetApp = findAppInQuery(question);

    if (targetApp) {
      const input: AppAssistantDetailsInput = {
        appName: targetApp.name,
        question: question,
        appInfo: targetApp.info,
      };
      const result = await appAssistantDetails(input);
      return { answer: result.answer };
    }

    // If no specific app is mentioned, and the question is generic like "tell me about your apps"
    if (question.toLowerCase().includes("your apps") || question.toLowerCase().includes("all apps")) {
      let combinedSummary = "I've worked on the following applications:\n\n";
      for (const app of appsData) {
        const summaryInput: SummarizeAppInput = {
          appName: app.name,
          appDetails: app.description, // Using shorter description for summary overview
        };
        const summaryResult = await summarizeApp(summaryInput);
        combinedSummary += `**${app.name}**: ${summaryResult.summary}\n\n`;
      }
      return { answer: combinedSummary.trim() };
    }
    
    // If it's a specific question but no app is clearly identified
    // Check if the question is "summarize [app name]"
    const summarizeMatch = question.toLowerCase().match(/summarize (.*)/);
    if (summarizeMatch && summarizeMatch[1]) {
        const appNameToSummarize = summarizeMatch[1].trim();
        const appToSummarize = appsData.find(app => app.name.toLowerCase() === appNameToSummarize);
        if (appToSummarize) {
            const summaryInput: SummarizeAppInput = {
                appName: appToSummarize.name,
                appDetails: appToSummarize.info,
            };
            const summaryResult = await summarizeApp(summaryInput);
            return { answer: `Summary for ${appToSummarize.name}: ${summaryResult.summary}` };
        }
    }


    return { answer: "I can provide details about FlowForge, PR Visualizer, and Zenith Focus Timer. Which app are you interested in, or could you rephrase your question?" };

  } catch (error) {
    console.error("Error processing chatbot request:", error);
    return { answer: "Sorry, I encountered an error trying to respond. Please try again.", isError: true };
  }
}
