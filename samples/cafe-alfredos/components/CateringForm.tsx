"use client";

import { useState, type FormEvent } from "react";

const eventTypes = ["Corporate", "Family", "Birthday", "Private gathering"] as const;

type Errors = Partial<
  Record<"name" | "email" | "phone" | "date" | "eventType" | "guests", string>
>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function CateringForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const date = String(data.get("date") ?? "").trim();
    const eventType = String(data.get("eventType") ?? "").trim();
    const guests = String(data.get("guests") ?? "").trim();
    const next: Errors = {};

    if (!name) next.name = "Enter your name.";
    if (!emailPattern.test(email)) next.email = "Enter a valid email address.";
    if (phone.replace(/\D/g, "").length < 10) {
      next.phone = "Enter a phone number with at least 10 digits.";
    }
    if (!date) {
      next.date = "Choose an event date.";
    } else {
      const chosen = new Date(`${date}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (Number.isNaN(chosen.getTime()) || chosen < today) {
        next.date = "Choose today or a later date.";
      }
    }
    if (!eventTypes.includes(eventType as (typeof eventTypes)[number])) {
      next.eventType = "Choose an event type.";
    }
    const guestCount = Number(guests);
    if (!guests || !Number.isInteger(guestCount) || guestCount < 1) {
      next.guests = "Enter the number of guests.";
    }

    setErrors(next);
    setSent(Object.keys(next).length === 0);
    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0];
      const field = event.currentTarget.elements.namedItem(first);
      if (field instanceof HTMLElement) field.focus();
    }
  }

  return (
    <form className="inquiry" noValidate onSubmit={onSubmit}>
      <p className="form-flag">Demo form, not active</p>
      <p className="form-help">
        This form checks the fields in your browser and does not send them
        anywhere. No data is collected.
      </p>
      <div className="form-grid">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" aria-invalid={Boolean(errors.name)} />
          {errors.name ? <span className="field-error">{errors.name}</span> : null}
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} />
          {errors.email ? <span className="field-error">{errors.email}</span> : null}
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} />
          {errors.phone ? <span className="field-error">{errors.phone}</span> : null}
        </label>
        <label>
          Event date
          <input name="date" type="date" aria-invalid={Boolean(errors.date)} />
          {errors.date ? <span className="field-error">{errors.date}</span> : null}
        </label>
        <label>
          Event type
          <select name="eventType" defaultValue="" aria-invalid={Boolean(errors.eventType)}>
            <option value="" disabled>
              Select
            </option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.eventType ? <span className="field-error">{errors.eventType}</span> : null}
        </label>
        <label>
          Guests
          <input name="guests" type="number" min={1} step={1} inputMode="numeric" aria-invalid={Boolean(errors.guests)} />
          {errors.guests ? <span className="field-error">{errors.guests}</span> : null}
        </label>
        <label className="form-wide">
          Requirements
          <textarea name="requirements" rows={3} />
        </label>
        <label className="form-wide">
          Message
          <textarea name="message" rows={4} />
        </label>
      </div>
      <button type="submit" className="btn btn-accent">
        Review inquiry
      </button>
      {sent ? (
        <p className="form-result" role="status">
          Nothing was sent. This demo form is not active.
        </p>
      ) : null}
    </form>
  );
}
