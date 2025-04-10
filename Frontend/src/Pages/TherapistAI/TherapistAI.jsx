import { useState, useEffect, useRef } from "react";
import { RiSendPlaneLine } from "react-icons/ri";

const QuickResponse = ({ onSelect }) => {
  const suggestions = [
    "Tell me more about that",
    "How does that make you feel?",
    "What thoughts come to mind?",
    "I understand, please continue",
    "That sounds challenging",
    "You're doing great",
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {suggestions.map((text, index) => (
        <button
          key={index}
          onClick={() => onSelect(text)}
          className="px-4 py-2.5 bg-gradient-to-br from-orange-100 to-orange-50 text-orange-700 rounded text-xs font-medium hover:from-orange-200 hover:to-orange-100 transition-all duration-300 whitespace-nowrap shadow-sm hover:shadow-md transform hover:scale-105 active:scale-95"
        >
          {text}
        </button>
      ))}
    </div>
  );
};

const TypingIndicator = () => (
  <div className="flex space-x-2 p-4 max-w-[70%] rounded-2xl bg-white/90 backdrop-blur-xl shadow-xl w-24 animate-fade-in">
    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
  </div>
);

const DateDivider = ({ date }) => (
  <div className="flex items-center justify-center my-8">
    <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 text-xs font-medium shadow-sm">
      {date}
    </div>
  </div>
);

const Message = ({ message, isUser }) => (
  <div
    className={`flex ${
      isUser ? "justify-end" : "justify-start"
    } mb-8 animate-fade-in-up`}
  >
    {!isUser && (
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg mr-3 flex-shrink-0">
        <span className="text-white text-sm font-medium">AI</span>
      </div>
    )}
    <div
      className={`max-w-[70%] rounded-lg py-2 px-3 transform transition-all duration-300 relative ${
        isUser
          ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl"
          : "bg-white/90 backdrop-blur-xl shadow-lg"
      }`}
    >
      <p className="text-sm font-medium leading-relaxed tracking-wide">
        {message.text}
      </p>
      {!isUser && message.mood && (
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
          {message.mood === "positive" && "😊"}
          {message.mood === "neutral" && "😐"}
          {message.mood === "concerned" && "🤔"}
        </div>
      )}
      <div className="absolute bottom-0 right-0 transform translate-y-full mt-1 text-xs text-gray-400 font-light">
        {new Date(message.timestamp).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </div>
  </div>
);

const FloatingBlob = ({ className }) => (
  <div
    className={`absolute rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-20 ${className}`}
  />
);

export default function TherapistAI() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome to your safe space. I'm here to listen and support you. How are you feeling today?",
      isUser: false,
      mood: "positive",
      timestamp: new Date().toISOString(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      isUser: true,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setIsTyping(true);

    try {
      const response = await fetch(
        "https://grammar-correction-and-sentence-building.onrender.com/therapist-chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: "test-user-1", // You can make this dynamic later
            message: newMessage,
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (data.therapistResponse) {
        const aiMessage = {
          id: messages.length + 2,
          text: data.therapistResponse,
          isUser: false,
          mood: "concerned", // Optionally map mood based on response later
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        console.error("Invalid response format", data);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10">
        <div className="bg-white/40 backdrop-blur-xl rounded-lg p-8 min-h-[80vh] flex flex-col border border-white/20 transition-all duration-500">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl text-gray-800 tracking-wide">
                AI Therapist
              </h1>
              <p className="text-sm text-gray-600 font tracking-wide">
                A safe space for open conversation
              </p>
            </div>
          </div>
          {/* Always scrolled to the bottom */}
          <div className="flex-1 overflow-y-scroll max-h-[45vh] min-h-[45vh] mb-6 px-4 scroll-smooth">
            {messages.reduce((acc, message, index, array) => {
              const messageDate = new Date(
                message.timestamp
              ).toLocaleDateString();
              const prevMessageDate =
                index > 0
                  ? new Date(array[index - 1].timestamp).toLocaleDateString()
                  : null;

              if (messageDate !== prevMessageDate) {
                acc.push(
                  <DateDivider key={`date-${messageDate}`} date={messageDate} />
                );
              }

              acc.push(
                <Message
                  key={message.id}
                  message={message}
                  isUser={message.isUser}
                />
              );

              return acc;
            }, [])}
            {isTyping && (
              <div className="flex justify-start mb-6">
                <TypingIndicator />
              </div>
            )}
            {/* Invisible div to ensure scrolling */}
            <div ref={messagesEndRef} />
          </div>

          <QuickResponse onSelect={(text) => setNewMessage(text)} />

          <form onSubmit={handleSendMessage} className="mt-auto relative">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Share your thoughts..."
                className="flex-1 px-6 py-3 bg-white/70 border-none rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-500/30 transition-all duration-200 hover:bg-white/80 text-gray-700 font-normal tracking-wide placeholder:text-gray-500/60 text-sm"
              />
              <button
                type="submit"
                className="px-3 py-3 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-100 hover:scale-105 active:scale-95 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50 relative group"
              >
                <RiSendPlaneLine />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
