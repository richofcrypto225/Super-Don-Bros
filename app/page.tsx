"use client"
// Trigger redeploy

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
    { src: "/videos/hero.mp4", title: "Super Don Bro in Action" },
    { src: "/videos/plaza.mp4", title: "The Lonely Plaza" },
    { src: "/videos/pointing.mp4", title: "Super Don Bro WINNING" },
    { src: "/videos/alley.mp4", title: "Neon Alley Adventures" }
  ];
  
  ]

  useEffect(() => {
    setIsLoaded(true)

    // Create floating coins
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

  const scrollToDex = () => {
    dexRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToVideos = () => {
    videoRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black text-white font-pixel relative overflow-hidden">
      {/* Background Music Player */}
      <AudioPlayer src="/audio/Pixelated Dreams.mp3" />

      {/* Hero Section */}
      <section className="relative z-30 min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-32">
        {/* Hero Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/videos/hero.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
        </div>

        {/* Floating coins effect */}
        <div className="coin-container absolute inset-0 z-10 overflow-hidden"></div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center relative z-20 mt-[-50px]"
        >
          {/* Super Don Bros Logo */}
          <div className="logo-container relative mx-auto mb-8 w-full max-w-2xl">
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-900/30 via-yellow-500/20 to-blue-900/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/super-don-bros-logo.png"
                alt="Super Don Bros Logo"
                className="w-full h-auto drop-shadow-[0_0_15px_rgba(0,100,255,0.7)] animate-float"
              />
            </motion.div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
            Be the Main Character
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-cyan-300 drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">
            No presale. No dev wallet. No VC. 1 billion coins. All in your hands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToDex}
              className="bg-yellow-400 hover:bg-yellow-300 text-black text-xl px-8 py-6 rounded-xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,0,0.6)] animate-bounce-slow"
            >
              Get $DONBROS Now <ArrowDown className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={scrollToVideos}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xl px-8 py-6 rounded-xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,100,255,0.6)]"
            >
              Watch Gameplay
            </Button>
          </div>
        </motion.div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center animate-bounce">
          <ArrowDown className="h-8 w-8 text-white/70" />
        </div>
      </section>

      {/* Video Showcase Section */}
      <section ref={videoRef} className="relative z-30 py-20 px-4 bg-black/90">
        <div className="grid-background absolute inset-0 opacity-20"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-2 text-center text-yellow-300 neon-text">SUPER DON BROS UNIVERSE</h2>
          <p className="text-center mb-12 text-cyan-300">Explore the pixel world of adventure</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Video */}
            <div className="lg:col-span-2">
              <VideoPlayer
                src={videos[activeVideoIndex].src}
                title={videos[activeVideoIndex].title}
                autoPlay={true}
                className="aspect-video w-full shadow-[0_0_30px_rgba(0,100,255,0.4)]"
              />
            </div>

            {/* Video Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:col-span-2 gap-4">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className={`cursor-pointer transition-all duration-300 transform ${activeVideoIndex === index ? "scale-105 ring-4 ring-yellow-400" : "scale-100 hover:scale-105"} rounded-lg overflow-hidden`}
                  onClick={() => setActiveVideoIndex(index)}
                >
                  <video src={video.src} muted loop autoPlay playsInline className="w-full aspect-video object-cover" />
                  <div className="p-2 bg-indigo-900/80">
                    <p className="text-xs text-white truncate">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="relative z-30 py-20 px-4 bg-black/90 backdrop-blur-sm">
        <div className="grid-background absolute inset-0 opacity-20"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-yellow-300 neon-text">TOKENOMICS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="tokenomics-chart relative">
              <div className="aspect-square w-full max-w-md mx-auto bg-indigo-900/60 rounded-full overflow-hidden border-4 border-cyan-500/50 neon-box">
                <div className="absolute inset-0 bg-green-500/90 rounded-full flex items-center justify-center text-center p-8">
                  <div>
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-xl">Liquidity</p>
                  </div>
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

              <div className="relative mt-8">
                <div className="absolute -rotate-12 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-2 rounded-lg border-2 border-white font-bold text-xl transform scale-110 shadow-lg neon-box">
                  BURNED DEV WALLET
                </div>
                <div className="bg-gray-900/80 rounded-xl p-8 pt-12 border-2 border-red-500 cyberpunk-border">
                  <p className="text-center">
                    The developer wallet has been permanently burned, ensuring true community ownership.
                  </p>
                  <div className="flex justify-center mt-4">
                    <Flame className="h-10 w-10 text-red-500 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="relative z-30 py-20 px-4 bg-black/80">
        <div className="grid-background absolute inset-0 opacity-20"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-2 text-center text-yellow-300 neon-text">
            LEVEL UP WITH SUPER DON BROS
          </h2>
          <p className="text-center mb-12 text-cyan-300">Our roadmap to the final castle</p>

          <div className="roadmap-container relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-cyan-500/50 -translate-x-1/2 z-0 neon-box"></div>

            {/* Phase 1 */}
            <div className="roadmap-item">
              <div className="roadmap-icon bg-yellow-400 text-black">
                <Rocket className="h-6 w-6" />
                <span className="roadmap-level">1-1</span>
              </div>
              <div className="roadmap-content">
                <h3 className="text-2xl font-bold mb-2 text-yellow-300">Phase 1: Launch Day</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full mt-1 mr-2"></span>
                    <span>Fair Launch on Solana</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full mt-1 mr-2"></span>
                    <span>DEX listings (Raydium, Jupiter)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full mt-1 mr-2"></span>
                    <span>Community meme raids</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full mt-1 mr-2"></span>
                    <span>CoinGecko & CoinMarketCap listings</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="roadmap-item">
              <div className="roadmap-icon bg-cyan-400 text-black">
                <Trophy className="h-6 w-6" />
                <span className="roadmap-level">2-1</span>
              </div>
              <div className="roadmap-content">
                <h3 className="text-2xl font-bold mb-2 text-cyan-300">Phase 2: Power-Ups</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full mt-1 mr-2"></span>
                    <span>Pixel Art NFT collection drop</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full mt-1 mr-2"></span>
                    <span>Arcade game teaser release</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full mt-1 mr-2"></span>
                    <span>$DONBROS staking platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full mt-1 mr-2"></span>
                    <span>CEX listing campaign</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="roadmap-item">
              <div className="roadmap-icon bg-green-400 text-black">
                <Gamepad2 className="h-6 w-6" />
                <span className="roadmap-level">3-1</span>
              </div>
              <div className="roadmap-content">
                <h3 className="text-2xl font-bold mb-2 text-green-300">Phase 3: The Adventure</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 bg-indigo-500 rounded-full mt-1 mr-2"></span>
                    <span>Play-to-Earn game launch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 bg-indigo-500 rounded-full mt-1 mr-2"></span>
                    <span>DAO governance implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 bg-indigo-500 rounded-full mt-1 mr-2"></span>
                    <span>Community treasury formation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 bg-indigo-500 rounded-full mt-1 mr-2"></span>
                    <span>Major partnerships announcement</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="roadmap-item">
              <div className="roadmap-icon bg-purple-400 text-black">
                <Users className="h-6 w-6" />
                <span className="roadmap-level">4-1</span>
              </div>
              <div className="roadmap-content">
                <h3 className="text-2xl font-bold mb-2 text-purple-300">Phase 4: The Kingdom</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 bg-pink-500 rounded-full mt-1 mr-2"></span>
                    <span>Metaverse integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 bg-pink-500 rounded-full mt-1 mr-2"></span>
                    <span>$DONBROS merch store</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 bg-pink-500 rounded-full mt-1 mr-2"></span>
                    <span>IRL community events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-4 h-4 bg-pink-500 rounded-full mt-1 mr-2"></span>
                    <span>Expanded ecosystem development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEX Section */}
      <section ref={dexRef} className="relative z-30 py-20 px-4 bg-black/80 backdrop-blur-sm">
        <div className="grid-background absolute inset-0 opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-center text-yellow-300 neon-text">GET $DONBROS NOW</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://raydium.io/swap/" target="_blank" rel="noopener noreferrer" className="dex-button">
              <div className="bg-indigo-900/80 hover:bg-indigo-800/90 p-6 rounded-xl border-2 border-cyan-500/50 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] neon-box">
                <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-md"></div>
                  <img src="/images/raydium-logo.png" alt="Raydium" className="w-20 h-20 relative z-10" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-300">Raydium</h3>
                <p className="text-sm text-cyan-300 mb-4">Swap on Raydium DEX</p>
                <div className="flex items-center justify-center text-yellow-300">
                  <span>Trade Now</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </div>
              </div>
            </a>

            <a href="https://jup.ag/swap" target="_blank" rel="noopener noreferrer" className="dex-button">
              <div className="bg-indigo-900/80 hover:bg-indigo-800/90 p-6 rounded-xl border-2 border-cyan-500/50 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] neon-box">
                <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full blur-md"></div>
                  <img src="/images/jupiter-logo.png" alt="Jupiter" className="w-20 h-20 relative z-10" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-300">Jupiter</h3>
                <p className="text-sm text-cyan-300 mb-4">Swap on Jupiter Aggregator</p>
                <div className="flex items-center justify-center text-yellow-300">
                  <span>Trade Now</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </div>
              </div>
            </a>

            <a href="https://birdeye.so/" target="_blank" rel="noopener noreferrer" className="dex-button">
              <div className="bg-indigo-900/80 hover:bg-indigo-800/90 p-6 rounded-xl border-2 border-cyan-500/50 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] neon-box">
                <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-black/20 rounded-full blur-md"></div>
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center relative z-10 p-4">
                    <img src="/images/birdeye-logo.png" alt="Birdeye" className="w-full h-full object-contain" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-300">Birdeye</h3>
                <p className="text-sm text-cyan-300 mb-4">View Chart & Analytics</p>
                <div className="flex items-center justify-center text-yellow-300">
                  <span>View Chart</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </div>
              </div>
            </a>
          </div>

          <div className="mt-12 p-6 bg-indigo-900/30 rounded-xl border border-cyan-500/30 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center mr-2">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-xl font-bold text-green-400">Contract Address</h3>
            </div>
            <p className="font-mono text-sm break-all bg-black/50 p-4 rounded-lg border border-cyan-900/50 text-yellow-300">
              Coming Soon
            </p>
            <div className="mt-4 flex justify-center">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-cyan-500/50 text-cyan-300 hover:bg-cyan-950/50"
                disabled
              >
                Copy Address
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="relative z-30 py-20 px-4 bg-black/90">
        <div className="grid-background absolute inset-0 opacity-20"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-yellow-300 neon-text">JOIN THE COMMUNITY</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <a
              href="https://t.me/+JjOS-0shj8k0OWI5"
              target="_blank"
              rel="noopener noreferrer"
              className="community-link"
            >
              <div className="bg-indigo-900/60 hover:bg-indigo-800/80 p-6 rounded-xl border-2 border-blue-500/50 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,100,255,0.4)] text-center neon-box">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/images/telegram-logo.png" alt="Telegram" className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-blue-300">Telegram</h3>
                <p className="text-white/80">Join our active Telegram community</p>
              </div>
            </a>

            <a href="https://x.com/SuperDonBros" target="_blank" rel="noopener noreferrer" className="community-link">
              <div className="bg-indigo-900/60 hover:bg-indigo-800/80 p-6 rounded-xl border-2 border-cyan-500/50 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] text-center neon-box">
                <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/images/x-logo.png" alt="X (Twitter)" className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-300">X (Twitter)</h3>
                <p className="text-white/80">Follow for updates and memes</p>
              </div>
            </a>

            <a href="https://discord.gg/donbros" target="_blank" rel="noopener noreferrer" className="community-link">
              <div className="bg-indigo-900/60 hover:bg-indigo-800/80 p-6 rounded-xl border-2 border-purple-500/50 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(128,0,255,0.4)] text-center neon-box">
                <div className="w-20 h-20 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/images/discord-logo.png" alt="Discord" className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-indigo-300">Discord</h3>
                <p className="text-white/80">Chat with fellow $DONBROS holders</p>
              </div>
            </a>
          </div>

          <div className="pixel-characters-container flex justify-center flex-wrap gap-4 mb-12">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="pixel-character-small"></div>
            ))}
          </div>

          <div className="meme-gallery bg-indigo-900/60 p-6 rounded-xl overflow-hidden border-2 border-cyan-500/30 neon-box">
            <h3 className="text-2xl font-bold mb-6 text-center text-yellow-300 neon-text">Meme Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="meme-item group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src="/images/meme-1.png"
                  alt="Super Don Bro in cyberpunk city"
                  className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm">409 EXCHANGE NOT FOUND</p>
                </div>
              </div>

              <div className="meme-item group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src="/images/meme-2.png"
                  alt="Super Don Bro with clenched fists"
                  className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm">DIAMOND HANDS</p>
                </div>
              </div>

              <div className="meme-item group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src="/images/meme-3.png"
                  alt="Super Don Bro pointing at viewer"
                  className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm">JOIN THE REVOLUTION</p>
                </div>
              </div>

              <div className="meme-item group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src="/images/meme-4.png"
                  alt="Super Don Bro with hooded figures"
                  className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm">CRYPTO SQUAD</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button
                variant="outline"
                className="bg-indigo-800/50 border-cyan-500/50 text-cyan-300 hover:bg-indigo-700/70"
              >
                View All Memes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-30 py-12 px-4 bg-black border-t-4 border-indigo-800">
        <div className="grid-background absolute inset-0 opacity-10"></div>
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-48 h-auto mx-auto mb-6">
            <img src="/images/super-don-bros-logo.png" alt="Super Don Bros Logo" className="w-full h-auto" />
          </div>
          <p className="text-xl font-bold text-yellow-300 mb-4 cyberpunk-glow">Made with ❤️ by the Community</p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="#" className="text-cyan-300 hover:text-cyan-100 transition-colors cyberpunk-glow">
              Solana Contract
            </Link>
            <Link href="#" className="text-cyan-300 hover:text-cyan-100 transition-colors cyberpunk-glow">
              DAO Forum
            </Link>
            <Link href="#" className="text-cyan-300 hover:text-cyan-100 transition-colors cyberpunk-glow">
              Game Teaser
            </Link>
            <Link href="#" className="text-cyan-300 hover:text-cyan-100 transition-colors cyberpunk-glow">
              Documentation
            </Link>
          </div>

          <p className="text-white/60">Copyright © 2025 SUPER DON BROS</p>
        </div>
      </footer>
    </div>
  )
}

