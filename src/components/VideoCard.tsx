import { useState } from 'react';
import { VideoModal } from './VideoModal';
import svgPaths from '../imports/svg-lm8rvk79bk';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

interface VideoCardProps {
  title: string;
  year?: string;
  duration: string;
  description: string;
  category?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
}

export function VideoCard({ title, year, duration, description, category = 'Documentary', videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnailUrl }: VideoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="group flex flex-col gap-4">
        {/* Video Thumbnail */}
        <motion.div 
          className="relative rounded-[10px] overflow-hidden aspect-video cursor-pointer"
          style={{ backgroundColor: 'var(--air-superiority-blue)' }}
          onClick={handleOpenModal}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {thumbnailUrl && (
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ImageWithFallback
                src={thumbnailUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
          
          {/* Film Grain Overlay */}
          {thumbnailUrl && (
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
              animate={{
                opacity: [0.15, 0.25, 0.15],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
          
          {/* Vignette Effect */}
          {thumbnailUrl && (
            <div className="absolute inset-0 pointer-events-none" 
              style={{
                background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.4) 100%)'
              }}
            />
          )}
          
          {/* Play Button - Bottom Right */}
          <motion.div 
            className="absolute bg-[rgba(255,255,255,0.3)] bottom-[14.99px] right-[17px] rounded-[1.67772e+07px] size-[42px] flex items-center justify-center z-10"
            whileHover={{ 
              scale: 1.15,
              backgroundColor: 'rgba(255,255,255,0.5)'
            }}
            transition={{ duration: 0.2 }}
          >
            <svg className="block size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p2bb5f600} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Card Content */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-neutral-950">
            {title}
          </h3>
          <p className="text-[#4a5565] text-[14px] leading-[22.75px]">
            {description}
          </p>
          <div className="flex gap-2 items-center">
            <div className="text-white px-3 py-1.5 rounded text-xs w-fit" style={{ backgroundColor: '#003049' }}>
              {duration}
            </div>
            {year && (
              <div className="text-white px-3 py-1.5 rounded text-xs w-fit" style={{ backgroundColor: 'var(--air-superiority-blue)' }}>
                {year}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={title}
        category={category}
        videoUrl={videoUrl}
        description={description}
        duration={duration}
        year={year}
      />
    </>
  );
}