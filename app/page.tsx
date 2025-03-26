"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown, ExternalLink, Flame, Gamepad2, Rocket, Trophy, Users } from "lucide-react"
import { motion } from "framer-motion"
import { VideoPlayer } from "@/components/video-player"
import { AudioPlayer } from "@/components/audio-player"

export default function DonBrosLanding() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)
  const dexRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  const videos = [
    {
      src: "/videos/hero.mp4",
      title: "Super Don Bro in Action",
    },
    {
      src: "/videos/plaza.mp4",
      title: "The Lonely Plaza",
    },
    {
      src: "/videos/pointing.mp4",
      title: "Super Don Bro WINNING",
    },
    {
      src: "/videos/alley.mp4",
      title: "Neon Alley Adventures",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
    const createCoins = () => {
      const coinContainer = document.querySelector(".coin-container")
      if (!coinContainer) return
      for (let i = 0; i < 15; i++) {
        const coin = document.createElement("div")
        coin.className = "pixel-coin"
        coin.style.left = `${Math.random() * 100}%`
        coin.style.top = `${Math.random() * 100}%`
        coin.style.animationDelay = `${Math.random() * 5}s`
        coinContainer.appendChild(coin)
      }
    }
    createCoins()
  }, [])

  const scrollToDex = () => dexRef.current?.scrollIntoView({ behavior: "smooth" })
  const scrollToVideos = () => videoRef.current?.scrollIntoView({ behavior: "smooth" })

  return (
    <div className="min-h-screen bg-black text-white font-pixel relative overflow-hidden">
      <AudioPlayer src="/audio/Pixelated Dreams.mp3" />

      {/* Tokenomics Section */}
      <section className="relative z-30 py-20 px-4 bg-black/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-yellow-300 neon-text">TOKENOMICS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="tokenomics-chart">
              <div className="relative aspect-square w-full max-w-sm md:max-w-md mx-auto bg-indigo-900/60 rounded-full overflow-hidden border-4 border-cyan-500/50 neon-box">
                <div className="absolute inset-0 bg-green-500/90 rounded-full flex flex-col items-center justify-center text-center p-8">
                  <p className="text-4xl font-bold leading-none">100%</p>
                  <p className="text-xl mt-2">Liquidity</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-indigo-900/60 rounded-xl p-6 border-l-4 border-green-500 cyberpunk-border">
                <h3 className="text-2xl font-bold mb-2 text-green-400">100% Liquidity</h3>
                <p>All tokens are in the liquidity pool. Fair distribution for everyone.</p>
              </div>
              <div className="bg-indigo-900/60 rounded-xl p-6 border-l-4 border-red-500 cyberpunk-border">
                <h3 className="text-2xl font-bold mb-2 text-red-400">0% Dev</h3>
                <p>No developer allocation. No hidden wallets.</p>
              </div>
              <div className="bg-indigo-900/60 rounded-xl p-6 border-l-4 border-red-500 cyberpunk-border">
                <h3 className="text-2xl font-bold mb-2 text-red-400">0% Team</h3>
                <p>No team allocation. Everyone starts on equal footing.</p>
              </div>
              <div className="bg-indigo-900/60 rounded-xl p-6 border-l-4 border-red-500 cyberpunk-border">
                <h3 className="text-2xl font-bold mb-2 text-red-400">0% Presale</h3>
                <p>No presale. Fair launch for all participants.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section ref={videoRef} className="relative z-30 py-20 px-4 bg-black/90">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-2 text-center text-yellow-300 neon-text">SUPER DON BROS UNIVERSE</h2>
          <p className="text-center mb-12 text-cyan-300">Explore the pixel world of adventure</p>

          <div className="lg:col-span-2 mb-10">
            <VideoPlayer
              key={videos[activeVideoIndex].src}
              src={videos[activeVideoIndex].src}
              title={videos[activeVideoIndex].title}
              autoPlay={true}
              className="aspect-video w-full shadow-[0_0_30px_rgba(0,100,255,0.4)]"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 transform ${activeVideoIndex === index ? "scale-105 ring-4 ring-yellow-400" : "scale-100 hover:scale-105"} rounded-lg overflow-hidden`}
                onClick={() => setActiveVideoIndex(index)}
              >
                <video
                  src={video.src}
                  muted
                  loop
                  playsInline
                  className="w-full aspect-video object-cover"
                />
                <div className="p-2 bg-indigo-900/80">
                  <p className="text-xs text-white truncate">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
