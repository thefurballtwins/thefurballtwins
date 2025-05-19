import React from "react";
import { InstagramIcon, YoutubeIcon } from "lucide-react";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 text-gray-800 font-sans">
      <section className="text-center py-16 px-4">
        <h1 className="text-6xl font-extrabold mb-4 tracking-tight text-purple-800">The Furball Twins</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-700 mb-8">
          Cuteness. Chaos. Cat spa days. Meet <strong>Teddy</strong> & <strong>Foxy</strong> — your daily dose of twin kitten drama.
        </p>

        <img
          src="/kittens.jpg"
          alt="Teddy and Foxy cuddling"
          className="mx-auto mt-8 mb-10 w-40 h-40 object-cover rounded-full shadow-lg border-4 border-white"
        />

        <div className="flex justify-center gap-6 mb-12">
          {/* TikTok */}
          <a href="https://www.tiktok.com/@thefurballtwins" target="_blank" rel="noopener noreferrer">
            <div className="bg-black rounded-full p-3 hover:scale-110 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 fill-white">
                <path d="M168,40a8,8,0,0,1,8,8,24,24,0,0,0,24,24,8,8,0,0,1,0,16,39.9,39.9,0,0,1-24-8.2V152a56,56,0,1,1-56-56,8,8,0,0,1,0,16,40,40,0,1,0,40,40V40A8,8,0,0,1,168,40Z"/>
              </svg>
            </div>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/thefurballtwins" target="_blank" rel="noopener noreferrer">
            <div className="bg-pink-500 rounded-full p-3 hover:scale-110 transition">
              <InstagramIcon className="w-6 h-6 text-white" />
            </div>
          </a>

          {/* YouTube */}
          <a href="https://www.youtube.com/@thefurballtwins" target="_blank" rel="noopener noreferrer">
            <div className="bg-red-600 rounded-full p-3 hover:scale-110 transition">
              <YoutubeIcon className="w-6 h-6 text-white" />
            </div>
          </a>
        </div>
      </section>

      <section className="text-center bg-white py-12 px-4 shadow-inner">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">About</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          <strong>Teddy & Foxy</strong> are twin kittens with big personalities. From bath-time meltdowns to surprise attacks,
          they’re taking over TikTok, Instagram, and YouTube Shorts — one chaotic moment at a time. Follow their journey for daily laughs and furry drama.
        </p>
      </section>

      <footer className="text-center py-6 text-sm text-gray-600">
        © 2025 The Furball Twins · Built with React & Tailwind ·{" "}
        <a href="mailto:thefurballtwins@gmail.com" className="underline hover:text-purple-700">Contact</a>
      </footer>
    </main>
  );
}
