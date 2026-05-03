export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[600px] w-full bg-emerald-900">
            <img 
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" 
              alt="Real Estate Agents" 
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
            {/* Solid accent block replacing gradient */}
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-16 h-48 bg-emerald-500 hidden lg:block"></div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-emerald-600 font-bold tracking-widest uppercase">Our Story</h4>
            <h1 className="text-5xl font-extrabold text-slate-900 leading-tight">
              Redefining Luxury Real Estate Since 2021.
            </h1>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                At Big Estate, we believe that finding a home is more than a transaction. It's a life-changing milestone. For over 5 years, we have been connecting visionary buyers with extraordinary properties.
              </p>
              <p>
                Our approach is simple: absolute transparency, unwavering dedication, and an uncompromising standard of quality. We curate spaces that inspire, standing as a testament to exceptional architectural design and prime locations.
              </p>
            </div>
            
            <div className="pt-8 border-t border-slate-200">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">PA</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Prince Agyemang</h4>
                  <p className="text-emerald-600 font-medium">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-slate-900 text-white p-16 mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">The principles that guide our every decision and shape the experiences we deliver to our clients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Integrity", desc: "We operate with total honesty. No hidden fees, no opaque processes. Just clear, straightforward communication." },
              { title: "Excellence", desc: "Good is never enough. We strive for excellence in the properties we list and the service we provide." },
              { title: "Innovation", desc: "We leverage modern technology and data-driven insights to find the absolute perfect match for our clients." }
            ].map((value, idx) => (
              <div key={idx} className="border border-slate-700 p-8 hover:bg-slate-800 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-emerald-500 mb-4">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
