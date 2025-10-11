import React from "react";
import { Truck, Headphones, DollarSign } from "lucide-react";

const About = () => {
  const stats = [
    { number: "10.5k", label: "Sellers active on our site" },
    { number: "33k", label: "Monthly Product Sale", highlight: true },
    { number: "45.5k", label: "Customers active on our site" },
    { number: "25k", label: "Annual gross sale on our site" },
  ];

  const team = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
img :"https://images.unsplash.com/photo-1642257859842-c95f9fa8121d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJ1c2luZXNzbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      img: "https://media.istockphoto.com/id/1364656966/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=RNQrpdnpY4_gGq6uxX_xCVTxnA-R0m-8Pf5a6kxr_mA=",
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      img: "https://plus.unsplash.com/premium_photo-1682096592504-5bc960bea6d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3NtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    },
  ];

  const features = [
    {
      icon: <Truck className="w-10 h-10 mx-auto text-red-500" />,
      title: "Free and Fast Delivery",
      desc: "Free delivery for all orders over $140",
    },
    {
      icon: <Headphones className="w-10 h-10 mx-auto text-red-500" />,
      title: "24/7 Customer Service",
      desc: "Friendly 24/7 customer support",
    },
    {
      icon: <DollarSign className="w-10 h-10 mx-auto text-red-500" />,
      title: "Money Back Guarantee",
      desc: "We return money within 30 days",
    },
  ];

  return (
    <div className="w-full px-6 md:px-20 py-16">
      {/* Our Story Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast rate. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1700762894798-fa6cd3afa786?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNhbWVyYXR3byUyMGdpcmxzJTIwc2hvcGluZyUyMHJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
            alt="Our Story"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map((item, i) => (
          <div
            key={i}
            className={`text-center py-8 rounded-xl shadow-md transition ${
              item.highlight ? "bg-red-500 text-white" : "bg-gray-100"
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">{item.number}</h3>
            <p className="text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="text-center mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <div
              key={i}
              className="flex flex-col items-center border rounded-xl p-6 hover:shadow-lg transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="rounded-lg mb-4 w-56 h-56 object-cover"
              />
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {features.map((item, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl hover:shadow-lg transition"
          >
            {item.icon}
            <h5 className="font-semibold text-lg mb-2 mt-4">{item.title}</h5>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
