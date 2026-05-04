import Link from "next/link";
import products from "@/data/products.json";
import "animate.css"; 

export default function Home() {
  const popularProducts = products.slice(0, 3);

  return (
    <div className="space-y-16 pb-10">
      
      {/* 1. Hero Section (DaisyUI based) */}
      <div className="hero bg-amber-100 min-h-[50vh] rounded-3xl shadow-md border border-amber-200">
        <div className="hero-content text-center animate__animated animate__fadeInUp">
          <div className="max-w-2xl py-10">
            <div className="badge badge-warning badge-lg mb-4 font-bold p-4">☀️ Summer Collection 2026</div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-orange-600 mb-6 leading-tight">
              Summer Essentials <br /> Up To 50% Off
            </h1>
            <p className="py-6 text-lg text-gray-700 max-w-xl mx-auto">
              Beat the heat with our premium collection of sunglasses, skincare, and beach accessories. Grab your favorites before they sell out!
            </p>
            <div className="flex gap-4 justify-center mt-4">
              <button className="btn btn-warning btn-lg shadow-sm hover:scale-105 transition-transform">Shop Now</button>
              <button className="btn btn-outline btn-warning btn-lg">Explore Deals</button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Popular Products Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10 text-orange-500">🔥 Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularProducts.map((product) => (
            <div key={product.id} className="card bg-base-100 shadow-xl border border-base-200 hover:scale-105 transition-transform duration-300">
              <figure className="px-4 pt-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="rounded-xl h-56 w-full object-cover" 
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.name}</h2>
                <div className="flex justify-between w-full mt-2">
                  <p className="text-gray-500 font-medium">⭐ {product.rating}</p>
                  <p className="text-xl font-bold text-orange-500">${product.price}</p>
                </div>
                <div className="card-actions mt-4 w-full">
                  <Link href={`/product/${product.id}`} className="btn btn-outline btn-warning w-full">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Extra Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
          <h3 className="text-2xl font-bold text-orange-600 mb-4">💧 Summer Care Tips</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Drink at least 3 liters of water daily.</li>
            <li>Always apply SPF 50+ sunscreen before going out.</li>
            <li>Wear light-colored, breathable cotton clothes.</li>
            <li>Use sunglasses to protect your eyes from UV rays.</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">🛍️ Top Brands</h3>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="badge badge-lg badge-outline badge-info p-4 font-bold">SunShade</div>
            <div className="badge badge-lg badge-outline badge-info p-4 font-bold">GlowCare</div>
            <div className="badge badge-lg badge-outline badge-info p-4 font-bold">SummerVibe</div>
            <div className="badge badge-lg badge-outline badge-info p-4 font-bold">OceanGear</div>
          </div>
        </div>
      </section>
    </div>
  );
}