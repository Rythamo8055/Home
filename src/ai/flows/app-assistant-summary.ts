'use server';

/**
 * @fileOverview This file defines a Genkit flow for summarizing application information.
 *
 * - summarizeApp - A function that takes app information and returns a concise summary.
 * - SummarizeAppInput - The input type for the summarizeApp function, including the app's name and details.
 * - SummarizeAppOutput - The return type for the summarizeApp function, containing the summary.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeAppInputSchema = z.object({
  appName: z.string().describe('The name of the application.'),
  appDetails: z.string().describe('Detailed information about the application.'),
});
export type SummarizeAppInput = z.infer<typeof SummarizeAppInputSchema>;

const SummarizeAppOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the application.'),
});
export type SummarizeAppOutput = z.infer<typeof SummarizeAppOutputSchema>;

export async function summarizeApp(input: SummarizeAppInput): Promise<SummarizeAppOutput> {
  return summarizeAppFlow(input);
}

const summarizeAppPrompt = ai.definePrompt({
  name: 'summarizeAppPrompt',
  input: {schema: SummarizeAppInputSchema},
  output: {schema: SummarizeAppOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing applications based on their details.\n\nGiven the following application name and details, provide a concise summary highlighting its core purpose and key features.\n\nApplication Name: {{{appName}}}\nApplication Details: {{{appDetails}}}`,
});

const summarizeAppFlow = ai.defineFlow(
  {
    name: 'summarizeAppFlow',
    inputSchema: SummarizeAppInputSchema,
    outputSchema: SummarizeAppOutputSchema,
  },
  async input => {
    const {output} = await summarizeAppPrompt(input);
    return output!;
  }
);
