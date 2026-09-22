# Israr Ullah — Full-Stack AI Developer Portfolio

A modern, high-performance developer portfolio built with **Next.js 16 (Turbopack)**, **React 19**, **Three.js**, and **Tailwind CSS v4**. Engineered to showcase enterprise-grade systems, autonomous agentic workflows (LangGraph & RAG), and distributed full-stack applications.

---

## ✨ Key Features

- **Interactive 3D Developer Workstation (`Three.js`)**:
  - Custom 3D cyber laptop model with an illuminated keyboard grid, glowing trackpad, and angled glass display lid.
  - Live animated code terminal texture running syntax-highlighted code, `agent.deploy()` status, and telemetry.
  - Orbiting holographic tech badges (`AI`, `{ }`, `⚛ Next.js`, `λ FastAPI/Node`, `🗄️ Vector DB`, `</> TypeScript`) with dynamic camera-facing orientation.
  - Full 360° click-and-drag rotation, mouse-tracking perspective tilt, and reset button.

- **Executive 2-Column Hero Section**:
  - Live availability badge (`● Available for new opportunities`), role tags, gradient typography, and quick credibility stats.
  - Framed inside a sleek glassmorphic developer terminal window chassis (`israr-workstation.3d`, `git:(main)`).

- **Minimal Micro-Data Dust Canvas**:
  - Lightweight, non-intrusive 60 FPS interactive cursor effect featuring subtle 1-2px stardust particles with gentle inertia and quick dissolve.

- **Featured Systems & Applications Showcase**:
  - **Executive Spotlight Cards**: Subtle mouse-following radial border illumination, macOS window headers (`● ● ●`), and quick repository access.
  - **Category Filter Tabs**: Fast filtering between `All Projects`, `AI & GenAI`, `Full-Stack & SaaS`, and `Bots & Automation`.
  - **Highlighted Projects**:
    1. **Signature Apparel** — AI-powered fashion e-commerce with Qdrant RAG, LangGraph, and Vapi voice.
    2. **TradePulse** — Automated Discord trading bot & signal engine with Express.js backend.
    3. **DentiClinic AI** — Voice-enabled dental clinic booking & triage agent powered by Retell AI.
    4. **DataQuery AI** — Natural language database assistant with LangChain & Pinecone RAG.
    5. **WorkSphere** — Collaborative SaaS project management with Socket.IO and LangGraph.
    6. **Plant Pathology AI** — Real-time plant leaf disease detection with CNNs & TensorFlow.

- **Full-Stack Technical Matrix & Career Timeline**:
  - Categorized skill domains across GenAI, Frontend, Backend, Databases, Machine Learning, and DevOps.
  - Work history highlighting production roles at **Cyberify** (*Fullstack AI Developer*) and **Edusoft System Solutions** (*Fullstack Developer*).

- **Fully Functional Contact Form**:
  - Server-side email delivery using `nodemailer` and Google App Passwords.
  - Inline error/success feedback with an automatic `mailto:` client fallback.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | Next.js 16, React 19, Tailwind CSS v4, Framer Motion, Lucide Icons |
| **3D & Canvas** | Three.js (WebGL), HTML5 2D Canvas |
| **Backend & APIs** | Node.js, Express.js, FastAPI, Next.js Server Actions, Nodemailer |
| **AI & LLM Orchestration** | LangGraph, LangChain, RAG, OpenAI API, Retell AI, Vapi, MCP Integration |
| **Databases & Vector Stores** | PostgreSQL (Prisma), MongoDB, Qdrant, Pinecone, MySQL |
| **DevOps & Infrastructure** | Docker, Git, GitHub Actions, Vercel, Linux |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.18.0 or later
- **npm** or **pnpm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Engr-IsrarUllah/Portfolio.git
   cd Portfolio/My-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory (refer to `.env.example`):
   ```env
   GMAIL_USER=engrisrar256@gmail.com
   GMAIL_PASS=your_16_character_google_app_password
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Project Structure

```text
My-portfolio/
├── public/                  # Static assets and project mockups
│   └── projects/            # High-resolution screenshots for featured systems
├── src/
│   ├── app/
│   │   ├── actions.js       # Server action for nodemailer email dispatch
│   │   ├── globals.css      # Tailwind v4 theme and custom engineering grid
│   │   ├── layout.js        # Root layout, metadataBase, and openGraph SEO tags
│   │   └── page.js          # Main single-page application structure
│   ├── components/
│   │   ├── Navbar.jsx       # Smart-hiding dynamic glassmorphic navigation
│   │   ├── Hero.jsx         # 2-column executive developer hero layout
│   │   ├── Hero3D.jsx       # Interactive 3D developer workstation (Three.js)
│   │   ├── About.jsx        # Core competencies and tech matrix
│   │   ├── Experience.jsx   # Professional career timeline
│   │   ├── Projects.jsx     # Spotlight cards with category filters
│   │   ├── Contact.jsx      # Contact form with email validation & fallback
│   │   ├── Footer.jsx       # Brand signature, links, and back-to-top trigger
│   │   └── SmokeCursor.jsx  # Minimal micro-data dust particle canvas
│   └── lib/
│       └── data.js          # Centralized personal info, skills, experience, and projects
├── .env.example             # Template for email credentials setup
├── .env.local               # Local environment variables (git-ignored)
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies and build scripts
└── README.md                # Project documentation
```

---

## 📬 Contact & Connect

- **Name:** Israr Ullah
- **Role:** Full-Stack AI Developer & Software Engineer
- **Email:** [engrisrar256@gmail.com](mailto:engrisrar256@gmail.com)
- **LinkedIn:** [linkedin.com/in/engr-israr-20a619224](https://www.linkedin.com/in/engr-israr-20a619224)
- **GitHub:** [github.com/Engr-IsrarUllah](https://github.com/Engr-IsrarUllah)
- **Phone / WhatsApp:** [+92-3063813405](https://wa.me/923063813405)
