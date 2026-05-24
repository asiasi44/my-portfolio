"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { GiViolin } from "react-icons/gi";
import { CiVolumeMute } from "react-icons/ci";

const ThreeColor = () => {
  const sectionRef = useRef(null);
  const [currentMusicTime, setCurrentMusicTime] = useState(0);
  const [showFixed, setShowFixed] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() =>
    typeof Audio !== "undefined" ? new Audio("/sounds/violin.mp3") : null
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.6, 0.9],
    [0, 1, 1, 0]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setShowFixed(latest <= 0.9);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const handleToggleAudio = () => {
    if (!audio) return;

    if (isPlaying) {
      setCurrentMusicTime(audio.currentTime);
      audio.pause();
    } else {
      audio.currentTime = currentMusicTime;
      audio.play().catch((e) => console.warn("Audio play issue:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div ref={sectionRef} className="relative w-screen font-sans">
      {/* Fixed image section */}
      {showFixed && (
        <div className="sticky top-0 left-0 w-screen h-screen z-10">
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="https://www.film89.co.uk/wp-content/uploads/2018/11/20473C7C-8B8C-4B1D-BEC3-9024A46781F5.jpeg"
              fill
              alt="Opening scene"
              className="object-cover"
            />
          </div>
          <motion.div
            style={{ opacity: textOpacity }}
            className="absolute inset-0 flex flex-col leading-[3.8rem] items-center justify-center text-white text-6xl font-semibold"
          >
            <div className="font-thin tracking-widest">THREE COLORS</div>
            <br />
            <div className="font-extrabold text-[17rem]">RED</div>
          </motion.div>
        </div>
      )}

      {/* Scroll spacer */}
      <div className="h-[300vh]"></div>

      {/* Interactive Section */}
      <div className="relative z-20 bg-red-diagonal p-12">
        <div className="flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={handleToggleAudio}
            className="cursor-pointer"
          >
            {isPlaying ? (
              <CiVolumeMute color="white" size={200} />
            ) : (
              <GiViolin color="white" size={200} />
            )}
          </motion.div>
        </div>
        <div className="flex justify-center">
          {/* Interactive Section with Horizontal Scroll on Vertical Scroll */}
          <div className="z-20 bg-red-diagonal h-[200vh]">
            <IreneScroll />
          </div>
          {/* <div className="w-1/4 relative aspect-[4/5]">
            <Image
              src="https://i.ibb.co/Z16NM7Hw/Pet-Cat-Valentine-s-Day-Poster-in-Black-and-White-in-Polaroid-Style-2.png"
              fill
              alt="Opening scene"
              className="object-contain"
            />
          </div>
          <div className="w-1/4 relative aspect-[4/5]">
            <Image
              src="https://i.ibb.co/Z16NM7Hw/Pet-Cat-Valentine-s-Day-Poster-in-Black-and-White-in-Polaroid-Style-2.png"
              fill
              alt="Opening scene"
              className="object-contain"
            />
          </div>
          <div className="w-1/4 relative aspect-[4/5]">
            <Image
              src="https://i.ibb.co/Z16NM7Hw/Pet-Cat-Valentine-s-Day-Poster-in-Black-and-White-in-Polaroid-Style-2.png"
              fill
              alt="Opening scene"
              className="object-contain"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

const IreneScroll = () => {
  const containerRef = useRef(null);

  // Scroll progress based on containerRef, from container bottom hits viewport bottom (start end)
  // to container top hits viewport top (end start)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animate x from +50% (shift right, starts off center) to -60% (shift left fully)
  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-60%"]);

  return (
    <div ref={containerRef} className="h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex items-center whitespace-nowrap px-20"
        >
          {/* Text */}
          <span className="text-white text-[14rem] font-extrabold mr-10 select-none">
            IRENE JACOBS
          </span>

          {/* Image */}
          <div className="w-[30vw] relative aspect-[4/5]">
            <Image
              src="https://i.ibb.co/Z16NM7Hw/Pet-Cat-Valentine-s-Day-Poster-in-Black-and-White-in-Polaroid-Style-2.png"
              fill
              alt="Irene Jacobs"
              className="object-contain"
              priority
            />
          </div>
          
        </motion.div>
      </div>
    </div>
  );
};

"https://i.ibb.co/zhL0Wrq2/8201ce70-4005-4850-84b3-401d76d729cb-removalai-preview.png"
export default ThreeColor;
