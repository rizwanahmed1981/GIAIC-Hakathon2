import Image from "next/image";
import video from "@/app/images/video-3.png"
export default function YouTubeVideo() {
    return (
      <div className="flex justify-evenly items-center w-[414px] mt-8 ml-24 h-[477px] md:w-full mr-24 md:h-screen">
        <Image src={video} alt="image of a video" width={989} height={540} />
        
        {/* <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/kcfs1-ryKWE"
          title="YouTube video"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
      </div>
    );
  }
  
  // 