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
          <strong>📘 The Problem</strong>
          <br />
          In 2020, the founder of Execute Automation was delivering high-quality
          automation courses via third-party platforms like Udemy. However, he
          had limited control over pricing, revenue, and content ownership.
        </p>
        <p>
          <strong>🎯 The Goal</strong>
          <br />
          To build a full-featured LMS platform with free and paid courses,
          secure video hosting, student authentication, progress tracking,
          badges, onboarding campaigns, Stripe payments, and smart resume
          support.
        </p>
        <p>
          <strong>💻 My Role in the Project</strong>
          <br />
          As a fresh graduate, I became a key developer and later the sole
          maintainer. I created user registration, email verification, Stripe
          integration, video logic, onboarding campaigns, and a timestamp-based
          resume feature, working on both React.js and Laravel.
        </p>
        <p>
          <strong>🧱 Project Development Phases</strong>
          <br />
          <u>Phase 1: MVP – Free Courses & Onboarding</u>
          <br />
          Deployed platform with free content, imported Udemy students, focused
          on registration, authentication, and streaming.
          <br />
          <u>Phase 2: Premium Courses & Smart Tracking</u>
          <br />
          Enabled paid courses, added video timestamp logic, completion badges,
          and overall progression tracking.
        </p>
        <p>
          <strong>⚙️ Tech Stack</strong>
          <br />
          Frontend: React.js
          <br />
          Backend: Laravel (PHP)
          <br />
          Database: MySQL
          <br />
          Payments: Stripe
          <br />
          Videos: Vimeo, YouTube
          <br />
          Design & Hosting: Figma + GoDaddy
        </p>
        <p>
          <strong>🧠 What I Learned</strong>
          <br />
          Deep React/Laravel integration, Stripe payment flows, backend logic
          for user progress, and independent responsibility in a startup.
        </p>
        <p>
          <strong>🔄 Retrospective</strong>
          <br />
          If I rebuilt today: Next.js, MongoDB/Firebase, PWA support, and
          analytics dashboard.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Pitarata.nz – Community Platform for Sri Lankans in New Zealand",
    subtitle:
      "Connecting a diaspora through classifieds, services, and content",
    content: (
      <>
        <p>
          <strong>📘 The Problem</strong>
          <br />
          Many Sri Lankans residing in New Zealand faced difficulties in finding
          community-focused services such as housing, job postings, local
          tradespeople, cultural events, and buying/selling second-hand goods.
          There was no dedicated online platform tailored to their language,
          cultural expectations, and real-life needs—forcing them to rely on
          scattered Facebook groups and general classified sites that lacked
          relevance and personalization.
        </p>
        <p>
          <strong>🎯 The Goal</strong>
          <br />
          To build a centralized, community-driven platform where Sri Lankan
          users in New Zealand could easily register, post and browse ads,
          connect with service providers, discover housing opportunities, and
          stay updated with local community blog content. The platform aimed to
          be mobile-friendly, intuitive for all age groups, and robust enough to
          scale as user interest grew.
        </p>
        <p>
          <strong>💻 My Role in the Project</strong>
          <br />I acted as the project lead and full-stack developer. From
          inception to execution, I managed the architecture, feature planning,
          design implementation, development, testing, and deployment. My
          responsibilities included:
          <ul>
            <li>Designing user registration and onboarding flows</li>
            <li>Implementing email verification and marketing campaigns</li>
            <li>
              Building the ad posting system with categories, media upload, and
              expiration logic
            </li>
            <li>Creating a similar ads algorithm to improve ad discovery</li>
            <li>Integrating banner ads and mobile-specific ad layouts</li>
            <li>Ensuring responsive design and mobile-first UX</li>
            <li>
              Collaborating with our designer and later a social media
              specialist
            </li>
          </ul>
        </p>
        <p>
          <strong>🧱 Project Development Phases</strong>
          <br />
          <u>Phase 1: Core MVP Development</u>
          <br />
          - Developed the user authentication system, ad categories, email
          campaigns, and dashboard features
          <br />
          - Allowed users to browse, post, and manage classified ads without
          friction
          <br />
          - Deployed a mobile-optimized layout with media previews, tag
          filtering, and search
          <br />
          - Added banner ad zones for monetization and partner visibility
          <br />
          <br />
          <u>Phase 2: Community Content & SEO Expansion</u>
          <br />
          - We brought on a dedicated social media marketing specialist to
          increase engagement
          <br />
          - Added a blog/news section for cultural articles, updates,
          interviews, and user guides
          <br />
          - Integrated social sharing features to drive organic reach
          <br />- Began tracking user analytics for performance and engagement
          insights
        </p>
        <p>
          <strong>⚙️ Tech Stack</strong>
          <br />
          Frontend: React.js
          <br />
          Backend: Laravel (PHP)
          <br />
          Database: MySQL
          <br />
          UI/UX Design: Figma
          <br />
          Hosting & Domain: Freeparking.nz
        </p>
        <p>
          <strong>🧠 What I Learned</strong>
          <br />
          This project strengthened my leadership and technical skills. I
          learned how to break down a large vision into achievable development
          phases, balance client requirements with practical timelines, and
          coordinate with designers and marketers. I also gained insights into
          building mobile-first experiences, classifieds filtering logic, and
          managing community platforms with growth potential.
        </p>
        <p>
          <strong>🔄 Retrospective</strong>
          <br />
          If I were to revisit this project today, I would consider switching to
          Next.js for built-in SEO and performance improvements, Firebase for
          real-time data and scalable authentication, and integrate CMS options
          like Sanity or Strapi for the blog section.
        </p>
        <p>
          <strong>📅 Timeline</strong>
          <br />
          Project initiated and launched in 2023, with iterative development
          continuing into 2024 based on user feedback and community growth.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Rural Food Store Ordering System – New Zealand",
    subtitle: "Empowering rural stores with digital ordering capabilities",
    content: (
      <>
        <p>
          <strong>📘 The Problem</strong>
          <br />
          Many rural food stores in New Zealand lacked access to digital
          infrastructure, making it hard for customers—especially the elderly or
          those in remote areas—to place orders ahead of time. Most ordering
          still happened via phone calls or manual visits, leading to missed
          orders, miscommunication, and inefficiencies in stock handling.
        </p>
        <p>
          <strong>🎯 The Goal</strong>
          <br />
          To create a lightweight, mobile-friendly online ordering system that
          allows customers to browse food items and place simple orders without
          needing an account. The goal was to serve both tech-savvy and low-tech
          customers with a frictionless user experience. Initial focus was on a
          single village store, with future potential to expand across regions.
        </p>
        <p>
          <strong>💻 My Role in the Project</strong>
          <br />
          As the lead full-stack developer and architect of the project, I was
          responsible for translating the business needs of rural store owners
          into a functional MVP. My work included:
          <ul>
            <li>
              Gathering requirements from store managers and community reps
            </li>
            <li>
              Designing a low-friction ordering interface optimized for older
              users and basic mobile devices
            </li>
            <li>
              Implementing food item listing and filtering without login or cart
              complexity
            </li>
            <li>
              Building a dual checkout flow: <em>“Order for Pickup”</em> or{" "}
              <em>“Pay on Delivery”</em>
            </li>
            <li>
              Creating a simple admin panel for item updates and viewing placed
              orders
            </li>
            <li>
              Handling bilingual content (English/Sinhalese) for
              migrant-friendly UX
            </li>
          </ul>
        </p>
        <p>
          <strong>🧱 Project Development Phases</strong>
          <br />
          <u>Phase 1: MVP – Food Listings & Order Flow</u>
          <br />
          - Users could browse food items, select quantities, and choose their
          delivery method (home delivery with payment on delivery, or store
          pickup).
          <br />
          - Orders were submitted and logged in the backend with optional
          customer notes and mobile numbers.
          <br />
          - Admins could mark orders as completed or update food item
          availability.
          <br />
          <br />
          <u>Phase 2: Feedback & Refinement</u>
          <br />
          - Added visual cues for product availability
          <br />
          - Included optional delivery area checking based on postcode
          <br />
          - Optimized touch areas and mobile loading speeds for 3G-level
          connections
          <br />- Setup email/SMS alerts for incoming orders (planned for next
          phase)
        </p>
        <p>
          <strong>⚙️ Tech Stack</strong>
          <br />
          Frontend: React.js
          <br />
          Backend: Laravel (PHP)
          <br />
          Database: MySQL
          <br />
          Design: Figma
          <br />
          Hosting & Domain: Freeparking.nz
        </p>
        <p>
          <strong>🧠 What I Learned</strong>
          <br />
          This project helped me understand how to build inclusive systems with
          limited infrastructure in mind. I learned how to simplify UI/UX to
          serve users who might not be comfortable with typical e-commerce
          flows. I also improved my ability to make technology accessible and
          adaptable for small, local businesses that rely on trust and direct
          communication more than automation.
        </p>
        <p>
          <strong>🔄 Retrospective</strong>
          <br />
          Given the opportunity to scale this project, I would consider adding:
          <ul>
            <li>Progressive Web App (PWA) support for offline access</li>
            <li>Firebase or Supabase for real-time order sync</li>
            <li>Multi-store support with dashboards and regional filtering</li>
            <li>Twilio or similar service for SMS-based confirmations</li>
          </ul>
        </p>
        <p>
          <strong>📅 Timeline</strong>
          <br />
          Project launched in late 2023, with MVP rollout completed within 6
          weeks. Initial testing and deployment were done with a single rural
          store, with the option to expand based on community response.
        </p>
      </>
    ),
  },
];
