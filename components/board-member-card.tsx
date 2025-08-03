"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface BoardMember {
  id: number
  name: string
  title: string
  image: string
  shortBio: string
  learnMoreLink: string
}

interface BoardMemberCardProps {
  member: BoardMember
}

export default function BoardMemberCard({ member }: BoardMemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="h-[420px] w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-white/90 font-medium">{member.title}</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg shadow-lg border border-gray-200 p-6 flex flex-col">
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
            <p className="text-primary font-semibold">{member.title}</p>
          </div>

          <div className="flex-grow">
            <p className="text-gray-700 leading-relaxed">{member.shortBio}</p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <Link
              href={member.learnMoreLink}
              className="inline-flex items-center text-primary hover:text-accent font-semibold transition-colors group"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
