import { FaShippingFast, FaHeadset, FaRedoAlt } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: FaShippingFast,
      title: "FREE SHIPPING",
      description:
        "Enjoy free shipping on all orders over $50. Fast and reliable delivery to your doorstep.",
    },
    {
      icon: FaHeadset,
      title: "24/7 CUSTOMER SUPPORT",
      description:
        "Our dedicated support team is available round the clock to assist you with any queries.",
    },
    {
      icon: FaRedoAlt,
      title: "EASY RETURNS",
      description:
        "Not satisfied? Return items within 30 days for a full refund. No questions asked.",
    },
  ];

  return (
    <div className="w-full py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center transition-all duration-500 hover:scale-110">
              <div
                className={`bg-black text-white rounded-3xl p-6 mb-6 w-24 h-24 flex items-center justify-center`}
              >
                <IconComponent className="text-5xl" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-gray-900">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
