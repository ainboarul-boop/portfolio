"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Failed to send message");
      }

      setState("success");
      setMessage("Thank you! Your message has been sent. We'll get back to you soon.");
      form.reset();
    } catch (err) {
      setState("error");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <FadeIn>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-12 max-w-4xl space-y-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl sm:p-10 md:p-12 lg:p-16"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <div>
            <label
              htmlFor="name"
              className="mb-3 block font-[family-name:var(--font-manrope)] text-sm font-semibold text-gray-200"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-[family-name:var(--font-manrope)] text-base text-white placeholder-gray-500 outline-none transition-all focus:border-[#6366f1]/50 focus:bg-white/10 focus:ring-1 focus:ring-[#6366f1]/30"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-3 block font-[family-name:var(--font-manrope)] text-sm font-semibold text-gray-200"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-[family-name:var(--font-manrope)] text-base text-white placeholder-gray-500 outline-none transition-all focus:border-[#6366f1]/50 focus:bg-white/10 focus:ring-1 focus:ring-[#6366f1]/30"
              placeholder="you@email.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-3 block font-[family-name:var(--font-manrope)] text-sm font-semibold text-gray-200"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-[family-name:var(--font-manrope)] text-base text-white placeholder-gray-500 outline-none transition-all focus:border-[#6366f1]/50 focus:bg-white/10 focus:ring-1 focus:ring-[#6366f1]/30"
            placeholder="+91"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div>
            <label
              htmlFor="service"
              className="mb-3 block font-[family-name:var(--font-manrope)] text-sm font-semibold text-gray-200"
            >
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              required
              className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-[family-name:var(--font-manrope)] text-base text-white outline-none transition-all focus:border-[#6366f1]/50 focus:bg-white/10 focus:ring-1 focus:ring-[#6366f1]/30"
            >
              <option value="" className="bg-[#1a1a2e] text-white">Select a service</option>
              <option value="Wedding Photography" className="bg-[#1a1a2e] text-white">Wedding Photography</option>
              <option value="Event Photography" className="bg-[#1a1a2e] text-white">Event Photography</option>
              <option value="Portrait Photography" className="bg-[#1a1a2e] text-white">Portrait Photography</option>
              <option value="Newborn Photography" className="bg-[#1a1a2e] text-white">Newborn Photography</option>
              <option value="Maternity Photoshoot" className="bg-[#1a1a2e] text-white">Maternity Photoshoot</option>
              <option value="Fashion Photography" className="bg-[#1a1a2e] text-white">Fashion Photography</option>
              <option value="Product Photography" className="bg-[#1a1a2e] text-white">Product Photography</option>
              <option value="Photoshoot Collaboration" className="bg-[#1a1a2e] text-white">Photoshoot Collaboration</option>
              <option value="Photo Frames" className="bg-[#1a1a2e] text-white">Photo Frames</option>
              <option value="Other" className="bg-[#1a1a2e] text-white">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-3 block font-[family-name:var(--font-manrope)] text-sm font-semibold text-gray-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-[family-name:var(--font-manrope)] text-base text-white placeholder-gray-500 outline-none transition-all focus:border-[#6366f1]/50 focus:bg-white/10 focus:ring-1 focus:ring-[#6366f1]/30"
              placeholder="Tell us about your project, event date, or vision..."
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={state === "loading"}
          className="w-full rounded-xl border-2 border-transparent bg-gradient-to-r from-[#6366f1] to-[#818cf8] px-8 py-4 font-[family-name:var(--font-manrope)] text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:from-[#818cf8] hover:to-[#6366f1] disabled:scale-100 disabled:opacity-50"
        >
          {state === "loading" ? "Sending..." : "Send Message"}
        </button>

        {message && (
          <p
            className={`rounded-lg px-4 py-3 text-center font-[family-name:var(--font-manrope)] text-sm font-medium ${state === "success" ? "bg-[#10b981]/20 text-[#10b981]" : "bg-[#ef4444]/20 text-[#ff6b6b]"}`}
            role="status"
          >
            {message}
          </p>
        )}
      </form>
    </FadeIn>
  );
}
