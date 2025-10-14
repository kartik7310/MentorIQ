export default function AvailableAITools() {
  const tools = [
    {
      title: "AI Career Q&A Chat",
      subtitle: "Chat with AI Agent",
      button: "Let's Chat",
      icon: "💬",
    },
    {
      title: "AI Resume Analyzer",
      subtitle: "Chat with AI Agent",
      button: "Start",
      icon: "🔍",
    },
    {
      title: "Learning Roadmap",
      subtitle: "Chat with AI Agent",
      button: "Get Started",
      icon: "🧭",
    },
    {
      title: "Cover Letter Generator",
      subtitle: "Chat with AI Agent",
      button: "Let's Generate",
      icon: "📄",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 shadow-md rounded-sm mt-8">
      {/* Section Header */}
      <div className=" mb-10">
        <h2 className="text-xl font-semibold text-gray-900">
          Available AI Tools
        </h2>
        <p className="text-gray-500 mt-2">
          Start Building and Shape Your Career with these exclusive AI Tools
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
            <h3 className="font-semibold text-gray-800 mb-1">{tool.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{tool.subtitle}</p>
            <button className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
              {tool.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
