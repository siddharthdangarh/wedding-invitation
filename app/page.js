import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen font-['Cormorant_Garamond',serif] text-amber-900">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-rose-50 to-amber-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/paisley-pattern.svg')] bg-repeat opacity-10 animate-float"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/mandala.svg')] bg-no-repeat bg-[length:300px_300px] bg-right-top opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[url('/lotus.svg')] bg-no-repeat bg-[length:250px_250px] bg-left-bottom opacity-15 animate-pulse-slow"></div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header with couple names */}
        <header className="text-center mb-10 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-12 bg-[url('/floral-divider.svg')] bg-contain bg-no-repeat opacity-70"></div>
          <h1 className="font-['Aref_Ruqaa',serif] text-4xl md:text-6xl text-red-800 mt-10">Siddharth & Pooja</h1>
          <p className="mt-4 text-xl md:text-2xl italic">Request the honor of your presence at their wedding</p>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-12 bg-[url('/floral-divider.svg')] bg-contain bg-no-repeat opacity-70 rotate-180"></div>
        </header>

        {/* Ornate divider */}
        <div className="flex justify-center mb-12">
          <Image 
            src="/ornate-divider.svg" 
            alt="Decorative divider" 
            width={200} 
            height={30}
            className="opacity-80"
          />
        </div>

        {/* Main event details */}
        <section className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-8 mb-12 shadow-lg text-center">
          <h2 className="font-['Aref_Ruqaa',serif] text-3xl md:text-4xl mb-6 text-red-700">Wedding Celebration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Wedding Date</h3>
              <p className="text-2xl font-['Aref_Ruqaa',serif]">Saturday, June 7, 2025</p>
              <p>Auspicious Time: 09:00 AM</p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Venue</h3>
              <p className="text-lg">Aashirvaad Resort</p>
              <p>Kanha Manglik Road</p>
              <p>Behind Krashi Upaj Mandi, Shamgarh, MP</p>
            </div>
          </div>
        </section>

        {/* Events timeline */}
        <section className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-8 mb-12 shadow-lg">
          <h2 className="font-['Aref_Ruqaa',serif] text-3xl md:text-4xl mb-8 text-red-700 text-center">Wedding Events</h2>
          
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border-2 border-amber-300">
                <Image src="/mehendi.svg" alt="Mehendi ceremony icon" width={60} height={60} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mehendi Ceremony</h3>
                <p className="text-lg">June 4, 2025 | 02:00 PM - 08:00 PM</p>
                <p className="mt-2">Join us for an evening of beautiful henna applications, music, and celebration.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border-2 border-amber-300">
                <Image src="/mataji_poojan.svg" alt="Mataji Poojan icon" width={60} height={60} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mataji Poojan</h3>
                <p className="text-lg">June 5, 2025 | 09:00 AM - 11:00 AM</p>
                <p className="mt-2">A special ceremony to seek blessings from the family deity.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border-2 border-amber-300">
                <Image src="/procession.svg" alt="Procession ceremony icon" width={60} height={60} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Procession</h3>
                <p className="text-lg">June 5, 2025 | 08:00 PM - 10:30 PM</p>
                <p className="mt-2">A grand procession, with music, dance performances, and celebration of the couple's journey.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border-2 border-amber-300">
                <Image src="/haldi.svg" alt="Haldi ceremony icon" width={60} height={60} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Haldi</h3>
                <p className="text-lg">June 6, 2025 | 02:00 PM - 05:00 PM</p>
                <p className="mt-2">Fun and joyful haldi ceremony, with music, dance performances, and lots of flowers and colors</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border-2 border-amber-300">
                <Image src="/sangeet.svg" alt="Sangeet ceremony icon" width={60} height={60} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sangeet & DJ Night</h3>
                <p className="text-lg">June 6, 2025 | 08:00 PM - 10:30 PM</p>
                <p className="mt-2">A night filled with music, dance performances, and celebration of the couple's journey.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border-2 border-amber-300">
                <Image src="/baraat.svg" alt="Baraat ceremony icon" width={60} height={60} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Baraat</h3>
                <p className="text-lg">June 7, 2025 | 10:30 AM - 12:30 PM</p>
                <p className="mt-2">Groom reaching the venue with DJ on wheels, to take bride home.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border-2 border-amber-300">
                <Image src="/mayra.svg" alt="Mayra ceremony icon" width={60} height={60} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mayra / Mamera</h3>
                <p className="text-lg">June 7, 2025 | 02:00 PM - 03:00 PM</p>
                <p className="mt-2">Ceremony for both maternal families of the bride and groom.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border-2 border-amber-300">
                <Image src="/reception.svg" alt="Reception icon" width={60} height={60} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Reception</h3>
                <p className="text-lg">November 12, 2023 | 7:00 PM - 11:00 PM</p>
                <p className="mt-2">An elegant reception celebrating the newlyweds with dinner and entertainment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story section */}
        <section className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-8 mb-12 shadow-lg">
          <h2 className="font-['Aref_Ruqaa',serif] text-3xl md:text-4xl mb-6 text-red-700 text-center">Our Story</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="rounded-lg overflow-hidden border-4 border-amber-100 shadow-md">
                <Image src="/couple-photo.jpg" alt="Siddharth and Pooja" width={400} height={500} className="w-full h-auto" />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <p className="text-lg mb-4">
                Our paths first crossed during college where Siddharth was studying engineering and Pooja was pursuing architecture. 
                What began as a friendship over shared lunch breaks soon blossomed into a beautiful love story.
              </p>
              <p className="text-lg">
                After 5 years of growing together, learning from each other, and creating wonderful memories, 
                we are excited to begin this new chapter of our lives. We are thrilled to celebrate our union with our beloved family and friends.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery section */}
        <section className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-8 mb-12 shadow-lg">
          <h2 className="font-['Aref_Ruqaa',serif] text-3xl md:text-4xl mb-6 text-red-700 text-center">Gallery</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="aspect-square overflow-hidden rounded-lg border-2 border-amber-100 shadow-sm hover:scale-105 transition-transform">
                <Image 
                  src={`/gallery-${num}.jpg`} 
                  alt={`Couple photo ${num}`} 
                  width={300} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Accommodation info */}
        <section className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-8 mb-12 shadow-lg">
          <h2 className="font-['Aref_Ruqaa',serif] text-3xl md:text-4xl mb-6 text-red-700 text-center">Accommodation</h2>
          
          <div className="space-y-6">
            <p className="text-lg text-center">
              For our out-of-town guests, we have arranged special rates at the following hotels:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-amber-100 rounded-lg p-4 shadow-sm">
                <h3 className="text-xl font-bold">Sanghvi Palace</h3>
                <p>0.1 km from venue</p>
                <p className="mt-2"><a href="tel:+91 1111111111" className="text-red-700 underline">+91 11111-11111</a></p>
              </div>
              
              <div className="border border-amber-100 rounded-lg p-4 shadow-sm">
                <h3 className="text-xl font-bold">Tanvi Palace</h3>
                <p>2 km from venue</p>
                <p className="mt-2"><a href="tel:+91 1111111111" className="text-red-700 underline">+91 11111-11111</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-8 mb-12 shadow-lg">
          <h2 className="font-['Aref_Ruqaa',serif] text-3xl md:text-4xl mb-6 text-red-700 text-center">Contact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Bride's Family</h3>
              <p>Mr. & Mrs. Gupta</p>
              <p><a href="tel:+911111111111" className="text-red-700 underline">+91 11111-11111</a></p>
              <p><a href="mailto:wedding@gupta.com" className="text-red-700 underline">wedding@gupta.com</a></p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Groom's Family</h3>
              <p>Mr. & Mrs. Dangarh</p>
              <p><a href="tel:+911111111111" className="text-red-700 underline">+91 11111-11111</a></p>
              <p><a href="mailto:wedding@dangarh.com" className="text-red-700 underline">wedding@dangarh.com</a></p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-amber-800 text-amber-50 py-6 text-center">
        <p className="mb-2">#PoojaWedsSiddharth</p>
        <p className="text-sm">With blessings from our families</p>
      </footer>
    </div>
  );
}