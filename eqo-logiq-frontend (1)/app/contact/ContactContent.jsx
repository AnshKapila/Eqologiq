'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Clock, Camera, Video, Building2, CircleCheck } from 'lucide-react';
import Reveal from '../../components/Reveal';

const SUBJECT_OPTIONS = [
  'General Inquiry',
  'Bulk or Corporate Orders',
  'Partnership',
  'Returns and Refunds',
  'Other',
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="pt-20">
      <section className="bg-brand-base py-16 md:py-24 border-b border-brand-text/8">
        <Reveal className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="kicker text-brand-primary mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-brand-primary" />
            Get in Touch
          </p>
          <h1 className="font-sans font-bold text-4xl md:text-5xl text-brand-text mb-4">Let&apos;s talk.</h1>
          <p className="font-body text-brand-text/60 text-lg max-w-xl">
            Whether it&apos;s a question, a bulk order, or just feedback: we are here. And we actually respond.
          </p>
        </Reveal>
      </section>

      <section className="bg-brand-base py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <Reveal className="lg:w-7/12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm font-medium text-brand-text mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="form-field"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body text-sm font-medium text-brand-text mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="form-field"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block font-body text-sm font-medium text-brand-text mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="form-field appearance-none"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    {SUBJECT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block font-body text-sm font-medium text-brand-text mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us what's on your mind."
                    className="form-field resize-none"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-brand-primary text-white font-sans font-bold rounded-xl hover:bg-[#005580] transition-colors text-base"
                >
                  Send Message
                </button>
                {submitted && (
                  <div className="text-center py-4 bg-brand-secondary/10 rounded-xl text-brand-secondary font-body font-medium text-sm">
                    Message sent. We&apos;ll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </Reveal>

            <Reveal className="lg:w-5/12" style={{ transitionDelay: '100ms' }}>
              <div className="space-y-10">
                <div>
                  <p className="kicker text-brand-text/40 mb-6">Direct Contact</p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Mail className="w-4 h-4 text-brand-primary" />
                      </div>
                      <div>
                        <p className="font-body font-medium text-brand-text text-sm">Email</p>
                        <a
                          href="mailto:mail@eqologiq.in"
                          className="font-body text-brand-text/60 text-sm hover:text-brand-primary transition-colors"
                        >
                          mail@eqologiq.in
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock className="w-4 h-4 text-brand-primary" />
                      </div>
                      <div>
                        <p className="font-body font-medium text-brand-text text-sm">Response Time</p>
                        <p className="font-body text-brand-text/60 text-sm">
                          We typically respond within 24 hours. Weekends may take until Monday.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Camera className="w-4 h-4 text-brand-primary" />
                      </div>
                      <div>
                        <p className="font-body font-medium text-brand-text text-sm">Instagram</p>
                        <a
                          href="https://www.instagram.com/eqologiq.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-brand-text/60 text-sm hover:text-brand-primary transition-colors"
                        >
                          @eqologiq.in
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Video className="w-4 h-4 text-brand-primary" />
                      </div>
                      <div>
                        <p className="font-body font-medium text-brand-text text-sm">YouTube</p>
                        <a
                          href="https://www.youtube.com/@eqo-logiq"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-brand-text/60 text-sm hover:text-brand-primary transition-colors"
                        >
                          @eqo-logiq
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-brand-secondary/8 border border-brand-secondary/15">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-5 h-5 text-brand-secondary" />
                    <p className="font-body font-medium text-brand-text text-sm">Bulk &amp; Corporate Orders</p>
                  </div>
                  <p className="font-body text-brand-text/65 text-sm leading-relaxed">
                    We work with teams of 10 to 10,000. Custom laser engraving, branded packaging, and dedicated account
                    management available.{' '}
                    <strong>Mentioning &quot;Bulk Order&quot; in the subject line helps us prioritise your enquiry.</strong>
                  </p>
                  <a
                    href="mailto:mail@eqologiq.in?subject=Bulk+Order+Enquiry"
                    className="inline-block mt-4 text-sm font-body font-medium text-brand-secondary hover:underline"
                  >
                    Email us directly →
                  </a>
                </div>

                <div>
                  <p className="kicker text-brand-text/40 mb-4">Good to Know</p>
                  <div className="space-y-3">
                    {[
                      'Free shipping on orders above ₹1,500',
                      '7-day hassle-free returns',
                      'Secure payment via Razorpay & UPI',
                    ].map((text) => (
                      <div key={text} className="flex items-center gap-3">
                        <CircleCheck className="w-4 h-4 text-brand-primary flex-shrink-0" />
                        <p className="font-body text-sm text-brand-text/65">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
