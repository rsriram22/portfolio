import React, { useRef, useState } from "react";
import { Mail, Send, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [statusMsg, setStatusMsg] = useState("");

  const recipientEmail = "rsriram4518@gmail.com";
  const whatsappNumber = "+919786415970";
  const directGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}`;

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(form.current);
    const name = formData.get("user_name") || "";
    const sender = formData.get("user_email") || "";
    const message = formData.get("message") || "";

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: sender,
          message: message,
          _subject: `New Portfolio Inquiry from ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === "true" || data.success === true) {
        setStatus("success");
        setStatusMsg("Thank you! Your message has been sent successfully.");
        form.current.reset();
      } else {
        setStatus("error");
        setStatusMsg(data.message || "Failed to send message. Please try again or connect via WhatsApp.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setStatusMsg("Failed to connect to mail server. Please try again or reach out on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest font-bold text-[#f0f83d] bg-[#f0f83d]/10 px-3 py-1 rounded-full border border-[#f0f83d]/20">
          Get in Touch
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold mt-3 italiana-regular text-white">
          Contact Me
        </h2>
        <p className="text-gray-400 text-base max-w-xl mx-auto mt-2">
          Have an exciting project, job opportunity, or inquiry? Send me a message and I&apos;ll get back to you promptly!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Information Cards (Left) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800/90 rounded-2xl p-6 hover:border-[#f0f83d]/30 transition-all">
            <h3 className="text-xl font-bold text-white mb-4 italiana-regular">
              Contact Information
            </h3>

            <div className="space-y-4">
              {/* To Email Info */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20 shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">Email (To)</p>
                  <a
                    href={directGmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#f0f83d] font-medium text-sm sm:text-base transition-colors"
                  >
                    {recipientEmail}
                  </a>
                </div>
              </div>

              {/* Phone / WhatsApp Info */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 text-green-400 rounded-xl border border-green-500/20 shrink-0">
                  <FaWhatsapp size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">Phone &amp; WhatsApp</p>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 font-medium text-sm sm:text-base transition-colors"
                  >
                    +91 9786415970
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">Location</p>
                  <p className="text-white font-medium text-sm sm:text-base">
                    Coimbatore, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Chat Callout */}
          <div className="bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900/60 backdrop-blur-md border border-indigo-700/30 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-[#f0f83d] mb-1">
              Open to Opportunities
            </h4>
            <p className="text-gray-300 text-xs leading-relaxed mb-4">
              I am available for .NET, Full-Stack, and AI engineering roles. Let&apos;s discuss how I can add value to your team.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors shadow-lg"
            >
              <FaWhatsapp size={16} />
              Quick WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Email Sending Form (Right) */}
        <div className="lg:col-span-7 bg-slate-900/80 backdrop-blur-md border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-2 italiana-regular">
            Send an Email
          </h3>
          <p className="text-gray-400 text-xs mb-6">
            Both recipient (To) and message content are configured for direct delivery.
          </p>

          {status === "success" && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center gap-3 text-sm">
              <CheckCircle size={20} className="shrink-0" />
              <span>{statusMsg}</span>
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 flex items-center gap-3 text-sm">
              <AlertCircle size={20} className="shrink-0" />
              <span>{statusMsg}</span>
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            {/* "To" Field */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                To (Recipient):
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="to_email"
                  value={recipientEmail}
                  readOnly
                  className="w-full bg-slate-800/90 text-[#f0f83d] font-mono text-sm px-4 py-2.5 rounded-xl border border-slate-700/60 cursor-not-allowed outline-none"
                />
                <span className="absolute right-3 top-2.5 text-xs text-gray-400 bg-slate-700/60 px-2 py-0.5 rounded">
                  Portfolio Owner
                </span>
              </div>
            </div>

            {/* "Your Name" and "Your Email" Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                  Your Name:
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-slate-800/60 text-white placeholder-gray-500 text-sm px-4 py-2.5 rounded-xl border border-slate-700/60 focus:border-[#f0f83d]/70 focus:bg-slate-800/90 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                  Your Email (From):
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full bg-slate-800/60 text-white placeholder-gray-500 text-sm px-4 py-2.5 rounded-xl border border-slate-700/60 focus:border-[#f0f83d]/70 focus:bg-slate-800/90 outline-none transition-all"
                />
              </div>
            </div>

            {/* "Message Content" Field */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                Message Content:
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Hello Sriram, I saw your portfolio and would like to discuss..."
                required
                className="w-full bg-slate-800/60 text-white placeholder-gray-500 text-sm p-4 rounded-xl border border-slate-700/60 focus:border-[#f0f83d]/70 focus:bg-slate-800/90 outline-none transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f0f83d] hover:bg-[#dbe32d] text-[#0f0f3d] font-bold text-sm px-7 py-3 rounded-xl transition-all shadow-lg hover:shadow-[#f0f83d]/20 disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <>
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-[#0f0f3d] border-t-transparent rounded-full" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
