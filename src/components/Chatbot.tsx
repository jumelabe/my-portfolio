import React, { useEffect } from "react";

const Chatbot: React.FC = () => {
  useEffect(() => {
    import("https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js" as any).then(
      (module) => {
        const Chatbot = module.default;
        Chatbot.init({
          chatflowid: "41de70da-f63d-4559-bdd4-66f91204ef02",
          apiHost: "https://cloud.flowiseai.com",
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

  return null;
};

export default Chatbot;
