
export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="text-sm text-gray-500 mb-12 max-w-6xl mx-auto w-full">
        <span className="text-gray-600">Home</span> /{" "}
        <span className="text-gray-400">Contact</span>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-md p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Call To Us</h3>
            <p className="text-sm text-gray-500 mb-2">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-sm font-medium">Phone: +8801611112222</p>
          </div>

          <div className="border border-gray-200 rounded-md p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Write To Us</h3>
            <p className="text-sm text-gray-500 mb-2">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm font-medium">
              Email: Nezukochan@gmail.com
            </p>
            <p className="text-sm font-medium">
              Email: fantastic4+2@gmail.com
              </p>
          </div>
        </div>
        <form className="border border-gray-200 rounded-md p-8 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-red-500"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-red-500"
            />
            <input
              type="tel"
              placeholder="Your Phone *"
              className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-red-500"
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-red-500"
          ></textarea>

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md text-sm font-medium transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
