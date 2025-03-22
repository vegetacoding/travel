"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import TourDetailModal from "../components/TourDetailModal";

const destinations = [
  {
    id: 1,
    name: "Vịnh Hạ Long",
    location: "Quảng Ninh",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592",
    description: "Di sản thiên nhiên thế giới với hàng nghìn hòn đảo đá vôi",
    price: "2,890,000₫",
    duration: "2 ngày",
    rating: 4.9,
    tag: "Di sản UNESCO",
  },
  {
    id: 2,
    name: "Phố Cổ Hội An",
    location: "Quảng Nam",
    image:
      "https://images.unsplash.com/photo-1716396435819-2a3706cc5f85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Phố cổ lãng mạn với đèn lồng và kiến trúc độc đáo",
    price: "1,990,000₫",
    duration: "3 ngày",
    rating: 4.8,
    tag: "Văn hóa",
  },
  {
    id: 3,
    name: "Vịnh Lan Hạ",
    location: "Hải Phòng",
    image:
      "https://images.vietnamtourism.gov.vn/vn/images/2021/vinh_lan_ha.jpg",
    description: "Thiên đường biển đảo hoang sơ với làn nước trong xanh",
    price: "3,490,000₫",
    duration: "2 ngày",
    rating: 4.7,
    tag: "Biển đảo",
  },
  {
    id: 4,
    name: "Hang Sơn Đoòng",
    location: "Quảng Bình",
    image:
      "https://cdnmedia.baotintuc.vn/Upload/lQuX6s340fSBU8AUyrDPxg/files/2019/12/vna_potal_chum_anh_ve_dep_cua_son_doong_hang_dong_tu_nhien_lon_nhat_the_gioi__3710474(1).jpg",
    description: "Hang động tự nhiên lớn nhất thế giới",
    price: "69,900,000₫",
    duration: "4 ngày",
    rating: 4.9,
    tag: "Mạo hiểm",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Destinations() {
  const [selectedTour, setSelectedTour] = useState<
    (typeof destinations)[0] | null
  >(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="py-20 bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span
            variants={titleVariants}
            className="text-[#00C951] text-sm font-medium uppercase tracking-wider"
          >
            Điểm Đến Nổi Bật
          </motion.span>
          <motion.h2
            variants={titleVariants}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white"
          >
            Khám Phá Việt Nam
          </motion.h2>
          <motion.p
            variants={titleVariants}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Những điểm đến độc đáo và ấn tượng nhất Việt Nam, từ di sản thiên
            nhiên đến văn hóa nghìn năm
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={cardVariants}
              onClick={() => setSelectedTour(destination)}
              className="group bg-gray-900 rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(0,201,81,0.15)] transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              <motion.div
                className="relative h-64 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-4 left-4">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="bg-[#00C951]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                  >
                    {destination.tag}
                  </motion.span>
                </div>

                <div className="absolute top-4 right-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full"
                  >
                    <span className="font-semibold text-white">
                      {destination.price}
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {destination.name}
                    </h3>
                    <p className="text-gray-400 text-sm flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {destination.location}
                    </p>
                  </div>
                  <div className="flex items-center bg-[#00C951]/10 px-2 py-1 rounded">
                    <svg
                      className="w-4 h-4 text-[#00C951]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-[#00C951]">
                      {destination.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  {destination.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <span className="text-sm text-gray-400 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-[#00C951]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {destination.duration}
                  </span>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-[#00C951] text-sm font-medium hover:text-white transition-colors flex items-center"
                  >
                    Chi tiết
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.button
            variants={titleVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00C951] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#00B347] transition-all transform hover:scale-105 flex items-center mx-auto"
          >
            Xem Tất Cả Điểm Đến
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {selectedTour && (
        <TourDetailModal
          isOpen={!!selectedTour}
          onClose={() => setSelectedTour(null)}
          tour={selectedTour}
        />
      )}
    </section>
  );
}
