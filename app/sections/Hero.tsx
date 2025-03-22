"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import VideoModal from "../components/VideoModal";
import ContactModal from "../components/ContactModal";

const locations = [
  {
    id: 1,
    name: "VỊNH HẠ LONG",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592",
    title: "Vịnh Hạ Long",
    description: "Di sản thiên nhiên thế giới với hàng nghìn hòn đảo đá vôi",
  },
  {
    id: 2,
    name: "HANG SỬNG SỐT",
    image: "https://images.unsplash.com/photo-1573270695497-0b840a08d1e5",
    title: "Hang Sửng Sốt",
    description: "Hang động kỳ vĩ với những nhũ đá độc đáo",
  },
  {
    id: 3,
    name: "ĐẢO TITOP",
    image: "https://images.unsplash.com/photo-1578653882694-56c1779e87b5",
    title: "Đảo Titop",
    description: "Bãi biển tuyệt đẹp với tầm nhìn panorama",
  },
];

export default function Hero() {
  const [currentLocation, setCurrentLocation] = useState(locations[0]);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleLocationChange = async (location: (typeof locations)[0]) => {
    if (location.id === currentLocation.id) return;
    setCurrentLocation(location);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen">
      {/* Main Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentLocation.image}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentLocation.image}
            alt={currentLocation.title}
            fill
            className="object-cover opacity-90"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Header Navigation */}
      <div className="relative z-50">
        <div className="bg-black/20 backdrop-blur-sm">
          <div className="mx-auto px-[100px] py-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-4 cursor-pointer"
                onClick={() => scrollToSection("hero")}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2,
                  }}
                  className="w-12 h-12 bg-[#00C951] rounded-full flex items-center justify-center shadow-lg shadow-[#00C951]/20"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-white"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-xl font-bold text-white drop-shadow-lg"
                >
                  Travel VN
                </motion.span>
              </motion.div>

              {/* Main Navigation */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center space-x-16"
              >
                <button
                  onClick={() => scrollToSection("why-choose-us")}
                  className="text-white hover:text-[#00C951] transition-colors uppercase text-sm tracking-[0.2em] font-medium drop-shadow-lg hover:scale-110 transform duration-200"
                >
                  Về Chúng Tôi
                </button>
                <button
                  onClick={() => scrollToSection("destinations")}
                  className="text-white hover:text-[#00C951] transition-colors uppercase text-sm tracking-[0.2em] font-medium drop-shadow-lg hover:scale-110 transform duration-200"
                >
                  Điểm Đến
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-white hover:text-[#00C951] transition-colors uppercase text-sm tracking-[0.2em] font-medium drop-shadow-lg hover:scale-110 transform duration-200"
                >
                  Đánh Giá
                </button>
              </motion.div>

              {/* Book Trip Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("consultation")}
                className="bg-[#00C951] text-white px-8 py-3 rounded-full text-sm uppercase tracking-[0.2em] font-medium shadow-lg shadow-[#00C951]/20 hover:shadow-xl hover:shadow-[#00C951]/30 hover:bg-[#00B347] transition-all duration-300"
              >
                Đặt Tour
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Side Navigation - Destinations Preview */}
      <div className="absolute right-0 top-0 bottom-0 w-[350px] bg-gray-900/30 backdrop-blur-sm z-10">
        <div className="h-full flex flex-col justify-center items-center text-white">
          <div className="text-8xl font-bold mb-3">02</div>
          <h3 className="text-2xl font-semibold mb-2">Phong Nha</h3>
          <p className="text-lg">Quảng Bình</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-[100px] mt-30">
        <div className="max-w-[600px] text-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <motion.h1
              key={currentLocation.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[120px] font-bold leading-[1.1] tracking-tighter"
            >
              {currentLocation.title.toUpperCase()}
            </motion.h1>
            <div className="absolute -bottom-6 right-0 flex flex-col items-end">
              <span className="text-xl font-light">KHÁM PHÁ</span>
            </div>
          </motion.div>

          {/* Journey Path */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-32"
          >
            <div className="relative">
              <div className="border-b border-dashed border-white/30 absolute w-full top-1/2" />
              <div className="flex justify-between relative max-w-[480px]">
                {locations.map((location) => (
                  <div
                    key={location.id}
                    onClick={() => handleLocationChange(location)}
                    className={`text-center group cursor-pointer transition-all duration-300 ${
                      currentLocation.id === location.id ? "scale-110" : ""
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full mx-auto mb-2 transition-all duration-300 group-hover:scale-150 ${
                        currentLocation.id === location.id
                          ? "bg-[#00C951] w-4 h-4"
                          : "bg-white/50 group-hover:bg-[#00C951]"
                      }`}
                    />
                    <p
                      className={`text-sm font-medium transition-colors duration-300 ${
                        currentLocation.id === location.id
                          ? "text-[#00C951]"
                          : "text-white/70"
                      }`}
                    >
                      {location.name.split(" ").map((word, i) => (
                        <span key={i}>
                          {word}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Location Description */}
          <motion.p
            key={currentLocation.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-base text-white/80 max-w-[420px]"
          >
            Di sản thiên nhiên thế giới với hàng nghìn hòn đảo đá vôi
          </motion.p>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex items-center space-x-5">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" cursor-pointer w-12 h-12 rounded-full bg-[#00C951]/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#00C951]/20 transition-colors"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsVideoModalOpen(true)}
          className="cursor-pointer w-12 h-12 rounded-full bg-[#00C951]/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#00C951]/20 transition-colors"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.button>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="vt9OL_sJ5gA"
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        currentLocation={currentLocation.title}
      />
    </section>
  );
}
