"use client";

import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function LiveChatConcierge() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="mb-4 w-80 bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl"
          >
            <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
              <h3 className="font-mono text-azure text-sm font-semibold">Concierge</h3>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>
            <div className="bg-black/50 rounded-md p-3 mb-4 text-sm font-sans border border-white/5">
              <p className="text-gray-300">How can we help you scale your environment today?</p>
            </div>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 bg-black/50 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-azure transition-colors text-white"
              />
              <button className="bg-azure hover:bg-azure/80 text-white px-3 py-2 text-sm font-medium rounded-md transition-colors">
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-azure hover:bg-[#0066CC] rounded-full flex items-center justify-center shadow-lg border border-azure/50 text-white ml-auto transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
