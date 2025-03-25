"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface VideoPlayerProps {
  src: string
  poster?: string
  title?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  className?: string
}

export function VideoPlayer({
  src,
  poster,
  title,
  autoPlay = false,
  loop = true,
  muted = true,
  className = "",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(muted)
  const [isHovering, setIsHovering] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.play().catch(() => setIsPlaying(false))
    } else {
      video.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = isMuted
  }, [isMuted])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop={loop}
        muted={isMuted}
        autoPlay={autoPlay}
        playsInline
        className="w-full h-full object-cover"
      />

      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <h3 className="text-white font-pixel text-sm md:text-base">{title}</h3>
        </div>
      )}

      <div
        className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${isHovering || !isPlaying ? "opacity-100" : "opacity-0"}`}
      >
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="bg-yellow-500/80 hover:bg-yellow-500 text-black rounded-full p-4 transition-transform hover:scale-110"
            aria-label="Play video"
          >
            <Play className="h-8 w-8" />
          </button>
        )}
      </div>

      <div
        className={`absolute bottom-3 right-3 flex gap-2 transition-opacity duration-300 ${isHovering ? "opacity-100" : "opacity-0"}`}
      >
        {isPlaying && (
          <button
            onClick={togglePlay}
            className="bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-transform hover:scale-110"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
        )}

        <button
          onClick={toggleMute}
          className="bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-transform hover:scale-110"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>
    </div>
  )
}

