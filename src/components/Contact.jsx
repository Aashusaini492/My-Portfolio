import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.permission) {
      alert('Please accept the contact permission checkbox.');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert('Email service is not configured yet. Please add EmailJS credentials in the environment variables.');
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          from_name: `${formData.firstName} ${formData.lastName}`,
          reply_to: formData.email,
          message: formData.message,
          to_email: 'aashusaini19222277@gmail.com'
        },
        publicKey
      );

      alert(`Thanks ${formData.firstName}! Your message has been sent.`);
      setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
    } catch (error) {
      console.error(error);
      alert('Unable to send message right now. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative flex min-h-screen w-full items-end overflow-hidden border-t border-slate-200 bg-purple-400/12 pt-32 pb-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.9),transparent_32%)]" />

      <div className="relative z-10 flex w-full items-end justify-end">
        <div className="w-full rounded-[32px] border border-slate-200 bg-purple-400/12 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)] md:w-[88%] md:p-10 lg:w-[78%] lg:p-14">
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.32em] text-purple-600/90">Get in touch</p>
              <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Let’s build something memorable.</h2>
            </div>
            <div className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Available for projects & internships
            </div>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-3 md:grid-cols-3">
            <a href="mailto:aashusaini19222277@gmail.com" className="rounded-2xl border border-slate-200 bg-slate-100 p-4 text-sm font-semibold text-slate-700 transition hover:-translate-y-1 hover:bg-slate-200 hover:text-purple-600">
              aashusaini19222277@gmail.com
            </a>
            <a href="tel:+918394865254" className="rounded-2xl border border-slate-200 bg-slate-100 p-4 text-sm font-semibold text-slate-700 transition hover:-translate-y-1 hover:bg-slate-200 hover:text-purple-600">
              +91 8394865254
            </a>
            <a href="https://www.linkedin.com/in/aashu-saini-8776092b1" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-slate-100 p-4 text-sm font-semibold text-slate-700 transition hover:-translate-y-1 hover:bg-slate-200 hover:text-purple-600">
              LinkedIn Profile
            </a>
          </div>

          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-10 md:gap-12">
            <div className="flex flex-col gap-8 md:flex-row md:gap-10">
              <div className="flex-1 space-y-8">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-4 text-base font-medium text-slate-900 placeholder:text-slate-400 focus:border-purple-400 focus:outline-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-4 text-base font-medium text-slate-900 placeholder:text-slate-400 focus:border-purple-400 focus:outline-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-4 text-base font-medium text-slate-900 placeholder:text-slate-400 focus:border-purple-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex-1">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  required
                  className="h-full min-h-[220px] w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-4 text-base font-medium text-slate-900 placeholder:text-slate-400 focus:border-purple-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex items-start gap-3 text-sm font-medium text-slate-700">
                <input
                  type="checkbox"
                  id="permission"
                  checked={formData.permission}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 cursor-pointer rounded border-slate-300 bg-transparent accent-purple-400"
                />
                <label htmlFor="permission" className="max-w-[280px] leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="max-w-[320px] text-sm leading-relaxed text-slate-600">
                  This form sends your message directly to my inbox through EmailJS once the service credentials are configured.
                </p>
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-purple-600 px-7 py-3 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
