"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

interface VideoPlayerProps {
  videoId: string
  coverSrc: string
  coverAlt?: string
}

export default function VideoPlayer({
  videoId,
  coverSrc,
  coverAlt = "Cover image",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const playerRef = useRef<HTMLDivElement>(null)
  const ytPlayer = useRef<any>(null)

  useEffect(() => {
    if (!isPlaying) return
    // Function to (re)initialize the player
    const initPlayer = () => {
      // Destroy existing player if any
      if (ytPlayer.current) {
        ytPlayer.current.destroy()
      }
      ytPlayer.current = new (window as any).YT.Player(playerRef.current, {
        videoId,
        playerVars: { autoplay: 1 },
        events: {
          onStateChange: (event: any) => {
            if (event.data === (window as any).YT.PlayerState.ENDED) {
              ytPlayer.current.destroy()
              setIsPlaying(false)
            }
          },
        },
      })
    }
    // If API already loaded, init immediately
    if ((window as any).YT && (window as any).YT.Player) {
      initPlayer()
    } else {
      // Load YouTube API script once
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      document.body.appendChild(tag);
      // When API ready, call init
      (window as any).onYouTubeIframeAPIReady = initPlayer
    }
  }, [isPlaying, videoId])

  return (
    <div className="relative w-[90%] mx-auto md:w-full lg:w-[80%] pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
      {!isPlaying ? (
        <button
          className="absolute inset-0 flex items-center justify-center bg-gray-400 bg-opacity-40 group"
          onClick={() => setIsPlaying(true)}
        >
          <Image
            src={coverSrc}
            alt={coverAlt}
            fill
            className="object-contain bg-white p-8 opacity-70 transition-opacity"
          />
          <span className="relative flex items-center justify-center w-20 h-20 rounded-full bg-valencia-blue hover:bg-opacity-70 group-hover:bg-opacity-70 shadow-lg transition-opacity">
            <Play className="w-10 h-10 text-white group-hover:bg-opacity-70 " />
          </span>
        </button>
      ) : (
        <div
          ref={playerRef}
          className="absolute top-0 left-0 w-full h-full"
        />
      )}
    </div>
  )
}
// Usage:
// <VideoPlayer videoId="bqj3_1ISiW4" coverSrc="/logo-valencia.png" coverAlt="Logo Valencia School" />