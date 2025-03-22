"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AboutUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

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

  const itemVariants = {
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

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Who We Are */}
          <motion.div variants={itemVariants}>
            <motion.span
              variants={itemVariants}
              className="text-[#FF6B6B] text-sm font-medium uppercase tracking-wider inline-block"
            >
              Về Chúng Tôi
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 mt-4 mb-6"
            >
              Về Chúng Tôi
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 leading-relaxed mb-8"
            >
              Được thành lập vào năm 2023, chúng tôi luôn tận tâm trong việc tạo
              nên những trải nghiệm du lịch đáng nhớ. Hành trình của chúng tôi
              bắt đầu từ một ý tưởng đơn giản: biến mỗi chuyến đi trở nên phi
              thường. Đến nay, chúng tôi vẫn tiếp tục biến những ước mơ thành
              hiện thực.
            </motion.p>
            <motion.div
              variants={imageVariants}
              className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="https://c4.wallpaperflare.com/wallpaper/810/946/371/travel-to-vietnam-halong-bay-boats-mountains-clouds-wallpaper-preview.jpg"
                alt="Vịnh Hạ Long"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>

          {/* Why Us */}
          <motion.div variants={itemVariants}>
            <motion.span
              variants={itemVariants}
              className="text-[#FF6B6B] text-sm font-medium uppercase tracking-wider inline-block"
            >
              Tại Sao Chọn Chúng Tôi
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 mt-4 mb-6"
            >
              Tại Sao Chọn Chúng Tôi
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 leading-relaxed mb-8"
            >
              Điều làm nên sự khác biệt của chúng tôi chính là cam kết không
              ngừng về chất lượng dịch vụ. Chúng tôi không đơn thuần là một công
              ty du lịch; mà là người đồng hành đáng tin cậy của bạn. Khám phá
              những lý do khiến du khách như bạn lựa chọn chúng tôi cho những
              chuyến phiêu lưu của mình.
            </motion.p>
            <motion.div
              variants={imageVariants}
              className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1528127269322-539801943592"
                alt="Vịnh Hạ Long về đêm"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
