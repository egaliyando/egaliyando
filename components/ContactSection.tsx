import { MapPin, Phone, Mail, Linkedin, Instagram } from 'lucide-react'

export default function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      title: 'Tangerang',
      details: ['Nerogtog, Pinang', 'Kota Tangerang, Banten', 'Indonesia'],
      href: null,
    },
    {
      icon: Phone,
      label: 'Phone (WhatsApp)',
      title: '+6285382925115',
      details: [],
      href: 'https://wa.me/6285382925115',
    },
    {
      icon: Mail,
      label: 'Mail',
      title: 'ega.lyd18@gmail.com',
      details: [],
      href: 'mailto:ega.lyd18@gmail.com',
    },
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ega-liyando-b82b85152/',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/ega.liyando?igsh=ZmpuZHRsOG9qMm9w&utm_source=qr',
    },
  ]

  // Add TikTok as a custom SVG since lucide doesn't have it
  const tiktokHref = 'https://www.tiktok.com/@ega.liyando?is_from_webapp=1&sender_device=pc'

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 transition-colors"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16">
            Get in touch
          </h2>

          {/* Contact Grid - Vertical on Mobile, Horizontal on Desktop */}
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-8">
            {/* Address */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full border-2 border-gray-300 dark:border-gray-700">
                  <MapPin className="text-gray-700 dark:text-gray-300" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {contactInfo[0].label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">
                  {contactInfo[0].title}
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {contactInfo[0].details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full border-2 border-gray-300 dark:border-gray-700">
                  <Phone className="text-gray-700 dark:text-gray-300" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {contactInfo[1].label}
                </h3>
                <a
                  href={contactInfo[1].href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 underline dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 font-medium transition-colors"
                >
                  {contactInfo[1].title}
                </a>
              </div>
            </div>

            {/* Mail */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full border-2 border-gray-300 dark:border-gray-700">
                  <Mail className="text-gray-700 dark:text-gray-300" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {contactInfo[2].label}
                </h3>
                <a
                  href={contactInfo[2].href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 underline dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 font-medium transition-colors break-all"
                >
                  {contactInfo[2].title}
                </a>
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex gap-6 md:col-span-2 lg:col-span-1">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full border-2 border-gray-300 dark:border-gray-700">
                  <svg
                    className="text-gray-700 dark:text-gray-300"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 10l-3.5 10M10 10l3.5 10M6 4h12l-1 3H7l-1-3z"></path>
                    <circle cx="12" cy="7" r="1"></circle>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Follow me 
                </h3>
                <div className="flex gap-4 flex-wrap">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:border-orange-500 transition-colors text-gray-700 dark:text-gray-300"
                        aria-label={social.name}
                      >
                        <Icon size={18} />
                      </a>
                    )
                  })}
                  {/* TikTok */}
                  <a
                    href={tiktokHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:border-orange-500 transition-colors text-gray-700 dark:text-gray-300"
                    aria-label="TikTok"
                  >
                    <svg
                      height="18"
                      width="18"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>tiktok</title>
                        <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
