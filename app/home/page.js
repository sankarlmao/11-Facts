'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const sampleFootballTopics = [
  "UEFA Champions League",
  "Premier League",
  "FIFA World Cup",
  "Cristiano Ronaldo",
  "VAR in Football",
  "Goalkeeping Tactics",
  "Ballon d'Or",
  "Top Football Transfers"
];

const bgImages = {
  "UEFA Champions League": "champions.jpg",
  "Premier League": "premier.jpg",
  "FIFA World Cup": "worldcup.jpg",
  "Cristiano Ronaldo": "ronaldo.jpg",
  "VAR in Football": "var.jpg",
  "Goalkeeping Tactics": "goalkeeper.jpg",
  "Ballon d'Or": "ballondor.jpg",
  "Top Football Transfers": "transfers.jpg"
};

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sampleFootballTopics.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentTopic = sampleFootballTopics[index];
  const bgImage = `/images/${bgImages[currentTopic] || "default.jpg"}`;

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-70 p-10 rounded-2xl text-center max-w-xl shadow-2xl backdrop-blur-md">
        <h1 className="text-4xl font-bold mb-6">Discover Football</h1>

        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={currentTopic}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-2xl mb-6 font-medium"
          >
            {currentTopic}
          </motion.p>
        </AnimatePresence>

        <Link
          href={`/topic/${encodeURIComponent(currentTopic)}`}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
