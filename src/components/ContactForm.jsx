export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-[#F9FAFB] via-white to-[#e6f4f9]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#0B3B60] mb-4">Let’s Connect</h2>
        <p className="text-gray-600 mb-10">Have a project or question in mind? Reach out to the Swich Tech team below.</p>

        <form className="space-y-6 text-left bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="mt-1 w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              className="mt-1 w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us about your project or inquiry..."
              className="mt-1 w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:outline-none"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#0B3B60] text-white px-8 py-3 rounded-lg hover:bg-[#09314e] transition text-lg font-semibold shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
