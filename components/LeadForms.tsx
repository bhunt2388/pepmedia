"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

function fieldValue(form: FormData, name: string) {
  return String(form.get(name) ?? "").trim();
}

function openEmail(subject: string, lines: string[]) {
  const body = lines.filter(Boolean).join("\n");
  window.location.href = `mailto:hello@pepmedia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function BookCallForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = fieldValue(form, "name");
    const company = fieldValue(form, "company");

    openEmail(`PepMedia strategy call request — ${company}`, [
      `Name: ${name}`,
      `Work email: ${fieldValue(form, "email")}`,
      `Company: ${company}`,
      `Website: ${fieldValue(form, "website") || "Not provided"}`,
      `Monthly ad spend: ${fieldValue(form, "adSpend")}`,
      `Primary goal: ${fieldValue(form, "goal")}`,
      "",
      "Context:",
      fieldValue(form, "context") || "Not provided",
    ]);
    setSubmitted(true);
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>Call request</span>
        <strong>01 / 01</strong>
      </div>
      <div className="field-grid">
        <label>
          <span>Full name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" required />
        </label>
        <label>
          <span>Website</span>
          <input name="website" type="url" inputMode="url" placeholder="https://" />
        </label>
        <label>
          <span>Monthly ad spend</span>
          <select name="adSpend" required defaultValue="">
            <option value="" disabled>
              Select range
            </option>
            <option>Under $20K</option>
            <option>$20K–$50K</option>
            <option>$50K–$100K</option>
            <option>$100K+</option>
          </select>
        </label>
        <label>
          <span>Primary goal</span>
          <select name="goal" required defaultValue="">
            <option value="" disabled>
              Select goal
            </option>
            <option>Scale paid acquisition</option>
            <option>Reduce CAC</option>
            <option>Fix compliance issues</option>
            <option>Improve creative velocity</option>
            <option>Build the full growth stack</option>
          </select>
        </label>
        <label className="field-wide">
          <span>What should we know?</span>
          <textarea name="context" rows={6} />
        </label>
      </div>
      <button className="button button-primary form-submit" type="submit">
        Request a Strategy Call <ArrowRight aria-hidden="true" />
      </button>
      <p className="form-status" aria-live="polite">
        {submitted ? "Your request is ready in your email app." : "Your details are sent directly by email."}
      </p>
    </form>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = fieldValue(form, "name");
    const topic = fieldValue(form, "topic");

    openEmail(`PepMedia inquiry — ${topic}`, [
      `Name: ${name}`,
      `Email: ${fieldValue(form, "email")}`,
      `Company: ${fieldValue(form, "company") || "Not provided"}`,
      `Topic: ${topic}`,
      "",
      "Message:",
      fieldValue(form, "message"),
    ]);
    setSubmitted(true);
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>General inquiry</span>
        <strong>01 / 01</strong>
      </div>
      <div className="field-grid">
        <label>
          <span>Full name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" />
        </label>
        <label>
          <span>Topic</span>
          <select name="topic" required defaultValue="">
            <option value="" disabled>
              Select topic
            </option>
            <option>New business</option>
            <option>Partnership</option>
            <option>Press and media</option>
            <option>Billing or account</option>
            <option>Something else</option>
          </select>
        </label>
        <label className="field-wide">
          <span>Message</span>
          <textarea name="message" rows={7} required />
        </label>
      </div>
      <button className="button button-primary form-submit" type="submit">
        Send Inquiry <ArrowRight aria-hidden="true" />
      </button>
      <p className="form-status" aria-live="polite">
        {submitted ? "Your inquiry is ready in your email app." : "Your details are sent directly by email."}
      </p>
    </form>
  );
}
