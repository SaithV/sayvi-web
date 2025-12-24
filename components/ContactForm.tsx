"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setSubmitStatus("success");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      businessType: "",
      message: ""
    });

    // Clear success message after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Ready to Go Digital?
          </h2>
          <p className="text-xl text-blue-100">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white text-gray-900 rounded-xl shadow-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="businessType" className="block text-sm font-semibold mb-2">
              Business Type *
            </label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
            >
              <option value="">Select your business type</option>
              <option value="barbershop">Barbershop</option>
              <option value="smokeshop">Smoke Shop</option>
              <option value="florist">Florist</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Tell us about your project *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition resize-none"
              placeholder="Describe what you're looking for..."
            />
          </div>

          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
              Thank you! We'll be in touch soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
              Something went wrong. Please try again.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
