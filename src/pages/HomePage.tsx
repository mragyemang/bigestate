import { ArrowRight, Star, Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 z-10">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Find a place you <br />
              <span className="text-emerald-500">will call home.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 max-w-xl leading-relaxed">
              With us you will not just find accommodation, but a place where your new life begins, full of cosiness and possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/gallery" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-none bg-emerald-600 hover:bg-emerald-500 text-white transition-colors duration-200">
                View Properties <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-none bg-white text-slate-900 hover:bg-slate-100 transition-colors duration-200">
                Contact Agent
              </Link>
            </div>
          </div>
          
          <div className="flex-1 relative w-full mt-12 lg:mt-0">
            <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden bg-slate-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Luxury Modern Home Exterior" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-emerald-600 -z-10 hidden md:block"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-slate-800 -z-10 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="bg-emerald-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">5+</h3>
              <p className="text-emerald-200 font-medium">Years Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">4.9</h3>
              <p className="text-emerald-200 font-medium">Customer Rating</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">200+</h3>
              <p className="text-emerald-200 font-medium">Properties Sold</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">100%</h3>
              <p className="text-emerald-200 font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Listings</h2>
            <p className="text-slate-600 text-lg">Explore our handpicked selection of premium real estate.</p>
          </div>
          <Link to="/gallery" className="hidden md:inline-flex text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
            See all listings &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { price: "$2,400,000", title: "Modern Glass Villa", loc: "Beverly Hills, CA", beds: 4, baths: 5, img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" },
            { price: "$1,850,000", title: "Minimalist Townhouse", loc: "Brooklyn, NY", beds: 3, baths: 3, img: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&w=800&q=80" },
            { price: "$3,200,000", title: "Luxury Estate with Pool", loc: "Miami, FL", beds: 5, baths: 6, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 text-slate-900 font-bold">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <div className="flex items-center text-slate-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" /> {item.loc}
                </div>
                <div className="flex gap-4 border-t border-slate-100 pt-4">
                  <span className="text-slate-600 text-sm font-medium">{item.beds} Beds</span>
                  <span className="text-slate-600 text-sm font-medium">{item.baths} Baths</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16">Why Choose Big Estate</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 flex flex-col items-center shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-emerald-100 p-4 rounded-none mb-6 text-emerald-600">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Premium Quality</h3>
              <p className="text-slate-600">Every property we list goes through a rigorous quality check to ensure it meets our high standards.</p>
            </div>
            <div className="bg-white p-10 flex flex-col items-center shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-emerald-100 p-4 rounded-none mb-6 text-emerald-600">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Secure Transactions</h3>
              <p className="text-slate-600">Our legal team ensures that paperwork and ownership transfers are safely and efficiently handled.</p>
            </div>
            <div className="bg-slate-900 p-10 flex flex-col items-center shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-emerald-600 p-4 rounded-none mb-6 text-white">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Prime Locations</h3>
              <p className="text-slate-300">We carefully curate properties situated in the most desirable areas with excellent amenities directly nearby.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
