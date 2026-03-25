"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  text: string;
  isBot: boolean;
}

export function LiveChatConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Welcome to LaTaVi Engineering. To begin a secure session, please provide your corporate email address.", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Guardrails: Basic profanity/misuse filter
  const containsRestrictedContent = (text: string) => {
    const restricted = ["hack", "spam", "admin", "password", "script", "alert("];
    return restricted.some(word => text.toLowerCase().includes(word));
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isSubmitting) return;

    // Guardrail: Length check
    if (inputValue.length > 500) {
      setMessages(prev => [...prev, { text: "Error: Message exceeds maximum safety length (500 chars).", isBot: true }]);
      return;
    }

    // Guardrail: Content check
    if (containsRestrictedContent(inputValue)) {
      setMessages(prev => [...prev, { text: "SECURITY_NOTICE: Your input triggered a safety filter. Please rephrase your technical inquiry.", isBot: true }]);
      setInputValue("");
      return;
    }

    const currentInput = inputValue;
    setInputValue("");
    setMessages(prev => [...prev, { text: currentInput, isBot: false }]);

    if (!isEmailVerified) {
      if (validateEmail(currentInput)) {
        setEmail(currentInput);
        setIsEmailVerified(true);
        setMessages(prev => [...prev, { text: `Identity verified: ${currentInput}. How can we assist with your cloud infrastructure today?`, isBot: true }]);
      } else {
        setMessages(prev => [...prev, { text: "Invalid format. Please provide a valid corporate email to continue.", isBot: true }]);
      }
      return;
    }

    // Process technical inquiry
    setIsSubmitting(true);
    
    try {
      // Sending to user's specified pseudo-hash endpoint via FormSubmit AJAX
      await fetch("https://formsubmit.co/ajax/246a4985f910688dba417d7154e7a358", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          message: currentInput,
          _subject: "New Secure Concierge Inquiry - LaTaVi"
        })
      });

      setMessages(prev => [...prev, { 
        text: "Inquiry transmitted securely. A senior engineer has been notified and will respond to your corporate email shortly.", 
        isBot: true 
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Transmission error. Our systems are currently under high load. Please try again or use the main contact form.", isBot: true }]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="mb-4 w-80 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <h3 className="font-mono text-white text-xs font-bold uppercase tracking-widest">Secure_Concierge</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Guardrail Status Bar */}
            <div className="bg-slate-100 px-4 py-1.5 flex items-center gap-2 border-b border-slate-200">
               <ShieldCheck size={12} className="text-azure" />
               <span className="text-[10px] font-mono text-slate-500 uppercase">AI-Moderation_Active</span>
            </div>
            
            <div className="h-80 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-white/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-[13px] leading-relaxed font-sans shadow-sm ${
                    msg.isBot 
                      ? 'bg-white text-slate-700 rounded-bl-none border border-slate-100' 
                      : 'bg-azure text-white rounded-br-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                disabled={isSubmitting}
                placeholder={isEmailVerified ? "Type your inquiry..." : "Enter your email..."}
                className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-azure transition-all text-slate-900 shadow-inner"
              />
              <button 
                onClick={handleSend}
                disabled={isSubmitting}
                className="bg-azure hover:bg-azure/80 text-white p-2.5 rounded-xl transition-all disabled:opacity-50 shadow-md shadow-azure/20"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-slate-900 hover:bg-black rounded-full flex items-center justify-center shadow-2xl border border-white/10 text-white ml-auto transition-all"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
}
