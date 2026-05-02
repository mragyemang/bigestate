import { Coffee, Dumbbell, ShieldCheck, TreePine, Wifi, Car, Waves, Utensils } from "lucide-react";

export default function Amenities() {
  const amenitiesList = [
    { name: "Resort-Style Pools", desc: "Temperature controlled swimming pools with lounge areas and private cabanas.", icon: Waves },
    { name: "State-of-the-Art Gym", desc: "Fully equipped fitness centers with the latest machinery and free weights.", icon: Dumbbell },
    { name: "24/7 Premium Security", desc: "Round-the-clock security personnel and advanced surveillance systems.", icon: ShieldCheck },
    { name: "Lush Green Parks", desc: "Beautifully landscaped gardens, walking trails, and open green spaces.", icon: TreePine },
    { name: "High-Speed Internet", desc: "Fiber-optic connectivity built into the foundation of every community.", icon: Wifi },
    { name: "Secure Parking", desc: "Spacious underground and covered parking for residents and guests.", icon: Car },
    { name: "Cafes & Dining", desc: "On-site premium dining options and boutique coffee shops.", icon: Coffee },
    { name: "Outdoor BBQ Areas", desc: "Dedicated spaces for grilling and outdoor social gatherings.", icon: Utensils },
  ];

  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6">World-Class Amenities</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Experience a lifestyle of unparalleled luxury with amenities designed to cater to your every need and elevate your daily living.
        </p>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[500px] bg-slate-900 mb-20 relative">
        <img 
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Pool Amenity" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-8 md:p-12 max-w-lg text-center shadow-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">More Than Just a Home</h2>
            <p className="text-slate-600">Our estates provide an entire ecosystem of leisure, wellness, and convenience right at your doorstep.</p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenitiesList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-slate-50 p-8 hover:bg-emerald-600 hover:text-white transition-colors duration-300 group">
                <div className="w-14 h-14 bg-white text-emerald-600 group-hover:text-emerald-600 flex items-center justify-center mb-6 shadow-sm">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white text-slate-900">{item.name}</h3>
                <p className="text-slate-600 group-hover:text-emerald-50 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
