'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 md:left-[60%] z-0">
        <Image
          src="/Hero.png"
          alt="Faith Kajuju"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-16">
        <div className="md:w-1/2">
          <p className="text-xl md:text-2xl mb-4">Zoho Certified Developer/Project Manager</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I&apos;m <span className="text-red-600">Faith</span>
            <br />
            Kajuju
          </h1>
          <p className="text-2xl md:text-3xl">From Kenya</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2" />
        </div>
      </div>
    </div>
  )
}