import Image from "next/image";

interface WorkImageThumbnailProps {
  src: string;
  title: string;
}

export function WorkImageThumbnail({ src, title }: WorkImageThumbnailProps) {
  return (
    <div className="flex flex-col group">
      <div
        className="
          relative isolate
          aspect-video
          overflow-hidden
          rounded-lg
          border
          border-[#E0E0E0]
          transition-all duration-300
          group-hover:border-[#D1180A]
          w-full
        "
      >
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="mt-4 text-start">
        <h3 className="text-xl font-bold text-[#2F2F2F] transition-colors duration-300 group-hover:text-[#D1180A]">
          {title}
        </h3>
      </div>
    </div>
  );
}
