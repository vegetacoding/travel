import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface TourDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: {
    name: string;
    location: string;
    image: string;
    description: string;
    price: string;
    duration: string;
    rating: number;
    tag: string;
  };
}

const tourHighlights = [
  {
    icon: "🏨",
    title: "Khách sạn",
    description: "Nghỉ dưỡng tại khách sạn 4-5 sao",
  },
  {
    icon: "🚌",
    title: "Di chuyển",
    description: "Xe du lịch đời mới, máy bay khứ hồi",
  },
  {
    icon: "🍽️",
    title: "Ẩm thực",
    description: "Buffet sáng, trưa, tối đặc sắc",
  },
  {
    icon: "🎫",
    title: "Vé tham quan",
    description: "Trọn gói vé vào cổng các điểm tham quan",
  },
];

const scheduleExample = [
  {
    day: "Ngày 1",
    title: "Khởi hành - Check in - Khám phá",
    activities: [
      "Đón khách tại điểm hẹn",
      "Di chuyển đến điểm đến",
      "Check-in khách sạn",
      "Tham quan điểm du lịch chính",
      "Ăn tối & nghỉ ngơi",
    ],
  },
  {
    day: "Ngày 2",
    title: "Trải nghiệm văn hóa & ẩm thực",
    activities: [
      "Ăn sáng tại khách sạn",
      "Tham quan các điểm du lịch",
      "Trải nghiệm ẩm thực địa phương",
      "Show diễn văn hóa đặc sắc",
    ],
  },
];

export default function TourDetailModal({
  isOpen,
  onClose,
  tour,
}: TourDetailModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Hero Image */}
            <div className="relative h-[300px]">
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-[#00C951]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {tour.tag}
                  </span>
                  <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    <svg
                      className="w-4 h-4 text-[#00C951]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-white text-sm">
                      {tour.rating}
                    </span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {tour.name}
                </h2>
                <p className="text-gray-300 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {tour.location}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Tour Overview */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Tổng Quan Tour
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tourHighlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm"
                    >
                      <div className="text-2xl mb-2">{highlight.icon}</div>
                      <h4 className="text-white font-medium mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tour Description */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Mô Tả Tour
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {tour.description}
                </p>
              </div>

              {/* Tour Schedule */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Lịch Trình Tour
                </h3>
                <div className="space-y-4">
                  {scheduleExample.map((day, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-xl p-4">
                      <div className="flex items-center mb-3">
                        <span className="text-[#00C951] font-semibold">
                          {day.day}
                        </span>
                        <span className="mx-2 text-gray-500">|</span>
                        <span className="text-white font-medium">
                          {day.title}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {day.activities.map((activity, actIndex) => (
                          <li
                            key={actIndex}
                            className="text-gray-300 flex items-center"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00C951] mr-2" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price and Booking */}
              <div className="bg-[#00C951]/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-gray-300 mb-1">Giá tour từ</p>
                    <p className="text-3xl font-bold text-white">
                      {tour.price}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 mb-1">Thời gian</p>
                    <p className="text-xl font-semibold text-white">
                      {tour.duration}
                    </p>
                  </div>
                </div>
                <button className="w-full bg-[#00C951] hover:bg-[#00B347] text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center space-x-2">
                  <span>Đặt Tour Ngay</span>
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
