import React, { useEffect } from "react";

const Chatbot: React.FC = () => {
  useEffect(() => {
    // This script will load the Flowise chatbot
    // We will replace 'YOUR_FLOWISE_URL' with your actual deployed URL later
    import("https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js" as any).then(
      (module) => {
        const Chatbot = module.default;
        Chatbot.init({
          chatflowid: "YOUR_CHATFLOW_ID", // We will fill this in later
          apiHost: "YOUR_FLOWISE_API_HOST", // We will fill this in later
          theme: {
            button: {
              backgroundColor: "#0284c7",
              right: 20,
              bottom: 20,
              size: "medium",
              iconColor: "white",
              customIconSrc:
                "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
            },
            chatWindow: {
              welcomeMessage: "Hello! I am Jumel's AI Assistant. Ask me anything about his projects or skills.",
              backgroundColor: "#ffffff",
              height: 700,
              width: 400,
              fontSize: 16,
              poweredByTextColor: "#303235",
              botMessage: {
                backgroundColor: "#f3f4f6",
                textColor: "#303235",
                showAvatar: true,
                avatarSrc:
                  "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
              },
              userMessage: {
                backgroundColor: "#0284c7",
                textColor: "#ffffff",
                showAvatar: true,
                avatarSrc:
                  "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
              },
              textInput: {
                placeholder: "Type your question",
                backgroundColor: "#ffffff",
                textColor: "#303235",
                sendButtonColor: "#0284c7",
              },
            },
          },
        });
      }
    );
  }, []);

  return null; // The script injects the bubble automatically
};

export default Chatbot;
