import React, { useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from '../components/Layout';
import Lightbox from '../components/Lightbox';

const DATA = {
  1: {
    title: 'Skyline Penthouse',
    location: 'Downtown, Skyline District',
    price: 4250000,
    specs: { beds: 4, baths: 3, area: 3500 },
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1920&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1920&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1920&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1920&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=1920&auto=format&fit=crop'
    ],
    video: 'https://www.youtube.com/embed/1La4QzGeaaQ?rel=0&modestbranding=1&showinfo=0'
  },
  2: {
    title: 'Modern Hillside Villa',
    location: 'Crestview, North Hills',
    price: 3420000,
    specs: { beds: 5, baths: 4, area: 4200 },
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1920&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1920&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1920&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1920&auto=format&fit=crop'
    ],
    video: 'https://www.youtube.com/embed/d1xYJbJ7i24?rel=0&modestbranding=1&showinfo=0'
  },
  3: {
    title: 'Serene Coastal Estate',
    location: 'Azure Bay, Coastline',
    price: 5150000,
    specs: { beds: 6, baths: 5, area: 6200 },
    images: [
      'https://images.unsplash.com/photo-1491884662610-dfcd28f30cf5?q=80&w=1920&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f?q=80&w=1920&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1920&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1920&auto=format&fit=crop'
    ],
    video: 'https://www.youtube.com/embed/RqdZ0zG3S9M?rel=0&modestbranding=1&showinfo=0'
  }
};

export default function Property() {
  const { id } = useParams();
  const pid = Number(id);
  const property = useMemo(() => DATA[pid] ?? DATA[1], [pid]);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <Layout>
      <section className="pb-20">
        {/* Parallax Hero */}
        <div ref={heroRef} className="relative h-[70vh] w-full overflow-hidden">
          <motion.img
            src={property.images[0]}
            alt={property.title}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ y, scale, opacity }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white/0" />
          <div className="relative z-10 max-w-7xl mx-auto h-full flex items-end px-4 sm:px-6 lg:px-8 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="backdrop-blur-sm bg-white/10 text-white rounded-2xl p-5 ring-1 ring-white/20"
            >
              <h1 className="text-3xl md:text-4xl font-semibold">{property.title}</h1>
              <p className="text-white/80 mt-1">{property.location}</p>
              <div className="text-2xl md:text-3xl font-medium mt-3">${property.price.toLocaleString()}</div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                <div className="bg-white/10 rounded-lg px-3 py-2 ring-1 ring-white/20">{property.specs.beds} Bedrooms</div>
                <div className="bg-white/10 rounded-lg px-3 py-2 ring-1 ring-white/20">{property.specs.baths} Bathrooms</div>
                <div className="bg-white/10 rounded-lg px-3 py-2 ring-1 ring-white/20">{property.specs.area.toLocaleString()} sqft</div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Gallery thumbnails */}
              <div className="bg-white rounded-2xl p-4 ring-1 ring-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-medium">Gallery</h3>
                  <button
                    className="text-sm px-3 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800"
                    onClick={() => { setLightboxIndex(0); setLightboxOpen(true); }}
                  >
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.images.map((src, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.99 }}
                      className="group relative overflow-hidden rounded-xl ring-1 ring-gray-100"
                      onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
                    >
                      <img src={src} alt="thumb" className="h-36 md:h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 bg-white rounded-2xl p-6 ring-1 ring-gray-100 shadow-sm">
                <h3 className="text-xl font-medium">Overview</h3>
                <p className="mt-3 text-gray-600">
                  Elevated luxury living with panoramic views and meticulous craftsmanship. Sunlit interiors flow into expansive terraces,
                  designed for entertaining and quiet reflection alike. Premium materials, custom millwork, and integrated smart-home systems
                  create a seamless living experience.
                </p>
              </div>

              {/* Amenities */}
              <div className="mt-6 bg-white rounded-2xl p-6 ring-1 ring-gray-100 shadow-sm">
                <h3 className="text-xl font-medium">Amenities</h3>
                <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                  {['Private terrace','Chef kitchen','Smart home','24/7 concierge','Fitness center','Secure parking','Heated pool','Cinema room'].map((a,i)=> (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.05 }} className="bg-gray-50 rounded-lg p-3">
                      {a}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Video Tour */}
              <div className="mt-6 bg-white rounded-2xl p-0 ring-1 ring-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-xl font-medium">Video Tour</h3>
                  <span className="text-sm text-gray-500">3 min</span>
                </div>
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={property.video}
                    title="Property video tour"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 bg-white rounded-2xl p-6 ring-1 ring-gray-100 shadow-sm">
                <div className="text-lg font-medium">Contact Agent</div>
                <p className="text-sm text-gray-500 mt-1">Interested in this property? Get in touch for a private tour.</p>
                <form className="mt-4 space-y-3">
                  <input placeholder="Name" className="w-full bg-gray-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
                  <input placeholder="Email" className="w-full bg-gray-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
                  <input placeholder="Phone" className="w-full bg-gray-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
                  <button type="button" className="w-full bg-gray-900 text-white rounded-lg px-4 py-2">Request Info</button>
                </form>

                <div className="mt-6">
                  <div className="text-sm text-gray-500">Or call</div>
                  <a href="tel:+123456789" className="text-lg font-medium">(123) 456-789</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Lightbox open={lightboxOpen} images={property.images} startIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} />
      </section>
    </Layout>
  );
}
