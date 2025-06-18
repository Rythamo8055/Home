'use server';

/**
 * @fileOverview This file defines a Genkit flow for answering user questions about applications in a portfolio.
 *
 * - appAssistantDetails - A function that takes a user question and app details and returns an answer.
 * - AppAssistantDetailsInput - The input type for the appAssistantDetails function.
 * - AppAssistantDetailsOutput - The return type for the appAssistantDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AppAssistantDetailsInputSchema = z.object({
  appName: z.string().describe('The name of the application the user is asking about.'),
  question: z.string().describe('The user question about the application.'),
  appInfo: z.string().describe('Detailed information about the application.'),
});

export type AppAssistantDetailsInput = z.infer<typeof AppAssistantDetailsInputSchema>;

const AppAssistantDetailsOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question about the application.'),
});

export type AppAssistantDetailsOutput = z.infer<typeof AppAssistantDetailsOutputSchema>;

export async function appAssistantDetails(input: AppAssistantDetailsInput): Promise<AppAssistantDetailsOutput> {
  return appAssistantDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'appAssistantDetailsPrompt',
  input: {schema: AppAssistantDetailsInputSchema},
  output: {schema: AppAssistantDetailsOutputSchema},
  prompt: `You are a helpful assistant providing information about applications in a portfolio.

  You have access to detailed information about each application. Use this information to answer user questions accurately and thoroughly.

  Application Name: {{{appName}}}
  Application Information: {{{appInfo}}}

  User Question: {{{question}}}

  Answer:`,    
});

const appAssistantDetailsFlow = ai.defineFlow(
  {
    name: 'appAssistantDetailsFlow',
    inputSchema: AppAssistantDetailsInputSchema,
    outputSchema: AppAssistantDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
