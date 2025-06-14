export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t px-4 md:ml-17 border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 mt-2">Building Things, That Matters. </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
            <div className="text-gray-400 mb-2 hover:text-[#FF014F] cursor-pointer transition-colors flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              ankit.common.acc@gmail.com
            </div>
            <div className="text-gray-400 hover:text-[#FF014F] cursor-pointer transition-colors flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91 7830330681
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto mb-12 p-6 bg-black rounded-lg border border-[#FF014F]/30">
          <h3 className="text-xl font-bold mb-6 text-center">Get In Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF014F]/50 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF014F]/50 focus:border-transparent"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF014F]/50 focus:border-transparent"
            ></textarea>
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-[#FF014F]/50 to-[#FF014F]/90 text-black font-bold rounded-lg hover:bg-[#FF014F]/90 transition-colors">
            Send Message
          </button>
        </div>

      </div>
    </footer>
  )
}
