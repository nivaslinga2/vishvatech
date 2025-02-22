import { Mail, MapPin, Phone, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const map = "/map.png";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-blue-400">
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Contact Us Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            For clarifications about the event, feel free to reach out to us!
          </p>
          <p className="text-gray-600">
            You can contact us at (your email/phone number) or visit our website (your website link).
            We're happy to assist you and ensure you have a great experience!
          </p>
        </div>

        {/* Get In Touch Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Get in touch with us for any event-related queries. We look forward to assisting you!
          </p>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-pink-200 p-2 rounded-lg">
                <MapPin className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">Vishnu Society</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-pink-200 p-2 rounded-lg">
                <Phone className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold">Phone Number</h3>
                <p className="text-gray-600">+91 8712606487</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-pink-200 p-2 rounded-lg">
                <Mail className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold">E-Mail</h3>
                <p className="text-gray-600">ceo@vishva.co 
                  incubationmanager@vishva.co</p>
              </div>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex gap-4">
          <a
  href="https://www.facebook.com/profile.php?id=100090003517437&mibextid=kFxxJD"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-pink-200 p-2 rounded-lg hover:bg-pink-300 transition-colors"
>
  <Facebook className="w-6 h-6 text-pink-600" />
</a>
<a
  href="https://x.com/VishnuTBI"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-pink-200 p-2 rounded-lg hover:bg-pink-300 transition-colors"
>
  <Twitter className="w-6 h-6 text-pink-600" />
</a>
            <a
  href="https://youtube.com/@vishnufoundationtbi?si=U25XJc7r1EM0wB6b"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-pink-200 p-2 rounded-lg hover:bg-pink-300 transition-colors"
>
  <Youtube className="w-6 h-6 text-pink-600" />
</a>
            <a
  href="https://www.instagram.com/vishnufoundation.tbi?igsh=b3J1d3RjYWxhbHB6"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-pink-200 p-2 rounded-lg hover:bg-pink-300 transition-colors"
>
  <Instagram className="w-6 h-6 text-pink-600" />
</a>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-lg overflow-hidden">
          <iframe
            src={map}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>

      
      </div>
    </div>
  );
}

export default Contact;