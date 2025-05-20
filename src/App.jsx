import { Analytics } from '@vercel/analytics/react';
import React from "react";
import { InstagramIcon, YoutubeIcon } from "lucide-react";

const TikTokID    = import.meta.env.VITE_TIKTOK_ID;
const InstagramID = import.meta.env.VITE_INSTAGRAM_ID;
const YouTubeID   = import.meta.env.VITE_YOUTUBE_ID;

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 text-gray-800 font-sans">

      <section className="text-center py-16 px-4">

        {/* Title + Subtitle */}
        <h1 className="text-6xl font-extrabold mb-4 tracking-tight text-purple-800">The Furball Twins</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-700 mb-8">
          Cuteness. Chaos. Cat spa days. Meet <strong>Teddy</strong> & <strong>Foxy</strong> — your daily dose of twin kitten drama.
        </p>

        {/* Profile Image */}
        <img
          src="/kittens.jpg"
          alt="Teddy and Foxy cuddling"
          className="mx-auto mt-8 mb-10 w-40 h-40 object-cover rounded-full shadow-lg border-4 border-white"
        />

        {/* Follow Prompt */}
        <h2 className="text-lg font-semibold text-purple-700 mb-4">Follow us on:</h2>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-12">

          {/* TikTok */}
          <div className="w-15 h-10 flex flex-col items-center">
            <a
              href="https://www.tiktok.com/@thefurballtwins"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <div className="bg-black rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 fill-white">
                  <path d="M168,40a8,8,0,0,1,8,8,24,24,0,0,0,24,24,8,8,0,0,1,0,16,39.9,39.9,0,0,1-24-8.2V152a56,56,0,1,1-56-56,8,8,0,0,1,0,16,40,40,0,1,0,40,40V40A8,8,0,0,1,168,40Z"/>
                </svg>
              </div>
            </a>
            <p className="text-sm mt-1 text-gray-700">TikTok</p>
          </div>

          {/* Instagram */}
          <div className="w-15 h-10 flex flex-col items-center">
            <a
              href="https://www.instagram.com/thefurballtwins"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <div className="bg-pink-500 rounded-full p-3">
                <InstagramIcon className="w-6 h-6 text-white" />
              </div>
            </a>
            <p className="text-sm mt-1 text-gray-700">Instagram</p>
          </div>

          {/* YouTube */}
          <div className="w-15 h-10 flex flex-col items-center">
            <a
              href="https://www.youtube.com/@thefurballtwins"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <div className="bg-red-600 rounded-full p-3">
                <YoutubeIcon className="w-6 h-6 text-white" />
              </div>
            </a>
            <p className="text-sm mt-1 text-gray-700">YouTube</p>
          </div>
        </div>

      </section>

      <section className="text-center bg-white py-12 px-4 shadow-inner">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">About</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          <strong>Teddy & Foxy</strong> are twin kittens with big personalities. From bath-time meltdowns to surprise attacks,
          they’re taking over TikTok, Instagram, and YouTube Shorts — one chaotic moment at a time. Follow their journey for daily laughs and furry drama.
        </p>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">
          Take a Peek at Their Daily Chaos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">

          {/* 1) TikTok */}
          <iframe
            src={`https://www.tiktok.com/embed/v2/${TikTokID}/`}
            className="w-150 h-[750px] rounded-lg"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>

          {/* 2) Instagram */}
          <iframe
            src={`https://www.instagram.com/p/${InstagramID}/embed`}
            className="w-150 h-[750px] rounded-lg"
            scrolling="no"
            allowTransparency="true"
          ></iframe>

          {/* 3) YouTube Shorts */}
          <iframe
            src={`https://www.youtube.com/embed/${YouTubeID}?&autoplay=0`}
            className="w-150 h-[750px] rounded-lg"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-600">
        © 2025 The Furball Twins · Built with React & Tailwind ·{" "}
        <a href="mailto:thefurballtwins@gmail.com" className="underline hover:text-purple-700">Contact</a>
      </footer>

      <Analytics />
    </main>
  );
}
