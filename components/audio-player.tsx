"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, Music, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AudioPlayerProps {
  src: string
  initialVolume?: number
  autoPlay?: boolean
}

export function AudioPlayer({ src, initialVolume = 0.5, autoPlay = true }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)
  const [volume, setVolume] = useState(initialVolume)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [showNotification, setShowNotification] = useState(false)

  // Attempt autoplay on mount
  useEffect(() => {
    if (autoPlay) {
      const audio = audioRef.current
      if (!audio) return

      // Try to play automatically
      const playPromise = audio.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
            setHasInteracted(true)
          })
          .catch(() => {
            // Autoplay was blocked
            setAutoplayBlocked(true)
            setShowNotification(true)

            // Hide notification after 5 seconds
            setTimeout(() => {
              setShowNotification(false)
            }, 5000)
          })
      }
    }
  }, [autoPlay])

  // Handle play/pause
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, we'll need user interaction
          setIsPlaying(false)
          setAutoplayBlocked(true)
        })
      }
    } else {
      audio.pause()
    }
  }, [isPlaying])

  // Handle mute/unmute
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = isMuted
  }, [isMuted])

  // Handle volume change
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = volume
  }, [volume])

  // Start playing after user interaction
  const startAudio = () => {
    setHasInteracted(true)
    setIsPlaying(true)
    setAutoplayBlocked(false)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (newVolume === 0) {
      setIsMuted(true)
    } else if (isMuted) {
      setIsMuted(false)
    }
  }

  return (
    <>
      {/* Autoplay blocked notification */}
      {showNotification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-indigo-900/90 text-white px-4 py-3 rounded-lg shadow-lg border border-cyan-500/50 flex items-center gap-2 max-w-xs sm:max-w-md text-center animate-fade-in">
          <Music className="h-5 w-5 text-cyan-300 flex-shrink-0" />
          <p className="text-sm">Click the music button to enable the Super Don Bros soundtrack!</p>
        </div>
      )}

      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-black/70 backdrop-blur-sm p-2 rounded-full border border-cyan-500/30 shadow-lg neon-box">
        <audio ref={audioRef} src={src} loop />

        {!hasInteracted || autoplayBlocked ? (
          <Button
            onClick={startAudio}
            size="icon"
            variant="ghost"
            className="bg-indigo-600/80 hover:bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center animate-pulse"
          >
            <Play className="h-6 w-6" />
            <span className="sr-only">Play background music</span>
          </Button>
        ) : (
          <>
            <Button
              onClick={togglePlay}
              size="icon"
              variant="ghost"
              className={`${isPlaying ? "bg-green-600/50 hover:bg-green-600" : "bg-indigo-600/50 hover:bg-indigo-600"} text-white rounded-full w-10 h-10 flex items-center justify-center`}
            >
              <Music className="h-5 w-5" />
              <span className="sr-only">{isPlaying ? "Pause music" : "Play music"}</span>
            </Button>

            <Button
              onClick={toggleMute}
              size="icon"
              variant="ghost"
              className="bg-indigo-600/50 hover:bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
            </Button>

            <div className="hidden sm:block w-24 px-2">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full accent-cyan-500 cursor-pointer"
                aria-label="Volume control"
              />
            </div>
          </>
        )}
      </div>
    </>
  )
}

