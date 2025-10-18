import React from "react";

export default function Card({ title, desc, image, liveLink, githubLink }) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 w-full max-w-2xl mx-auto">
  
  {image && (
    <div className="w-full overflow-hidden rounded-lg mb-4">
      <img
        src={image}
        alt={title}
        className="w-full h-[18rem] sm:h-[20rem] md:h-[22rem] object-cover rounded-lg transition-transform duration-500 hover:scale-105"
      />
    </div>
  )}

  <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
  <p className="text-gray-600 dark:text-gray-300 mb-4 text-base">{desc}</p>

  <div className="flex flex-wrap gap-4">
    {liveLink ? (
      <a 
        href={liveLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-5 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
      >
        Live
      </a>
    ) : (
      <span className="px-5 py-2 bg-gray-300 text-gray-700 rounded-lg cursor-not-allowed">Live</span>
    )}
    {githubLink ? (
      <a 
        href={githubLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-5 py-2 border-2 border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition"
      >
        Code
      </a>
    ) : (
      <span className="px-5 py-2 border-2 border-gray-300 text-gray-500 rounded-lg cursor-not-allowed">Code</span>
    )}
  </div>
</div>

  );
}
