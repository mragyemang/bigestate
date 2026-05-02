import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogPage() {
  const posts = [
    {
      title: "The Ultimate Guide to Buying Your First Luxury Home",
      excerpt: "Entering the luxury real estate market for the first time? Here are the critical factors you need to consider before making your purchase.",
      date: "May 12, 2026",
      author: "James Thornton",
      category: "Buying Guide",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "5 Interior Design Trends Dominating 2026",
      excerpt: "From deep earthy tones to sustainable materials, explore the latest interior design trends that are reshaping modern luxury living.",
      date: "May 8, 2026",
      author: "Sarah Jenkins",
      category: "Interior Design",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Understanding Property Valuations in Prime Locations",
      excerpt: "Why do some areas appreciate faster than others? A deep dive into the analytics of premium neighborhood property values.",
      date: "April 30, 2026",
      author: "Michael Chen",
      category: "Market Insights",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-24 object-cover relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Real Estate Insights</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Expert analysis, market trends, and practical guides for navigating the luxury real estate landscape.
          </p>
        </div>
        {/* Solid Accent blocks */}
        <div className="absolute -bottom-16 right-10 w-64 h-64 bg-emerald-600 opacity-20 hidden md:block"></div>
        <div className="absolute top-10 right-1/4 w-32 h-32 bg-slate-800 hidden md:block"></div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <article key={idx} className="flex flex-col border border-slate-100 hover:border-emerald-500 transition-colors duration-300 bg-white shadow-sm hover:shadow-lg">
              <div className="h-64 overflow-hidden bg-slate-100 relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center text-sm text-slate-500 gap-4 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">{post.title}</h3>
                <p className="text-slate-600 mb-8 flex-1">{post.excerpt}</p>
                <Link to="#" className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700 mt-auto group">
                  Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Solid elegant newsletter block */}
        <div className="mt-24 bg-emerald-900 mx-auto max-w-5xl">
          <div className="p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-white">
              <h3 className="text-3xl font-bold mb-4">Stay Informed</h3>
              <p className="text-emerald-100">Subscribe to our newsletter for exclusive off-market listings and premium market analysis.</p>
            </div>
            <div className="flex-1 w-full relative">
              <input type="email" placeholder="Enter your email address" className="w-full bg-white text-slate-900 px-6 py-4 outline-none focus:ring-4 ring-emerald-500/50 rounded-none shadow-inner" />
              <button className="absolute right-2 top-2 bottom-2 bg-slate-900 hover:bg-slate-800 text-white px-6 font-bold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
