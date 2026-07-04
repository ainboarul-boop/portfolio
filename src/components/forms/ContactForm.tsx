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
      setMessage("Thank you. Your message has been sent and we will get back to you soon.");
      form.reset();
    } catch (err) {
      setState("error");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <FadeIn className="w-full">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-[32px] border border-[#11131a]/10 bg-white p-8 shadow-[0_24px_70px_rgba(20,20,26,0.08)] sm:p-10 md:p-12"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-3 block font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-[#6f685c]"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-2xl border border-[#11131a]/10 bg-[#faf7f2] px-4 py-3 font-[family-name:var(--font-manrope)] text-base text-[#11131a] placeholder-[#8a8478] outline-none transition-all focus:border-[#ab8452]/40 focus:bg-white focus:ring-1 focus:ring-[#ab8452]/25"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-3 block font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-[#6f685c]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-2xl border border-[#11131a]/10 bg-[#faf7f2] px-4 py-3 font-[family-name:var(--font-manrope)] text-base text-[#11131a] placeholder-[#8a8478] outline-none transition-all focus:border-[#ab8452]/40 focus:bg-white focus:ring-1 focus:ring-[#ab8452]/25"
              placeholder="you@email.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-3 block font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-[#6f685c]"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-2xl border border-[#11131a]/10 bg-[#faf7f2] px-4 py-3 font-[family-name:var(--font-manrope)] text-base text-[#11131a] placeholder-[#8a8478] outline-none transition-all focus:border-[#ab8452]/40 focus:bg-white focus:ring-1 focus:ring-[#ab8452]/25"
            placeholder="+91"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <label
              htmlFor="service"
              className="mb-3 block font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-[#6f685c]"
            >
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              required
              className="w-full rounded-2xl border border-[#11131a]/10 bg-[#faf7f2] px-4 py-3 font-[family-name:var(--font-manrope)] text-base text-[#11131a] outline-none transition-all focus:border-[#ab8452]/40 focus:bg-white focus:ring-1 focus:ring-[#ab8452]/25"
            >
              <option value="">Select a service</option>
              <option value="Wedding Photography">Wedding Photography</option>
              <option value="Event Photography">Event Photography</option>
              <option value="Portrait Photography">Portrait Photography</option>
              <option value="Newborn Photography">Newborn Photography</option>
              <option value="Maternity Photoshoot">Maternity Photoshoot</option>
              <option value="Fashion Photography">Fashion Photography</option>
              <option value="Product Photography">Product Photography</option>
              <option value="Photoshoot Collaboration">Photoshoot Collaboration</option>
              <option value="Photo Frames">Photo Frames</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-3 block font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-[#6f685c]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-2xl border border-[#11131a]/10 bg-[#faf7f2] px-4 py-3 font-[family-name:var(--font-manrope)] text-base text-[#11131a] placeholder-[#8a8478] outline-none transition-all focus:border-[#ab8452]/40 focus:bg-white focus:ring-1 focus:ring-[#ab8452]/25"
              placeholder="Tell us about the event date, location, and style you want..."
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={state === "loading"}
          className="w-full rounded-full bg-[#11131a] px-8 py-4 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-[0_18px_36px_rgba(17,19,26,0.16)] transition-all hover:-translate-y-1 hover:bg-[#1b1e28] disabled:translate-y-0 disabled:opacity-50"
        >
          {state === "loading" ? "Sending..." : "Send Inquiry"}
        </button>

        {message && (
          <p
            className={`rounded-2xl px-4 py-3 text-center font-[family-name:var(--font-manrope)] text-sm font-medium ${
              state === "success"
                ? "bg-[#daf2e7] text-[#0f7a53]"
                : "bg-[#fde4e3] text-[#b9382b]"
            }`}
            role="status"
          >
            {message}
          </p>
        )}
      </form>
    </FadeIn>
  );
}
