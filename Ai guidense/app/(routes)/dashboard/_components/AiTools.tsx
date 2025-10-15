"use client";
import Link from "next/link";

export default function AvailableAITools() {
  const tools = [
    {
      name: "AI Career Q&A Chat",
      desc: "Ask career questions",
      button: "Ask Now",
      icon: "💬",
      path: "/ai-tools/ai-chat",
    },
    {
      name: "AI Resume Analyzer",
      desc: "Chat with AI Agent",
      button: "Start",
      icon: "🔍",
      path: "/ai-tools/resume-analyzer",
    },
    {
      name: "Learning Roadmap",
      desc: "Chat with AI Agent",
      button: "Get Started",
      icon: "🧭",
      path: "/ai-tools/learning-roadmap",
    },
    {
      name: "Cover Letter Generator",
      desc: "Chat with AI Agent",
      button: "Let's Generate",
      icon: "📄",
      path: "/ai-tools/cover-letter",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 shadow-md rounded-sm mt-8">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <h2 className="text-xl font-semibold text-gray-900">
          Available AI Tools
        </h2>
        <p className="text-gray-500 mt-2">
          Start building and shape your career with these exclusive AI tools
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center"
          >
            <div className="text-4xl mb-3">{tool.icon}</div>
            <h3 className="font-semibold text-gray-800 mb-1">{tool.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{tool.desc}</p>
            <Link
              href={tool.path}
              className="mt-auto bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {tool.button}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
