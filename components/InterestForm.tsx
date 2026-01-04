"use client";

import { useState } from "react";

export default function InterestForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit() {
    if (loading || submitted) return;

    setLoading(true);

    await fetch("/api/interest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setSubmitted(true);
  }

  return (
    <section className="section">
      <div className="max-w-xl mx-auto">
        <h2 className="heading-lg">Express Interest</h2>
        <p className="body-text mt-2">
          Leave your details and we’ll reach out when a slot opens.
        </p>

        {!submitted ? (
          <div className="mt-10 space-y-4">
            <input
              name="name"
              className="input"
              placeholder="Full name"
              value={form.name}
              onChange={update}
              disabled={loading}
            />

            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email address"
              value={form.email}
              onChange={update}
              disabled={loading}
            />

            <input
              name="phone"
              className="input"
              placeholder="Mobile number"
              value={form.phone}
              onChange={update}
              disabled={loading}
            />

            <textarea
              name="message"
              rows={4}
              className="input"
              placeholder="Message"
              value={form.message}
              onChange={update}
              disabled={loading}
            />

            <button
              onClick={submit}
              disabled={loading}
              className="btn-primary w-full mt-4"
            >
              {loading ? "Submitting…" : "Express Interest"}
            </button>
          </div>
        ) : (
          <div className="card mt-10">
            <p className="heading-lg text-base">
              Thank you. Your request is submitted.
            </p>
            <p className="body-text mt-2">
              We’ll contact you as soon as availability opens.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
