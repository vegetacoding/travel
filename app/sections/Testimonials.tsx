"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Thị Minh Tâm",
    role: "Doanh nhân",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content:
      "Tour du lịch được tổ chức rất chuyên nghiệp. Hướng dẫn viên nhiệt tình, chu đáo. Đặc biệt là các điểm tham quan đều rất đẹp và thú vị.",
    rating: 5,
    tour: "Tour Vịnh Hạ Long 2N1Đ",
  },
  {
    id: 2,
    name: "Trần Văn Hoàng",
    role: "Giáo viên",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    content:
      "Chất lượng dịch vụ tuyệt vời, giá cả hợp lý. Đội ngũ nhân viên rất thân thiện và chuyên nghiệp. Chắc chắn sẽ quay lại vào lần sau.",
    rating: 5,
    tour: "Tour Hang Sơn Đoòng",
  },
  {
    id: 3,
    name: "Lê Thị Thanh Hà",
    role: "Nhiếp ảnh gia",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content:
      "Những cảnh đẹp tại Vịnh Hạ Long thực sự đã để lại ấn tượng khó quên. Cảm ơn đội ngũ đã tạo nên một chuyến đi tuyệt vời như vậy.",
    rating: 5,
    tour: "Tour Vịnh Hạ Long Luxury",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cảm Nhận Của Khách Hàng
          </h2>
          <div className="w-20 h-1.5 bg-[#00C951] mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Những đánh giá chân thực từ khách hàng là động lực để chúng tôi
            không ngừng cải thiện chất lượng dịch vụ
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Background Decorations */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-72 h-72 bg-[#00C951]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-72 h-72 bg-[#00C951]/5 rounded-full blur-3xl"></div>

          {/* Testimonials Slider */}
          <div className="relative">
            <div className="flex items-center justify-center gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`w-full max-w-lg transform transition-all duration-500 ${
                    activeIndex === index
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-50"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-[#00C951] text-white rounded-full p-1">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-600 italic">
                        "{testimonial.content}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {testimonial.tour}
                      </span>
                      <div className="flex items-center gap-2 text-[#00C951]">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm font-medium">Đã xác thực</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-[#00C951] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
