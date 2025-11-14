import React, { useEffect, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ open, images = [], startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  const close = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, images.length, close]);

  if (!images.length) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <button
            aria-label="Close"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            onClick={(e) => { e.stopPropagation(); close(); }}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              className="m-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
              onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + images.length) % images.length); }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              className="m-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
              onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % images.length); }}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <motion.img
            key={index}
            src={images[index]}
            alt="Gallery"
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                className={`h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`}
                onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
