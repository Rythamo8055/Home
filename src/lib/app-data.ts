export interface PortfolioApp {
  id: string;
  name: string;
  tagline: string;
  url: string;
  imageUrl: string;
  imageHint: string;
  description: string; // Core purpose
  info: string; // Detailed information for chatbot
  featuresSummary: string; // A brief summary of key features for the card
  techStack?: string[]; // Optional: can be part of 'info'
}

export const appsData: PortfolioApp[] = [
  {
    id: 'flow-forge',
    name: 'FlowForge',
    tagline: 'Visual Thinking & Planning, AI-Powered.',
    url: 'https://whiteboard-six-mu.vercel.app/',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'flowchart diagram',
    description: 'A web application for visual thinking and planning with flow-based diagramming, a free-form whiteboard, and AI assistance.',
    featuresSummary: 'Flow canvas with AI node suggestion, whiteboard with drawing tools, template management.',
    info: `Core Purpose:
FlowForge is a web application designed for visual thinking and planning. It offers two primary tools: a flow-based diagramming canvas for creating structured diagrams, and a free-form whiteboard for brainstorming and sketching. The application also incorporates AI to assist users in the diagramming process.

Key Features:

1.  Flow Canvas:
    *   Technology: Built using React Flow.
    *   Functionality: Users can create, display, and manage diagrams consisting of nodes and edges.
    *   Node Management: Users can add new nodes, edit the label and type of existing nodes, and delete nodes.
    *   Edge Management: Users can connect nodes by drawing edges between them.
    *   AI-Assisted Node Suggestion: An AI tool can suggest the type for a new node based on the types of nodes it's connected to and the overall context of the canvas. The AI provides a suggestion, a confidence score, and reasoning. Users can provide a "canvas context" description to improve AI suggestions.
    *   Viewport Control: Includes minimap, zoom, and pan controls.
    *   Flow Naming: Users can name their current flow.

2.  Whiteboard Canvas:
    *   Functionality: Provides a digital whiteboard for free-form drawing and sketching.
    *   Drawing Tools: Users can draw with a pen tool, select different colors (using a color picker), and adjust line width.
    *   Eraser: An eraser tool is available to remove parts of the drawing.
    *   Canvas Management: Includes undo, redo, and clear canvas functionalities.
    *   Touch Support: The whiteboard supports drawing via touch input on mobile devices and tablets.

3.  Canvas Templates:
    *   Functionality: Users can start new flow diagrams from predefined sample templates or save their current flow canvas state as a new user-created template.
    *   Storage: User-created templates are saved in the browser's local storage.
    *   Management: A dedicated "Templates" page allows users to browse, search, load, and delete their saved templates (sample templates cannot be deleted).

4.  User Interface & Design:
    *   Navigation: A bottom navigation bar with a simple pill-shaped design provides easy access to the main sections: Canvas, Templates, and Whiteboard.
    *   Styling:
        *   Colors: Utilizes a calm blue (#5DADE2) as the primary color, a light blue-gray (#E8F4FF) for the background, and a vibrant purple (#A37ACC) as an accent.
        *   Fonts: Employs 'Poppins' for headlines and 'Inter' for body text.
        *   Effects: Incorporates a glassmorphism (frosted glass) effect on UI elements like panels and buttons.
        *   Component Style: Uses ShadCN UI components with rounded corners and shadows for a modern, professional look.
    *   Icons: Leverages \`lucide-react\` for iconography.

5.  Technology Stack:
    *   Frontend Framework: Next.js (App Router)
    *   UI Library: React
    *   UI Components: ShadCN UI
    *   Styling: Tailwind CSS
    *   AI Integration: Genkit (for the AI node suggestion feature)
    *   Diagramming Library: \`reactflow\`
    *   Color Picker: \`react-color\` (used in the whiteboard)
    *   PWA: \`next-pwa\` for Progressive Web App capabilities.

6.  Data Handling (Current State):
    *   Flow Canvas & Whiteboard Data: The active state of the flow canvas (nodes, edges, viewport, name) and the whiteboard canvas (strokes) is managed using local React component state. This means data is not automatically persisted if the user closes the tab or refreshes the page, unless explicitly saved as a template (for the flow canvas).
    *   Templates: Flow canvas templates are persisted in the browser's local storage.

7.  Collaboration (Current State):
    *   The original plan included real-time collaboration using RxDB and WebRTC. However, due to technical challenges during development (persistent package installation issues), RxDB and its associated P2P collaboration features have been removed from the current codebase.
    *   Therefore, FlowForge does not currently support real-time multi-user collaboration or data synchronization across different devices/users.

8.  Progressive Web App (PWA):
    *   FlowForge is configured as a PWA. If the necessary icon files are provided by the developer, it can be installed on users' devices and offer some offline capabilities through a service worker.`,
  },
  {
    id: 'pr-visualizer',
    name: 'PR Visualizer',
    tagline: 'Dynamic Video Summaries for GitHub Pull Requests.',
    url: 'https://pr-fawn-rho.vercel.app/',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'code visualization',
    description: 'Transforms GitHub Pull Requests into dynamic video summaries using AI-driven code insights and animated presentations.',
    featuresSummary: 'GitHub PR data ingestion, AI code insights, client-side video generation with Remotion.',
    info: `Application Name: PR Visualizer

Core Purpose: PR Visualizer is a web application designed to transform GitHub Pull Requests into dynamic video summaries. It provides an engaging and quick overview of a PR's key aspects by fetching its data, generating AI-driven code insights, and then creating an animated video presentation.

Key Features & Functionalities:

    GitHub PR Data Ingestion:
        The application accepts a GitHub Pull Request URL as input from the user.
        It then fetches comprehensive data related to that PR using the GitHub API (via Octokit). This includes:
            PR details: Title, author, avatar, source/target branches, creation/update dates, current state (open, closed, merged), and statistics (additions, deletions, files changed, commit count).
            Commit history: List of commits with author information and messages.
            File changes: List of files affected by the PR, along with their status (added, modified, deleted) and individual diffs.
            CI/CD status: Information about check runs associated with the PR's head commit.

    AI-Powered Code Insights:
        Leverages Genkit and the Gemini API to analyze the fetched code diff.
        Generates a textual summary highlighting key changes, potential issues, or interesting points within the code modifications.

    Dynamic Video Generation (Client-Side):
        Uses Remotion to programmatically create and render a video in the user's browser.
        The video is a composition of several distinct, animated scenes:
            Title Scene: Introduces the PR with its title, number, author's username and avatar, and the source/target branches.
            Stats Scene: Visually presents PR statistics such as the number of commits, files changed, lines added, and lines deleted using animated counters and progress bars.
            Code Diff Walkthrough Scene: Displays the AI-generated code insights followed by a visual walkthrough of the code diffs for a selection of changed files (currently up to 3 files). This scene highlights additions and deletions with distinct colors and uses a scrolling animation.
            Commit History Scene: Animates a timeline or list of commit messages, often including author avatars and names.
            CI/CD Status Scene: Shows the overall status of continuous integration/continuous deployment checks (e.g., success, failure, pending) using relevant icons and text.
            Final Scene: Concludes the video by displaying the final status of the PR (e.g., "Ready for Review", "Successfully Merged!", "PR Closed") with appropriate visual cues.
        Smooth transitions (e.g., fade, slide) are used between scenes.

    Video Playback:
        The generated video is played directly within the application using the Remotion Player.
        A progress bar with a percentage display shows the current playback position of the video.

    User Interface & Experience:
        Visualize Page: The main page where users input the PR URL. It displays progress indicators (with percentage text) during the data fetching and video preparation phases.
        History Page: Stores a list of previously visualized PRs in the browser's localStorage. Users can revisit these, copy the PR URL, or open the PR directly on GitHub.
        Settings Page: Allows users to toggle between light and dark UI themes. The preference is saved in localStorage.
        Navigation: A persistent bottom navigation bar facilitates easy movement between the "Visualize," "History," and "Settings" pages.

UI Design & Styling:

    Aesthetic: Modern, high-tech, employing a "glassmorphism" style for card elements (frosted glass effect with background blur and transparency).
    Color Scheme (Themeable via globals.css):
        Primary: Saturated blue (#3498db or a similar adjusted blue like hsl(204, 70%, 45%) for accessibility) to evoke technology and reliability.
        Background (Light Mode): Light grayish-blue (#f0f8ff or hsl(208, 100%, 97%)).
        Accent: Vibrant green (#2ecc71 or hsl(145, 63%, 49%)) for positive indicators and contrast.
        Supports both light and dark modes.
    Typography:
        Headlines: 'Space Grotesk' (sans-serif) for a computerized, techy feel.
        Body Text: 'Inter' (sans-serif) for a modern, clean, and readable appearance.
        Code: 'Source Code Pro' (monospace) for displaying code diffs and snippets.
    Components: Built with ShadCN UI components, styled using Tailwind CSS and the application's theme.
    Icons: lucide-react is used for modern, flat-style icons.
    Animations: Smooth, liquid-like transitions and animations in Remotion scenes. UI elements feature standard web animations for a polished feel.

Technology Stack Summary:

    Frontend Framework: Next.js (with React)
    UI Components: ShadCN UI
    Styling: Tailwind CSS
    Video Generation: Remotion (client-side rendering)
    AI Integration: Genkit (using Gemini API for code insights)
    GitHub API Client: Octokit
    State Management & Data Fetching: React hooks, Next.js Server Actions, React.cache.`,
  },
  {
    id: 'zenith-focus-timer',
    name: 'Zenith Focus Timer',
    tagline: 'Mindful Breathing & Focus Sessions.',
    url: 'https://zenith-471.pages.dev/',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'meditation timer',
    description: 'A web app to help users improve focus, practice mindful breathing, and relax with customizable timers and sound options.',
    featuresSummary: 'Customizable timer, voice-guided breathing, ambient sounds, light/dark themes.',
    info: `The "Zenith Focus Timer" is a web-based application designed to help users improve focus, practice mindful breathing, and relax.

Core Functionality:

    Customizable Timer: Users can select from predefined durations (e.g., 1 min, 5 min, 10 min, etc.) or set a custom time for their focus or meditation sessions.

    Timer Controls: Standard controls include Start, Pause, and Reset.

    Time Display: A clear, large digital display shows the remaining time.

Key Features:

    Breathing Guidance:

        Optional voice cues guide users through a breathing cycle (Breathe In, Hold, Breathe Out).

        The visual display also shows the current breathing phase text when this feature is active.

        This feature can be toggled on/off.

    Sound Options:

        Chimes: Gentle synthesized chime sounds mark the beginning and end of a timer session.

        Ambient Noise: Users can enable a subtle background (white) noise to help mask distractions. This is browser-generated.

        Master Sound Control: A global toggle allows users to enable or disable all sounds (chimes, voice cues, ambient noise).

        Granular Sound Control: Individual toggles for breathing voice cues and background noise, which are effective only if the master sound control is also enabled.

        Speech Synthesis: Voice cues for breathing are generated using the browser's Web Speech API.

    Visual Themes:

        The app supports both Light and Dark themes to suit user preference and environment.

        The theme choice is saved locally.

    Settings Panel:

        A modal window allows users to customize:

            Timer duration.

            Theme (Light/Dark).

            All sound settings (master toggle, breathing cues, ambient noise).

    User Experience:

        Minimalist Design: The UI is clean and uncluttered, promoting a calm and focused environment.

        Responsive: The app is designed to work well across different screen sizes (desktops, tablets, mobile).

        PWA (Progressive Web App): It can be "added to Home Screen" on supported devices for an app-like experience.

        Accessibility: ARIA attributes are used to improve accessibility for screen readers (e.g., for timer display and buttons).

How it Works (Technical Highlights):

    Built with React and TypeScript.

    Uses browser-native AudioContext for synthesized chimes and ambient noise.

    Uses browser-native SpeechSynthesis API for voice-guided breathing.

    Manages state (timer, settings) within React components.

    Stores theme preference in localStorage.

Target Users:

Individuals looking for a simple, aesthetically pleasing, and customizable tool to:

    Manage work/study intervals (like Pomodoro technique, though not strictly a Pomodoro app).

    Guide meditation sessions.

    Practice controlled breathing exercises.

    Create a focused environment with minimal distractions.

The app emphasizes browser-based functionality, meaning all sounds are generated client-side, and it advises users to ensure their device is not on silent and volume is up for sound features to work correctly.`,
  },
];
