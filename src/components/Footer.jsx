import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { ArrowUp, ChevronRight, Code2, Database, LockKeyhole, Mail, Monitor, Send, Sparkles, Wrench, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import sriLogo from "../assets/sri.png";

const quickLinks = [["Home", "#home"], ["About", "#about"], ["Skills", "#skills"], ["Experience", "#experience"], ["Projects", "#projects"], ["Interests", "#interests"], ["Contact", "#contact"]];
const expertise = [[Code2, ".NET Development", "violet"], [Database, "Database & APIs", "cyan"], [Monitor, "Frontend Development", "blue"], [Sparkles, "AI Engineering", "green"], [Wrench, "Tools & DevOps", "pink"]];
const socialLinks = [["GitHub", "https://github.com/rsriram22", FaGithub, "github"], ["LinkedIn", "https://www.linkedin.com/in/rsriram45/", FaLinkedin, "linkedin"], ["Instagram", "https://www.instagram.com/sriram_rs45/", FaInstagram, "instagram"], ["WhatsApp", "https://wa.me/+919786415970", FaWhatsapp, "whatsapp"], ["Email", "mailto:rsriram4518@gmail.com", FaEnvelope, "email"]];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.trim()) return;

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/rsriram4518@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          _subject: `New Stay Connected Subscriber: ${email.trim()}`,
          message: `User subscribed to updates from footer: ${email.trim()}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();
      if (response.ok || data.success === "true" || data.success === true) {
        setStatus("success");
        setStatusMsg("Subscribed successfully! Thank you.");
        setEmail("");
      } else {
        setStatus("error");
        setStatusMsg("Failed to send. Please try again.");
      }
    } catch (err) {
      console.error("Footer newsletter error:", err);
      setStatus("error");
      setStatusMsg("Failed to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-columns">
          <section className="footer-profile">
            <div className="footer-avatar-wrap">
              <img src={sriLogo} alt="Sriram" className="footer-avatar" />
              <span className="footer-status" aria-label="Available" />
            </div>
            <div className="footer-profile-content">
              <h2>Sriram</h2>
              <p className="footer-role">Full Stack Developer <span>|</span> AI Engineer</p>
              <p className="footer-description">Full Stack Developer &amp; AI Engineer with 1.5+ years of experience building scalable web applications, REST APIs, and AI-powered product solutions.</p>
              <div className="footer-socials">
                {socialLinks.map(([label, href, Icon, type]) => <a key={label} className={`footer-social ${type}`} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label}><Icon /></a>)}
              </div>
              <p className="footer-tagline">Let&apos;s Build Something Amazing</p>
            </div>
          </section>

          <section className="footer-column">
            <h3>Quick Links</h3>
            <nav className="footer-nav" aria-label="Footer navigation">
              {quickLinks.map(([label, href]) => <a key={label} href={href}><ChevronRight />{label}</a>)}
            </nav>
          </section>

          <section className="footer-column">
            <h3>My Expertise</h3>
            <ul className="footer-expertise">
              {expertise.map(([Icon, label, color]) => <li key={label}><span className={`expertise-icon ${color}`}><Icon /></span>{label}</li>)}
            </ul>
          </section>

          <section className="footer-newsletter">
            <div className="newsletter-header"><span className="newsletter-icon"><Mail /></span><div><h3>Stay Connected</h3><p>Get updates on my latest projects, tech insights and more.</p></div></div>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Your email address"
                placeholder="Enter your email address"
              />
              <button type="submit" disabled={loading} style={{ cursor: loading ? "not-allowed" : "pointer" }}>
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={14} /> Sending...
                  </>
                ) : (
                  <>
                    Send <Send size={14} />
                  </>
                )}
              </button>
            </form>
            {status === "success" && (
              <p className="newsletter-status success"><CheckCircle size={14} /> {statusMsg}</p>
            )}
            {status === "error" && (
              <p className="newsletter-status error"><AlertCircle size={14} /> {statusMsg}</p>
            )}
            <p className="newsletter-note"><LockKeyhole /> No spam. Just meaningful updates.</p>
          </section>
        </div>

        <div className="footer-bottom">
          <div className="copyright-block"><span className="copyright-icon"><Code2 /></span><div><p>© 2026 <strong>Sriram.</strong> All rights reserved.</p><small>Build. Solve. Improve. Repeat.</small></div></div>
          <div className="footer-bottom-right"><p><span>♥</span> Built with passion for technology</p><a href="#home" className="back-to-top" aria-label="Back to top"><ArrowUp /></a></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
