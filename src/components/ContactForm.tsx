"use client";

import { useState } from "react";
import { toast } from "sonner";
import { services, COMPANY_EMAIL } from "@/data/services";
const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    else if (form.name.trim().length > 100) errs.name = "Name too long";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    else if (!/^[+]?[\d\s-]{7,20}$/.test(form.phone)) errs.phone = "Invalid phone number";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.trim().length > 1000) errs.message = "Message too long";
    return errs;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    
    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_EMAIL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            service: form.service || "Not selected",
            message: form.message,
            _subject: `New Lead from CleanUp Dubai - ${form.name}`,
          })
        });
        
        if (response.ok) {
          toast.success("Thank you! We'll get back to you soon.");
          setForm({ name: "", email: "", phone: "", service: "", message: "" });
        } else {
          toast.error("Failed to send message. Please try again later.");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border ${errors[field] ? "border-destructive" : "border-border"} bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors`;

  return (
    <section className="section-padding bg-muted" id="contact-form">
      <div className="container-max max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-3">Get a Free Junk Removal Quote</h2>
        <p className="text-center text-muted-foreground mb-8">
          Contact us for fast, affordable junk removal service Dubai residents can book today.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                aria-label="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass("name")}
                maxLength={100}
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass("email")}
                maxLength={255}
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                aria-label="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass("phone")}
                maxLength={20}
              />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <select
                aria-label="Select a Service"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={inputClass("service")}
              >
                <option value="">Select a Service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>{s.title}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              aria-label="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={inputClass("message")}
              maxLength={1000}
            />
            {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-bold text-base btn-hover disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
