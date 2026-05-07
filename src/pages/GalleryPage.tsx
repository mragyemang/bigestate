export default function GalleryPage() {
  const images = [
    { url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80", title: "Sunset Villa Exterior" },
    { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80", title: "Modern Open Plan Living" },
    { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", title: "Luxury Pool Deck" },
    { url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80", title: "Glass Architecture Architecture" },
    { url: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&w=800&q=80", title: "Minimalist Townhouse Exterior" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", title: "Miami Estate Driveway" },
    { url: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=800&q=80", title: "Gourmet Kitchen" },
    { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80", title: "Master Bedroom Retreat" },
    { url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80", title: "Sprawling Backyard" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Property Gallery</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Take a visual tour of our most stunning properties. Every space is crafted for maximum comfort and unparalleled aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-slate-900 cursor-pointer h-80">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-75 group-hover:scale-110 transition-all duration-700 ease-in-out"
              />
              
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-slate-900 shadow-[0_-50px_50px_0_rgba(15,23,42,0.9)_inset] opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end">
                <h3 className="text-white text-xl font-bold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
