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
        className="mx-auto mt-12 max-w-2xl space-y-6 rounded-2xl border border-[#1c1c21]/10 bg-white p-6 shadow-sm md:p-10"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-[family-name:var(--font-manrope)] text-sm font-medium text-[#29292c]"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-[10px] border border-[#1c1c21] px-4 py-3 font-[family-name:var(--font-manrope)] text-base outline-none transition-colors focus:border-[#29292c]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-[family-name:var(--font-manrope)] text-sm font-medium text-[#29292c]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-[10px] border border-[#1c1c21] px-4 py-3 font-[family-name:var(--font-manrope)] text-base outline-none transition-colors focus:border-[#29292c]"
              placeholder="you@email.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block font-[family-name:var(--font-manrope)] text-sm font-medium text-[#29292c]"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-[10px] border border-[#1c1c21] px-4 py-3 font-[family-name:var(--font-manrope)] text-base outline-none transition-colors focus:border-[#29292c]"
            placeholder="+91"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="mb-2 block font-[family-name:var(--font-manrope)] text-sm font-medium text-[#29292c]"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full rounded-[10px] border border-[#1c1c21] px-4 py-3 font-[family-name:var(--font-manrope)] text-base outline-none transition-colors focus:border-[#29292c]"
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
            className="mb-2 block font-[family-name:var(--font-manrope)] text-sm font-medium text-[#29292c]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full resize-none rounded-[10px] border border-[#1c1c21] px-4 py-3 font-[family-name:var(--font-manrope)] text-base outline-none transition-colors focus:border-[#29292c]"
            placeholder="Tell us about your project, event date, or vision..."
          />
        </div>

        <button
          type="submit"
          disabled={state === "loading"}
          className="w-full rounded-[10px] border border-[#2f2f37] bg-[#1c1c21] px-8 py-4 font-[family-name:var(--font-manrope)] text-lg font-medium text-white transition-colors hover:bg-[#29292c] disabled:opacity-60"
        >
          {state === "loading" ? "Sending..." : "Send Message"}
        </button>

        {message && (
          <p
            className={`text-center font-[family-name:var(--font-manrope)] text-sm ${
              state === "success" ? "text-green-700" : "text-red-600"
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
