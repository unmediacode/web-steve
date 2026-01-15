import { X } from 'lucide-react';
import { useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  videoUrl: string;
  description?: string;
  duration?: string;
  year?: string;
}

export function VideoModal({ isOpen, onClose, title, category, videoUrl, description, duration, year }: VideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-white rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Video */}
        <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>

        {/* Video Info */}
        <div className="p-6 md:p-8">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-gray-200 text-gray-800 rounded text-sm">
              {category}
            </span>
          </div>
          <h3 className="mb-4">{title}</h3>
          {description && (
            <p className="text-gray-700 leading-relaxed mb-4">
              {description}
            </p>
          )}
          <div className="flex gap-2 items-center">
            {duration && (
              <div className="bg-black text-white px-3 py-1.5 rounded text-xs w-fit">
                {duration}
              </div>
            )}
            {year && (
              <div className="bg-[#669bbc] text-white px-3 py-1.5 rounded text-xs w-fit">
                {year}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
