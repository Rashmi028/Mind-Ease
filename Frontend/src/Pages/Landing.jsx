import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const features = [
    {
      title: "Guided Meditation",
      description:
        "Access a library of calming meditation sessions tailored to your needs",
      icon: "🧘‍♀️",
    },
    {
      title: "Mood Tracking",
      description:
        "Monitor your emotional well-being with our intuitive mood tracking system",
      icon: "📊",
    },
    {
      title: "Expert Support",
      description:
        "Connect with licensed therapists and mental health professionals",
      icon: "👨‍⚕️",
    },
    {
      title: "Community",
      description: "Join a supportive community of people on similar journeys",
      icon: "👥",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student",
      content:
        "MindEase has been a game-changer for managing my anxiety during exams.",
    },
    {
      name: "Michael Chen",
      role: "Professional",
      content:
        "The guided meditation sessions have helped me stay focused and calm at work.",
    },
    {
      name: "Emma Wilson",
      role: "Teacher",
      content:
        "I love how easy it is to track my mood and see my progress over time.",
    },
  ];

  const faqs = [
    {
      question: "How does MindEase work?",
      answer:
        "MindEase provides a comprehensive suite of mental wellness tools including guided meditation, mood tracking, and expert support. Simply sign up and start your journey to better mental health.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we take your privacy seriously. All data is encrypted and stored securely following industry best practices.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Absolutely! You can cancel your subscription at any time with no questions asked.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-secondary-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-orange-50/80 via-orange-100/80 to-orange-50/80 backdrop-blur-md border-b border-orange-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                MindEase
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Testimonials
                </a>
                <a
                  href="#faq"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </a>
                <Link
            to="/signin"
          >
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Get Started
                </button>
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#features"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50"
              >
                Contact
              </a>
              <Link
            to="/signin"
          >
              <button className="w-full bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-600 transition-colors">
                Get Started
              </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50/40 via-orange-100/30 to-orange-50/40 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMi4yIDAtNCAxLjgtNCA0czEuOCA0IDQgNCA0LTEuOCA0LTQtMS44LTQtNC00TTI0IDMwYy0yLjIgMC00IDEuOC00IDRzMS44IDQgNCA0IDQtMS44IDQtNC0xLjgtNC00LTQiIGZpbGw9IiNmZmE1MDAiIG9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-left space-y-8">
              <h1 className="text-4xl tracking-tight font-light text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                <span className="block animate-fade-in opacity-90">
                  Your Journey to
                </span>
                <span className="block bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent animate-slide-up font-normal">
                  Mental Wellness
                </span>
              </h1>
              <p className="text-lg text-gray-600/90 sm:text-xl max-w-2xl animate-fade-in font-light leading-relaxed">
                Start your path to better mental health with personalized
                meditation, expert guidance, and a supportive community.
              </p>
              <div className="flex flex-wrap gap-6">
              <Link
            to="/signin"
          >
                <a
                  href="#"
                  className="group inline-flex items-center px-8 py-3 text-base font-light rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg animate-slide-up"
                >
                  Get Started Free
                  <svg
                    className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center px-8 py-3 border border-orange-400/50 text-base font-light rounded-full text-orange-600 bg-transparent hover:bg-orange-50/50 transform hover:-translate-y-0.5 transition-all duration-300 animate-slide-up"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 relative animate-fade-in">
              <div className="aspect-w-5 aspect-h-3 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-orange-100/50 to-orange-50/50 backdrop-blur-sm transform hover:scale-[1.02] transition-transform duration-500">
                <div className="p-8 flex items-center justify-center">
                  <svg
                    className="w-full h-full text-orange-400/80"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M44.5,-76.3C58.2,-69.2,70.3,-57.7,78.9,-43.7C87.5,-29.7,92.6,-13.3,91.9,2.8C91.1,19,84.5,34.8,74.7,47.8C64.9,60.8,51.9,70.9,37.4,76.5C22.9,82.1,6.9,83.2,-8.6,80.8C-24.1,78.5,-39.1,72.7,-51.8,63.5C-64.5,54.3,-74.9,41.7,-81.3,27C-87.7,12.3,-90.1,-4.5,-86.6,-19.8C-83.1,-35.1,-73.7,-48.9,-61.1,-56.8C-48.5,-64.7,-32.7,-66.7,-18.1,-71.9C-3.5,-77,11,-85.3,25.7,-84.8C40.5,-84.3,55.5,-75,44.5,-76.3Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-orange-200/40 to-orange-100/40 rounded-full filter blur-2xl opacity-60 animate-pulse"></div>
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-gradient-to-br from-orange-200/40 to-orange-100/40 rounded-full filter blur-2xl opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 bg-gradient-to-b from-white to-orange-50/30"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-gray-900 sm:text-5xl tracking-tight">
              Features
            </h2>
            <p className="mt-6 text-xl text-gray-500 font-light leading-relaxed">
              Everything you need for your mental wellness journey
            </p>
          </div>
          <div className="mt-16 grid gap-12 grid-cols-1 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-gradient-to-br from-white to-orange-50/50 p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-orange-100/20"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100/20 to-transparent rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform transition-transform group-hover:scale-110 duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-600/90 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 relative overflow-hidden bg-gradient-to-br from-orange-50/40 via-orange-100/30 to-orange-50/40"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMi4yIDAtNCAxLjgtNCA0czEuOCA0IDQgNCA0LTEuOCA0LTQtMS44LTQtNC00TTI0IDMwYy0yLjIgMC00IDEuOC00IDRzMS44IDQgNCA0IDQtMS44IDQtNC0xLjgtNC00LTQiIGZpbGw9IiNmZmE1MDAiIG9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-gray-900 sm:text-5xl tracking-tight">
              What Our Users Say
            </h2>
            <p className="mt-6 text-xl text-gray-500 font-light leading-relaxed">
              Real stories from real people on their wellness journey
            </p>
          </div>
          <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/80 to-orange-50/80 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-orange-100/20 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100/30 to-transparent rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-6 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xl font-light text-orange-500">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-orange-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-gray-600/90 font-light leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="font-medium text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500/80">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-24 bg-gradient-to-br from-white via-orange-50/10 to-white"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-light text-gray-900 sm:text-5xl tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-xl text-gray-500 font-light leading-relaxed">
              Everything you need to know about your wellness journey
            </p>
          </div>
          <div className="mt-16 space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`group overflow-hidden rounded-2xl transition-all duration-300 ${
                  activeFaq === index
                    ? "bg-gradient-to-br from-orange-50/80 to-orange-100/50 shadow-lg"
                    : "bg-white hover:bg-orange-50/50"
                } border border-orange-100/20`}
              >
                <button
                  className="w-full px-6 py-5 text-left focus:outline-none"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                >
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-lg font-light ${
                        activeFaq === index
                          ? "text-orange-600"
                          : "text-gray-900"
                      } group-hover:text-orange-600 transition-colors duration-300`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`ml-6 flex-shrink-0 transform transition-transform duration-300 ${
                        activeFaq === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-orange-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeFaq === index
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-600/90 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-32 overflow-hidden bg-gradient-to-br from-orange-50/40 via-orange-100/30 to-orange-50/40"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMi4yIDAtNCAxLjgtNCA0czEuOCA0IDQgNCA0LTEuOCA0LTQtMS44LTQtNC00TTI0IDMwYy0yLjIgMC00IDEuOC00IDRzMS44IDQgNCA0IDQtMS44IDQtNC0xLjgtNC00LTQiIGZpbGw9IiNmZmE1MDAiIG9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-orange-100/30 rounded-full filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-200/30 to-orange-100/30 rounded-full filter blur-3xl opacity-70 animate-pulse delay-700"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-light text-gray-900 sm:text-5xl tracking-tight mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              We're here to support you on your wellness journey
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start mb-16">
            <div className="relative group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-100/20 transform hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500 hover:shadow-xl">
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform duration-300">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                    Email Us
                  </h3>
                  <p className="mt-3 text-gray-600 font-light">
                    support@mindease.com
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-100/20 transform hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500 hover:shadow-xl">
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform duration-300">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                    Visit Us
                  </h3>
                  <p className="mt-3 text-gray-600 font-light">
                    123 Wellness Street, Mind City
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-100/20 transform hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500 hover:shadow-xl">
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform duration-300">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                    Call Us
                  </h3>
                  <p className="mt-3 text-gray-600 font-light">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form className="relative group bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg border border-orange-100/20 space-y-8 max-w-3xl mx-auto transform hover:shadow-xl transition-all duration-500">
            <div className="relative">
              <input
                type="text"
                id="name"
                className="peer w-full px-5 py-4 rounded-lg border-2 border-gray-200 placeholder-transparent focus:outline-none focus:border-orange-400 transition-colors"
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-orange-500"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="peer w-full px-5 py-4 rounded-lg border-2 border-gray-200 placeholder-transparent focus:outline-none focus:border-orange-400 transition-colors"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-orange-500"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <textarea
                id="message"
                rows="5"
                className="peer w-full px-5 py-4 rounded-lg border-2 border-gray-200 placeholder-transparent focus:outline-none focus:border-orange-400 transition-colors resize-none"
                placeholder="Message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-orange-500"
              >
                Message
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-4 px-8 rounded-lg text-white bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl font-medium text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-br from-orange-50/40 via-orange-100/30 to-orange-50/40 border-t border-orange-100/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMi4yIDAtNCAxLjgtNCA0czEuOCA0IDQgNCA0LTEuOCA0LTQtMS44LTQtNC00TTI0IDMwYy0yLjIgMC00IDEuOC00IDRzMS44IDQgNCA0IDQtMS44IDQtNC0xLjgtNC00LTQiIGZpbGw9IiNmZmE1MDAiIG9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="space-y-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                MindEase
              </span>
              <p className="text-gray-600/80 font-light leading-relaxed">
                Your trusted companion on the journey to mental wellness and
                inner peace.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600/80 hover:text-orange-500 font-light transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600/80 hover:text-orange-500 font-light transition-colors duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600/80 hover:text-orange-500 font-light transition-colors duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600/80 hover:text-orange-500 font-light transition-colors duration-300"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 tracking-wider uppercase mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600/80 hover:text-orange-500 font-light transition-colors duration-300"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600/80 hover:text-orange-500 font-light transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600/80 hover:text-orange-500 font-light transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600/80 hover:text-orange-500 font-light transition-colors duration-300"
                  >
                    Cookie Settings
                  </a>
                </li>
              </ul>
            </div>
            <div>
            <Link
            to="/signin"
          >
              <h3 className="text-sm font-medium text-gray-900 tracking-wider uppercase mb-4">
                Get Started
              </h3>
              </Link>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600/80 hover:text-orange-500 font-light transition-colors duration-300"
                  >
                    Download App
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600/80 hover:text-orange-500 font-light transition-colors duration-300"
                  >
                    Book a Session
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600/80 hover:text-orange-500 font-light transition-colors duration-300"
                  >
                    Find a Therapist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600/80 hover:text-orange-500 font-light transition-colors duration-300"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-orange-100/20">
            <p className="text-gray-400 text-sm text-center font-light">
              &copy; {new Date().getFullYear()} MindEase. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
