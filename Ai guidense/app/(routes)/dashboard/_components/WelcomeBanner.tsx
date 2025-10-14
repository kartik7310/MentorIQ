import React from 'react'

const WelcomeBanner = () => {
  return (
     <div className="w-full max-w-4xl mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl p-4 text-white shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">AI Career Coach Agent</h2>
      <p className="text-sm md:text-base mb-4 opacity-90">
        "Smarter career decisions start here — get tailored advice, real-time
        market insights, and a roadmap built just for you with the power of AI."
      </p>
      <button className="bg-white text-gray-900 font-medium px-5 py-2 rounded-lg shadow hover:bg-gray-100 transition">
        Let’s Get Started
      </button>
    </div>
  )
}

export default WelcomeBanner
