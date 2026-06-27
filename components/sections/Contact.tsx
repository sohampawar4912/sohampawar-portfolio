"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import {
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { sendContactEmail } from "@/lib/emailjs";
import { SITE_CONFIG } from "@/constants/site";
import type { ContactFormData } from "@/types";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submissions, setSubmissions] = useState(0);

  useEffect(() => {
    const countStr = localStorage.getItem("portfolio_submissions_count");
    const timestampStr = localStorage.getItem("portfolio_submissions_timestamp");
    
    if (countStr) {
      const count = parseInt(countStr, 10);
      
      if (count >= 2 && timestampStr) {
        const timestamp = parseInt(timestampStr, 10);
        const now = Date.now();
        const twentyFourHours = 24 * 60 * 60 * 1000;
        
        if (now - timestamp >= twentyFourHours) {
          // Reset submissions
          localStorage.setItem("portfolio_submissions_count", "0");
          localStorage.removeItem("portfolio_submissions_timestamp");
          setSubmissions(0);
          return;
        }
      }
      setSubmissions(count);
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    if (submissions >= 2) {
      setStatus("error");
      setErrorMessage("You have reached the limit of 2 submissions.");
      return;
    }
    setStatus("loading");
    setErrorMessage("");

    try {
      await sendContactEmail(data);
      const newCount = submissions + 1;
      setSubmissions(newCount);
      localStorage.setItem("portfolio_submissions_count", newCount.toString());
      
      if (newCount >= 2) {
        localStorage.setItem("portfolio_submissions_timestamp", Date.now().toString());
      }
      
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message. Please try again."
      );
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding relative"
      aria-label="Contact section"
    >
      <div className="container-custom">
        <SectionHeading
          subtitle="Contact"
          title="Let's Work Together"
          description="Have a project in mind or want to collaborate? I'd love to hear from you. Send me a message and let's create something amazing."
        />

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass rounded-2xl p-6 md:p-8 border border-white/10 space-y-6"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    disabled={submissions >= 2}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 2, message: "Name must be at least 2 characters" },
                    })}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-400" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    disabled={submissions >= 2}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-400" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  disabled={submissions >= 2}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  {...register("subject", {
                    required: "Subject is required",
                    minLength: { value: 3, message: "Subject must be at least 3 characters" },
                  })}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-xs text-red-400" role="alert">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  disabled={submissions >= 2}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 10, message: "Message must be at least 10 characters" },
                  })}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-400" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex items-center justify-center gap-2 py-3 text-green-400"
                    role="status"
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Message sent successfully!</span>
                  </motion.div>
                ) : status === "error" ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex items-center justify-center gap-2 py-3 text-red-400"
                    role="alert"
                  >
                    <span className="text-sm">{errorMessage}</span>
                  </motion.div>
                ) : submissions >= 2 ? (
                  <motion.div
                    key="limit"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm w-full font-medium"
                  >
                    You have reached the limit of 2 submissions. Please Try After 24 Hrs
                  </motion.div>
                ) : (
                  <motion.div key="submit">
                    <Button
                      type="submit"
                      className="w-full sm:w-auto"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
