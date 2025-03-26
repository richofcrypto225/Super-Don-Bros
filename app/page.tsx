"use client"

import { useEffect, useState, useRef, forwardRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown, ExternalLink, Flame, Gamepad2, Rocket, Trophy, Users } from "lucide-react"
import { motion } from "framer-motion"
import { VideoPlayer } from "@/components/video-player"
import { AudioPlayer } from "@/components/audio-player"

// Tokenomics Component
export const Tokenomics = () => (
  <section className="relative z-30 py-20 px-4 bg-black/90 backdrop-blur-sm">
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
        </div>
      </div>
    </div>
  </section>
)

// Roadmap Component
export const Roadmap = () => (
  <section className="relative z-30 py-20 px-4 bg-black/80">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-2 text-center text-yellow-300 neon-text">LEVEL UP WITH SUPER DON BROS</h2>
      <p className="text-center mb-12 text-cyan-300">Our roadmap to the final castle</p>
      <div className="roadmap-item text-white">
        <h3 className="text-2xl font-bold text-green-400 mb-4">PHASE 1: Launch Day</h3>
        <ul className="list-disc list-inside">
          <li>Fair Launch on Solana</li>
          <li>DEX listings (Raydium, Jupiter)</li>
          <li>Community meme raids</li>
          <li>CoinGecko & CoinMarketCap listings</li>
        </ul>
      </div>
      <div className="roadmap-item text-white mt-12">
        <h3 className="text-2xl font-bold text-blue-400 mb-4">PHASE 2: Power-Ups</h3>
        <ul className="list-disc list-inside">
          <li>Pixel Art NFT collection drop</li>
          <li>Arcade game teaser release</li>
          <li>$DONBROS staking platform</li>
          <li>CEX listing campaign</li>
        </ul>
      </div>
    </div>
  </section>
)

// DexSection Component
export const DexSection = forwardRef<HTMLDivElement>((_, ref) => (
  <section ref={ref} className="relative z-30 py-20 px-4 bg-black/80 backdrop-blur-sm">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 text-center text-yellow-300 neon-text">GET $DONBROS NOW</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="https://raydium.io/swap/" target="_blank" rel="noopener noreferrer" className="dex-button">
          <div className="bg-indigo-900/80 p-6 rounded-xl border-2 border-cyan-500/50 hover:scale-105">
            <img src="/images/raydium-logo.png" alt="Raydium" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-blue-300">Raydium</h3>
          </div>
        </a>
        <a href="https://jup.ag/swap" target="_blank" rel="noopener noreferrer" className="dex-button">
          <div className="bg-indigo-900/80 p-6 rounded-xl border-2 border-cyan-500/50 hover:scale-105">
            <img src="/images/jupiter-logo.png" alt="Jupiter" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-300">Jupiter</h3>
          </div>
        </a>
        <a href="https://birdeye.so/" target="_blank" rel="noopener noreferrer" className="dex-button">
          <div className="bg-indigo-900/80 p-6 rounded-xl border-2 border-cyan-500/50 hover:scale-105">
            <img src="/images/birdeye-logo.png" alt="Birdeye" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-orange-300">Birdeye</h3>
          </div>
        </a>
      </div>
    </div>
  </section>
))

// Community Component
export const Community = () => (
  <section className="relative z-30 py-20 px-4 bg-black/90">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center text-yellow-300 neon-text">JOIN THE COMMUNITY</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <a href="https://t.me/+JjOS-0shj8k0OWI5" target="_blank" rel="noopener noreferrer">
          <div className="bg-indigo-900/60 p-6 rounded-xl text-center hover:scale-105">
            <img src="/images/telegram-logo.png" alt="Telegram" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-blue-300">Telegram</h3>
          </div>
        </a>
        <a href="https://x.com/SuperDonBros" target="_blank" rel="noopener noreferrer">
          <div className="bg-indigo-900/60 p-6 rounded-xl text-center hover:scale-105">
            <img src="/images/x-logo.png" alt="Twitter" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-cyan-300">Twitter</h3>
          </div>
        </a>
        <a href="https://discord.gg/donbros" target="_blank" rel="noopener noreferrer">
          <div className="bg-indigo-900/60 p-6 rounded-xl text-center hover:scale-105">
            <img src="/images/discord-logo.png" alt="Discord" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-indigo-300">Discord</h3>
          </div>
        </a>
      </div>
    </div>
  </section>
)

// Footer Component
export const Footer = () => (
  <footer className="relative z-30 py-12 px-4 bg-black border-t-4 border-indigo-800">
    <div className="max-w-6xl mx-auto text-center">
      <img src="/images/super-don-bros-logo.png" alt="Super Don Bros Logo" className="w-48 h-auto mx-auto mb-6" />
      <p className="text-xl font-bold text-yellow-300 mb-4">Made with ❤️ by the Community</p>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Link href="#" className="text-cyan-300 hover:text-cyan-100">Solana Contract</Link>
        <Link href="#" className="text-cyan-300 hover:text-cyan-100">DAO Forum</Link>
        <Link href="#" className="text-cyan-300 hover:text-cyan-100">Game Teaser</Link>
        <Link href="#" className="text-cyan-300 hover:text-cyan-100">Documentation</Link>
      </div>
      <p className="text-white/60">Copyright © 2025 SUPER DON BROS</p>
    </div>
  </footer>
)