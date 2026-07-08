"use client";
import { Mail, User, Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
    })
  };

  return (
    <div className="h-full max-h-screen bg-gradient-to-b from-blue-500 via-cyan-800 to-blue-900 text-white flex items-center justify-center mt-20 mb-10">
      <div className="w-full grid md:grid-cols-2 gap-10 bg-black/50 p-10 pb-4 shadow-xl">

        <div className="space-y-8">
          <div>
            <button className="px-4 py-2 border border-gray-500 rounded-3xl text-sm mb-6">
              Contact Us
            </button>
            <h1 className="text-4xl font-bold mb-4">Let’s Get In Touch.</h1>
            <p className="text-gray-400">
              Or just reach out manually to{" "}
              <a href="mailto:iot.lab@kiit.ac.in" className="text-blue-400">
                iot.lab@kiit.ac.in
              </a>
              .
            </p>
          </div>


          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.github.com/iot-lab-kiit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-black/70 rounded-4xl border border-gray-700 hover:bg-black/90 transition"
              >
                <Github className="text-blue-400" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/company/iotlabkiit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-black/70 rounded-4xl border border-gray-700 hover:bg-black/90 transition"
              >
                <Linkedin className="text-blue-400" /> LinkedIn
              </a>
              <a
                href="https://www.facebook.com/iot.lab.kiit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-black/70 rounded-4xl border border-gray-700 hover:bg-black/90 transition"
              >
                <Facebook className="text-blue-400" /> Facebook
              </a>
              <a
                href="https://twitter.com/iotlabkiit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-black/70 rounded-4xl border border-gray-700 hover:bg-black/90 transition"
              >
                <Twitter className="text-blue-400" /> Twitter
              </a>
              <a
                href="https://www.instagram.com/iot.lab.kiit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-black/70 rounded-4xl border border-gray-700 hover:bg-black/90 transition"
              >
                <Instagram className="text-blue-400" /> Instagram
              </a>
              <a
                href="https://medium.com/iot-lab-kiit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-black/70 rounded-4xl border border-gray-700 hover:bg-black/90 transition"
              >
                <Mail className="text-blue-400" /> Newsletter
              </a>
            </div>
          </div>
        </div>


        <form onSubmit={handleSubmit} className="space-y-2">

          <div className="max-w-3/4">
            <label className="block text-sm mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                placeholder="Enter your full name..."
                value={form.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-3xl bg-black/70 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>


          <div className="max-w-3/4">
            <label className="block text-sm mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email address..."
                value={form.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-3xl bg-black/70 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>


          <div className="max-w-3/4">
            <label className="block text-sm mb-2">Phone Number</label>
            <div className="flex items-center gap-2">
              <span className="px-3 py-3 bg-black/70 border border-gray-600 rounded-3xl text-sm">
                IN +91
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="000-000-0000"
                value={form.phone}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-3xl bg-black/70 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>


          <div className="max-w-3/4">
            <label className="block text-sm mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Enter your main text here..."
              value={form.message}
              onChange={handleChange}
              maxLength={300}
              className="w-full h-28 px-4 py-3 rounded-3xl bg-black/70 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />
            <p className="text-right text-xs text-gray-400 mt-1">
              {form.message.length}/300
            </p>
          </div>


          <div className="flex items-start space-x-2 ">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1 w-4 h-4 rounded accent-purple-500"
            />
            <p className="text-sm text-gray-400">
              I hereby agree to our{" "}
              <a href="#" className="text-blue-400">
                Privacy Policy
              </a>{" "}
              terms.
            </p>
          </div>


          <button
            type="submit"
            className="w-full py-3 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-all shadow-lg max-w-3/4 cursor-pointer"
          >
            Submit Form →
          </button>
        </form>
      </div>
    </div>
  );
}
