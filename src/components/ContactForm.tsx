"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const t = useTranslations("ContactPage");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Mensaje enviado exitosamente");
        form.reset();
      } else {
        toast.error("Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.");
      }
    } catch (error) {
      toast.error("Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="flex flex-col w-full bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h3 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-4">
        {t("form_title")}
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2">
              {t("form_name")}
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f29c38] focus:border-transparent transition-shadow text-black"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">
              {t("form_email")}
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f29c38] focus:border-transparent transition-shadow text-black"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="subject" className="text-sm font-semibold text-gray-700 mb-2">
            {t("form_subject")}
          </label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            required 
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f29c38] focus:border-transparent transition-shadow text-black"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2">
            Mensaje
          </label>
          <textarea 
            id="message" 
            name="message" 
            rows={5} 
            required 
            placeholder={t("form_message")}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f29c38] focus:border-transparent transition-shadow resize-none text-black"
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="mt-2 w-full md:w-auto self-start px-8 py-4 bg-[#f29c38] hover:bg-orange-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
             </svg>
          ) : null}
          {t("form_submit")}
        </button>

      </form>
    </motion.div>
  );
}
