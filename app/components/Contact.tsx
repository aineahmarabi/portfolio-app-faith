'use client'
import { useState } from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (_error) {
      alert('Error sending message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen bg-black flex items-center">
      <div className="w-full px-4 md:px-16 py-10 md:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="text-red-600">Contact</span>
            <span className="text-white"> Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <p className="text-gray-300 mb-4">
                  Feel free to reach out to me for any inquiries about Zoho solutions and implementations.
                </p>
                <div className="space-y-3">
                  <p className="text-gray-400">
                    <span className="text-red-600">Email:</span>{' '}
                    <a href="mailto:kajujufaith55@gmail.com" className="hover:text-red-600 transition-colors">
                      kajujufaith55@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-400">
                    <span className="text-red-600">Phone:</span>{' '}
                    <a href="tel:+254115409504" className="hover:text-red-600 transition-colors">
                      +254 115 409 504
                    </a>
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6">
                <a 
                  href="https://www.instagram.com/fai_kajuju/profilecard/?igsh=cnNoenNnNXJjOHhy" 
                  className="text-gray-400 hover:text-[#E4405F] transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={28} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/faith-kajuju-3430a5201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  className="text-gray-400 hover:text-[#0A66C2] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>

              <a 
                href="/FaithKajuju-CV.pdf" 
                download
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Download CV
              </a>
            </div>

            {/* Right Column - Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 text-white focus:border-red-600/50 focus:outline-none transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 text-white focus:border-red-600/50 focus:outline-none transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 text-white focus:border-red-600/50 focus:outline-none transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white px-6 py-4 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}