
"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = { message: "", success: false, issues: [], fields: {} };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        // Form was successfully submitted - toast already handled this case in previous version
        // if you want a success toast, add it here.
        // For now, only errors are toasted as per guidelines
      } else if (state.issues && state.issues.length > 0) { 
         toast({
          title: "Error",
          description: state.message || "Failed to send message. Please check the form.",
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);


  return (
    <Card 
      className={cn(
        "w-full max-w-lg mx-auto",
        "bg-glass-bg backdrop-blur-md backdrop-saturate-150",
        "border border-glass-border",
        "shadow-glass-lg dark:shadow-xl-mocha light:shadow-xl-latte",
        "transition-shadow-transform-bg duration-300 ease-in-out",
        "hover:shadow-glass-xl hover:dark:shadow-xl-mocha hover:light:shadow-xl-latte hover:bg-glass-bg-hover",
        "active:shadow-glass-md active:dark:shadow-md-mocha active:light:shadow-md-latte active:bg-glass-bg-active"
      )}
    >
      <CardHeader>
        <CardTitle className="font-headline text-2xl md:text-3xl text-primary">Get in Touch</CardTitle>
        <CardDescription className="text-foreground/80">
          Have a question or want to collaborate? Send me a message!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground/90">Full Name</Label>
            <Input 
              id="name" 
              name="name" 
              type="text" 
              placeholder="Your Name" 
              required 
              className="bg-input focus:ring-ring" 
              aria-describedby="name-error"
              defaultValue={state.fields?.name}
            />
            {state.issues?.find(issue => issue.toLowerCase().includes('name')) && (
              <p id="name-error" className="text-sm text-destructive">{state.issues.find(issue => issue.toLowerCase().includes('name'))}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground/90">Email Address</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="your.email@example.com" 
              required 
              className="bg-input focus:ring-ring"
              aria-describedby="email-error"
              defaultValue={state.fields?.email}
            />
            {state.issues?.find(issue => issue.toLowerCase().includes('email')) && (
               <p id="email-error" className="text-sm text-destructive">{state.issues.find(issue => issue.toLowerCase().includes('email'))}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground/90">Your Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Let's talk about..."
              required
              rows={5}
              className="bg-input focus:ring-ring min-h-[120px]"
              aria-describedby="message-error"
              defaultValue={state.fields?.message}
            />
            {state.issues?.find(issue => issue.toLowerCase().includes('message')) && (
               <p id="message-error" className="text-sm text-destructive">{state.issues.find(issue => issue.toLowerCase().includes('message'))}</p>
            )}
          </div>
          
          <SubmitButton />
          
           {state.message && state.success && (
            <p className="text-sm text-green-600 dark:text-green-400 mt-4">{state.message}</p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
