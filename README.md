# Jumel's Personal Portfolio

A modern, responsive personal portfolio website built with **React 19**, **TypeScript**, and **Vite**. This application serves as a digital resume, showcasing my academic journey, technical skills, and featured projects. It includes an integrated **AI Chatbot** powered by Flowise to answer visitor questions interactively.

🔗 **Live Demo:** [https://jumel-portfolio-wheat-eta-51.vercel.app/](https://jumel-portfolio-wheat-eta-51.vercel.app/)

## 🚀 Features

*   **⚡ High Performance:** Built with Vite for lightning-fast HMR and build times.
*   **🤖 AI Smart Assistant:** Integrated **Flowise RAG Chatbot** trained on my personal data (resume, skills, bio) to answer queries about me.
*   **📱 Fully Responsive:** Adaptive design that looks great on desktops, tablets, and mobile devices.
*   **🎨 Modern UI:** Clean and professional aesthetic using custom CSS.
*   **📂 Project Showcase:** dedicated section highlighting key projects like *Sit-in Monitoring*, *CLEARCAUSE*, and *HomeOwners Associations*.

## 🛠️ Tech Stack

*   **Frontend Framework:** [React 19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **AI Integration:** [FlowiseAI](https://flowiseai.com/) (Embedded Chat Widget)
*   **Deployment:** [Vercel](https://vercel.com/)
*   **Styling:** CSS3

## 📂 Project Structure

```bash
src/
├── assets/         # Images and static assets
├── components/     # Reusable UI components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Home.tsx        # Hero section
│   ├── About.tsx       # Bio and skills
│   ├── Portfolio.tsx   # Project cards
│   ├── Chatbot.tsx     # Flowise integration configuration
│   └── ...
├── App.tsx         # Main layout
└── main.tsx        # Application entry point
```

## 🤖 Chatbot Integration

The chatbot is powered by **FlowiseAI** and uses **RAG (Retrieval-Augmented Generation)** to provide accurate answers based on my specific context.

*   **Component:** `src/components/Chatbot.tsx`
*   **Knowledge Base:** The bot is trained on data from `New_chatbot_knowledge.txt`.
*   **Provider:** Cloud Flowise

## 💻 Getting Started

Follow these steps to run the project locally.

### Prerequisites
*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd Portfolio_Final
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 📄 License

This project is for educational and showcase purposes.