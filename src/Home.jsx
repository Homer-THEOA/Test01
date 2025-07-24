import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section with Background Image */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img
            src="/images/IMG_20210311_125257_edited.jpg"
            alt="Hero background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Niyati CARE Foundation</h1>
          <p className="text-2xl">Feed the Need Initiative</p>
        </div>
      </section>

      {/* About Section with Image on Side */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">About the Project</h2>
            <p className="text-lg leading-relaxed">
              In 2020, as the COVID-19 pandemic disrupted lives across the globe, the CARE Foundation launched Niyati – Feed the Need. What started as an emergency food support initiative has evolved into a sustained movement against hunger and malnutrition. Our vision is to ensure that no individual sleeps hungry. From providing ration kits during lockdowns to creating long-term food distribution networks, Niyati continues to touch lives across urban and rural communities.
            </p>
          </div>
          <div>
            <img
              src="/images/IMG_20220131_163701.jpg"
              alt="About the Project"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Impact Section with Background */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/IMG_20220331_153854.jpg"
            alt="Impact background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Impact Highlights</h2>
          <p className="text-xl">
            We've already made a huge difference for more than <strong>10,000+ Families</strong> across <strong>3 Locations</strong> with consistent food support and relief.
          </p>
        </div>
      </section>

      {/* How You Can Help Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">How People Can Help</h2>
          <p className="text-lg text-gray-700">[You can edit this part later with your own content]</p>
        </div>
      </section>

      {/* Donation Section with Image */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Support Our Mission</h2>
          <p className="text-lg mb-8 text-gray-700">Your contribution can help us reach more families in need. Join us in our journey to fight hunger and bring hope.</p>
          <div className="flex justify-center">
            <img
              src="/images/IMG_20220331_153808.jpg"
              alt="Donation banner"
              className="w-full max-w-xl h-auto rounded-xl shadow-md object-cover"
            />
          </div>
          <div className="mt-10">
            <button className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition">Donate Now</button>
          </div>
        </div>
      </section>
    </main>
  );
}