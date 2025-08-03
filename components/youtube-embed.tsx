interface YouTubeEmbedProps {
  videoId: string
  title: string
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl border border-gray-200">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full border-0"
      />
    </div>
  )
}
