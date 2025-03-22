"use client";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#00C951]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: "An Toàn & Tin Cậy",
    description:
      "Đảm bảo an toàn tuyệt đối cho khách hàng với đội ngũ hướng dẫn viên chuyên nghiệp và các thiết bị hiện đại.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#00C951]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Giá Cả Hợp Lý",
    description:
      "Cam kết mang đến những trải nghiệm tốt nhất với mức giá phù hợp nhất cho khách hàng.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#00C951]"
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
    ),
    title: "Linh Hoạt Thời Gian",
    description:
      "Đa dạng lựa chọn về thời gian khởi hành và lịch trình tour phù hợp với nhu cầu của bạn.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#00C951]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: "Trải Nghiệm Độc Đáo",
    description:
      "Những hành trình được thiết kế riêng biệt, mang đến những trải nghiệm khó quên cho du khách.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lý Do Chọn Chúng Tôi
          </h2>
          <div className="w-20 h-1.5 bg-[#00C951] mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Với kinh nghiệm nhiều năm trong lĩnh vực du lịch, chúng tôi tự hào
            mang đến cho khách hàng những trải nghiệm tuyệt vời nhất
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-shadow group"
            >
              <div className="w-16 h-16 bg-[#00C951]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00C951]/20 transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
