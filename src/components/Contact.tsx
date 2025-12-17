import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // ⚠️ IMPORTANT: Replace these with your actual EmailJS credentials
    const serviceId = "service_y2m653g";
    const templateId = "template_zm74k2l";
    const publicKey = "q-oRdvWThgnYh0wA7";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Jumel Anthony Labe",
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      },
      (err) => {
        console.error("FAILED...", err);
        setStatus("idle");
        alert(
          "Failed to send message. Please check your internet connection or try again later."
        );
      }
    );
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-white">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark inline-block relative after:content-[''] after:block after:w-20 after:h-1.5 after:bg-accent after:mx-auto after:mt-4 after:rounded-full">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Info Side */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-neutral-dark text-lg mb-1">Email</h3>
                <p className="text-gray-500 mb-2">Feel free to drop me a line.</p>
                <a href="mailto:labejumel@gmail.com" className="text-primary font-semibold hover:underline">labejumel@gmail.com</a>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-neutral-dark text-lg mb-1">Location</h3>
                <p className="text-gray-500 mb-2">Currently located in.</p>
                <span className="text-neutral-dark font-medium">Cebu, Philippines</span>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-neutral-dark text-lg mb-1">Socials</h3>
                <p className="text-gray-500 mb-2">Check out my projects.</p>
                <div className="flex gap-4">
                  <a href="https://github.com/jumelabe" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">GitHub</a>
                  <span className="text-gray-300">|</span>
                  <a href="https://www.linkedin.com/in/jumelabe" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="order-1 lg:order-2 w-full">
            {status === "success" ? (
              <div className="p-8 bg-green-50 rounded-2xl border border-green-200 h-full flex flex-col justify-center items-center text-center animate-fade-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-green-500 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-neutral-dark mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
              </div>
            ) : (
              <form
                className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"
                onSubmit={handleSubmit}
              >
                <h3 className="text-2xl font-bold text-neutral-dark mb-6">Send a Message</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 font-bold text-gray-700 text-sm uppercase tracking-wide"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 font-bold text-gray-700 text-sm uppercase tracking-wide"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block mb-2 font-bold text-gray-700 text-sm uppercase tracking-wide"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50 focus:bg-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-neutral-dark text-white rounded-lg font-bold text-lg tracking-wide hover:bg-primary transition-all hover:-translate-y-1 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
