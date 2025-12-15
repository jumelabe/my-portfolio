import React, { useEffect } from "react";

const Chatbot: React.FC = () => {
  useEffect(() => {
    import("https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js" as any).then(
      (module) => {
        const Chatbot = module.default;
        Chatbot.init({
          chatflowid: "8a371aa6-367d-440c-99f0-7a435df2b6d4",
          apiHost: "https://cloud.flowiseai.com",
          theme: {
            button: {
              backgroundColor: "#0284c7",
              right: 20,
              bottom: 20,
              size: "medium",
              iconColor: "white",
              customIconSrc:
                "https://raw.githubusercontent.com/twbs/icons/main/icons/robot.svg",
            },
            chatWindow: {
              welcomeMessage: "Hello! I am Jumel's AI Assistant. Ask me anything about his projects or skills.",
              backgroundColor: "#ffffff",
              height: 600,
              width: 350,
              fontSize: 16,
              poweredByTextColor: "#ffffff",
              botMessage: {
                backgroundColor: "#f3f4f6",
                textColor: "#303235",
                showAvatar: true,
                avatarSrc:
                  "https://raw.githubusercontent.com/twbs/icons/main/icons/robot.svg",
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
