import BoardMemberCard from "@/components/board-member-card"
import YouTubeEmbed from "@/components/youtube-embed"
import Header from "@/components/header"

export default function OrganizationPage() {
  // Sample board member data - replace with your actual board members
  const boardMembers = [
    {
      id: 1,
      name: "Jane Smith",
      title: "Chairperson",
      image: "/placeholder.svg?height=300&width=300",
      shortBio: "Jane has over 20 years of experience in nonprofit leadership and community organizing.",
      learnMoreLink: "/board/jane-smith",
    },
    {
      id: 2,
      name: "Michael Johnson",
      title: "Vice Chair",
      image: "/placeholder.svg?height=300&width=300",
      shortBio: "Michael brings financial expertise from his background in investment banking and philanthropy.",
      learnMoreLink: "/board/michael-johnson",
    },
    {
      id: 3,
      name: "Priya Patel",
      title: "Secretary",
      image: "/placeholder.svg?height=300&width=300",
      shortBio: "Priya is a community advocate with expertise in public policy and urban planning.",
      learnMoreLink: "/board/priya-patel",
    },
    {
      id: 4,
      name: "David Chen",
      title: "Treasurer",
      image: "/placeholder.svg?height=300&width=300",
      shortBio: "David's background in corporate finance helps guide our organization's fiscal strategy.",
      learnMoreLink: "/board/david-chen",
    },
    {
      id: 5,
      name: "Maria Rodriguez",
      title: "Board Member",
      image: "/placeholder.svg?height=300&width=300",
      shortBio: "Maria's expertise in education reform has been instrumental to our community programs.",
      learnMoreLink: "/board/maria-rodriguez",
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Board Member",
      image: "/placeholder.svg?height=300&width=300",
      shortBio: "James brings legal expertise and a passion for social justice to our organization.",
      learnMoreLink: "/board/james-wilson",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Organization</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to excellence in leadership and community service
          </p>
        </div>

        {/* YouTube Video Section */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch our organization's story and learn about our commitment to making a difference
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed videoId="dQw4w9WgXcQ" title="Organization Video" />
          </div>
        </section>

        {/* Board Members Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet Our Board</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our distinguished board members bring diverse expertise and unwavering dedication to our mission
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {boardMembers.map((member) => (
              <BoardMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
