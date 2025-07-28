import type { ReactElement } from "react";

export type Story = {
  id: number;
  title: string;
  subtitle: string;
  content: ReactElement;
};

export const stories: Story[] = [
  {
    id: 1,
    title: "Execute Automation LMS Platform",
    subtitle: "Building a self-owned learning platform",
    content: (
      <>
        <p>
          <strong>📘 The Problem</strong><br />
          In 2020, the founder of Execute Automation was delivering high-quality automation courses via third-party platforms like Udemy. However, he had limited control over pricing, revenue, and content ownership.
        </p>
        <p>
          <strong>🎯 The Goal</strong><br />
          To build a full-featured LMS platform with free and paid courses, secure video hosting, student authentication, progress tracking, badges, onboarding campaigns, Stripe payments, and smart resume support.
        </p>
        <p>
          <strong>💻 My Role in the Project</strong><br />
          As a fresh graduate, I became a key developer and later the sole maintainer. I created user registration, email verification, Stripe integration, video logic, onboarding campaigns, and a timestamp-based resume feature, working on both React.js and Laravel.
        </p>
        <p>
          <strong>🧱 Project Development Phases</strong><br />
          <u>Phase 1: MVP – Free Courses & Onboarding</u><br />
          Deployed platform with free content, imported Udemy students, focused on registration, authentication, and streaming.<br />
          <u>Phase 2: Premium Courses & Smart Tracking</u><br />
          Enabled paid courses, added video timestamp logic, completion badges, and overall progression tracking.
        </p>
        <p>
          <strong>⚙️ Tech Stack</strong><br />
          Frontend: React.js<br />
          Backend: Laravel (PHP)<br />
          Database: MySQL<br />
          Payments: Stripe<br />
          Videos: Vimeo, YouTube<br />
          Design & Hosting: Figma + GoDaddy
        </p>
        <p>
          <strong>🧠 What I Learned</strong><br />
          Deep React/Laravel integration, Stripe payment flows, backend logic for user progress, and independent responsibility in a startup.
        </p>
        <p>
          <strong>🔄 Retrospective</strong><br />
          If I rebuilt today: Next.js, MongoDB/Firebase, PWA support, and analytics dashboard.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Offline Inventory Management System",
    subtitle: "A desktop-first solution for small businesses",
    content: (
      <>
        <p>
          <strong>Problem:</strong> Local businesses needed a simple, offline inventory tool with no cloud dependency.
        </p>
        <p>
          <strong>Solution:</strong> Built a React/Electron app with SQLite, barcode scanning, and printable reports.
        </p>
        <p>
          <strong>Role:</strong> Led UI/UX, database design, and deployment packaging.
        </p>
        <p>
          <strong>Learned:</strong> Desktop app packaging, local data sync, and user onboarding for non-technical clients.
        </p>
      </>
    ),
  },
];