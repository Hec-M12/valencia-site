import VideoPlayer from '@/components/shared/VideoPlayer'
import ContactanosSection from '@/components/sections/ContactanosSection'

export default function VideoSection() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-8 items-start p-6 py-16">
        {/* Left: Video */}
        <div className="flex justify-center items-center h-full">
          <VideoPlayer
            videoId="bqj3_1ISiW4"
            coverSrc="/images/logos/valencia-logo.png"
            coverAlt="Logo Valencia School"
          />
        </div>
        {/* Right: Contact */}
        <div>
          <ContactanosSection />
        </div>
      </div>
    </section>
  )
}