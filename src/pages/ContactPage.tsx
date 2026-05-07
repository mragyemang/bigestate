import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-600">
            Whether you're looking to buy, sell, or simply explore the market, our expert agents are ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white shadow-xl">
          
          {/* Contact Info Panel*/}
          <div className="lg:col-span-2 bg-emerald-800 text-white p-10 md:p-16 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-emerald-50">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-emerald-400 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Office Address</h4>
                    <p className="text-emerald-100 leading-relaxed">
                      Nkwabeng North,<br />
                      Sunyani<br />
                      Bono Region
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-emerald-400 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                    <p className="text-emerald-100 mb-1">+233 208 012 645</p>
                    <p className="text-emerald-100">+233 593 457 520 (Sales)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-emerald-400 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Address</h4>
                    <p className="text-emerald-100 mb-1">info@bigestate.com</p>
                    <p className="text-emerald-100">agents@bigestate.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-emerald-400 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                    <p className="text-emerald-100 mb-1">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-emerald-100">Sat - Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Panel*/}
          <div className="lg:col-span-3 p-10 md:p-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-bold text-slate-700">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-bold text-slate-700">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-bold text-slate-700">How can we help?</label>
                <select id="service" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors text-slate-700">
                  <option>I want to buy a property</option>
                  <option>I want to sell my property</option>
                  <option>I have a general inquiry</option>
                  <option>I need property valuation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg py-4 transition-colors duration-200">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
