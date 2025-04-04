import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Phone, Mail, CalendarDays, Camera, Heart, Feather, Users, Hotel } from 'lucide-react'; // Example icons, you might need to install lucide-react

export default function Home() {
  return (
    <div className="relative min-h-screen font-['Cormorant_Garamond',serif] text-amber-950">
      {/* Background image and overlays */}
      <div className="fixed inset-0 -z-10">
        {/* Main background image */}
        <Image
          src="/images/western-dress-photo.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover object-top"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/90 via-amber-50/90 to-rose-100/90"></div>
        {/* Optional texture overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] bg-repeat opacity-20"></div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 sm:px-6 py-16 max-w-5xl relative">

        {/* Header */}
        <header className="text-center mb-16 relative pt-16 pb-12">
          {/* Decorative corner flourishes */}
          <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-amber-700/30 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-amber-700/30 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-amber-700/30 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-amber-700/30 rounded-br-lg"></div>

          {/* Names with enhanced styling and animation */}
          <div className="space-y-6 relative z-10">
            <h1 className="font-['Aref_Ruqaa',serif] text-5xl md:text-5xl text-red-800 tracking-wider">
              <span className="block hover:scale-105 transition-transform duration-300">Siddharth</span>
              <span className="inline-block mx-4 text-4xl md:text-6xl text-amber-700">&</span>
              <span className="block hover:scale-105 transition-transform duration-300">Pooja</span>
            </h1>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-700"></div>
              <Image
                src="/images/small-flower.png"
                alt=""
                width={80}
                height={80}
                className="opacity-70"
              />
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-700"></div>
            </div>

            {/* Invitation text with enhanced typography */}
            <p className="mt-8 text-2xl md:text-3xl italic text-amber-800 font-light tracking-wide">
              Request the honor of your presence
              <span className="block mt-2 text-xl md:text-2xl text-amber-700">
                as they begin their journey of forever
              </span>
            </p>
          </div>
        </header>

        {/* Ornate divider */}
        {/* Note: Replaced divider with a generic public domain ornament */}
        <div className="flex justify-center my-12">
          <Image
            src="/images/floral-divider.png"
            alt="Decorative divider"
            width={250}
            height={40}
            className="opacity-80"
          />
        </div>

        {/* Main event details */}
        <section id="wedding-details" className="bg-gradient-to-br from-white/80 to-rose-50/70 backdrop-blur-md border border-amber-200 rounded-xl p-8 md:p-10 mb-16 shadow-lg text-center relative overflow-visible">
          {/* Peeking Cat */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 z-10 transform-gpu hover:scale-110 transition-transform duration-300">
            <Image
              src="/images/cute-cat-peeking.png"
              alt="Curious cat peeking"
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </div>

          <h2 className="font-['Aref_Ruqaa',serif] text-3xl md:text-4xl mb-8 text-red-700">The Wedding Day</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3 border-r-0 md:border-r md:border-amber-200 md:pr-8">
               <div className="flex justify-center items-center gap-2 text-xl font-bold text-amber-900">
                 <CalendarDays size={20} className="text-red-700" />
                 <h3>Date & Time</h3>
               </div>
              <p className="text-2xl font-['Aref_Ruqaa',serif] text-red-800">Saturday, June 7, 2025</p>
               <div className="flex justify-center items-center gap-1 text-amber-800">
                 <Clock size={16} />
                 <span>Auspicious Time: 09:00 AM</span>
               </div>
            </div>

            <div className="space-y-3">
               <div className="flex justify-center items-center gap-2 text-xl font-bold text-amber-900">
                 <MapPin size={20} className="text-red-700" />
                 <h3>Venue</h3>
               </div>
              <p className="text-lg font-semibold">Aashirvaad Resort</p>
              <address className="text-base text-amber-800 not-italic">
                Kanha Manglik Road<br/>
                Behind Krashi Upaj Mandi, Shamgarh, MP
              </address>
               {/* Optional: Add a map link */}
               {/* <a href="#" className="inline-block mt-2 text-sm text-red-700 underline hover:text-red-900 transition-colors">View Map</a> */}
            </div>
          </div>
        </section>

        {/* Events timeline */}
        <section id="events" className="mb-16 px-4">
          <h2 className="font-['Aref_Ruqaa',serif] text-3xl md:text-4xl mb-10 text-red-700 text-center">Schedule of Events</h2>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line - Visible on both mobile and desktop */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-200 via-amber-300 to-amber-200 transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            {[
              { icon: "https://api.iconify.design/mdi:hand-heart.svg", alt: "Mehendi", title: "Mehendi Ceremony", date: "June 4, 2025", time: "02:00 PM - 08:00 PM", desc: "An evening of beautiful henna, music, and celebration." },
              { icon: "https://api.iconify.design/mdi:hands-pray.svg", alt: "Mataji Poojan", title: "Mataji Poojan", date: "June 5, 2025", time: "09:00 AM - 11:00 AM", desc: "Seeking blessings from the family deity." },
              { icon: "https://api.iconify.design/material-symbols:celebration.svg", alt: "Procession", title: "Procession", date: "June 5, 2025", time: "08:00 PM - 10:30 PM", desc: "A grand procession with music, dance, and joy." },
              { icon: "https://api.iconify.design/mdi:flower-tulip.svg", alt: "Haldi", title: "Haldi Ceremony", date: "June 6, 2025", time: "02:00 PM - 05:00 PM", desc: "A joyful ceremony with turmeric paste, flowers, and fun." },
              { icon: "https://api.iconify.design/mdi:music-note.svg", alt: "Sangeet", title: "Sangeet & DJ Night", date: "June 6, 2025", time: "08:00 PM - 10:30 PM", desc: "A night of music, dance performances, and celebration." },
              { icon: "https://api.iconify.design/mdi:horse-human.svg", alt: "Baraat", title: "Baraat", date: "June 7, 2025", time: "10:30 AM - 12:30 PM", desc: "The groom's arrival with music and dancing." },
              { icon: "https://api.iconify.design/mdi:gift.svg", alt: "Mayra", title: "Mayra / Mamera", date: "June 7, 2025", time: "02:00 PM - 03:00 PM", desc: "Ceremony for the maternal families." },
              { icon: "https://api.iconify.design/mdi:food-fork-drink.svg", alt: "Reception", title: "Reception", date: "June 7, 2025", time: "7:00 PM Onwards", desc: "Celebrating the newlyweds with dinner and entertainment." },
            ].map((event, index) => (
              <div key={index} className="relative mb-12">
                {/* Mobile Design */}
                <div className="md:hidden flex">
                  {/* Icon Column */}
                  <div className="w-16 flex-shrink-0 relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center border-2 border-amber-300 shadow-md z-10 relative">
                      <Image src={event.icon} alt={event.alt} width={30} height={30} className="opacity-80" />
                    </div>
                    {/* Connector Line */}
                    <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-amber-200"></div>
                  </div>

                  {/* Content Column */}
                  <div className="flex-grow pl-4">
                    <div className="bg-white/80 backdrop-blur-sm border border-amber-100 rounded-xl p-4 shadow-lg">
                      <h3 className="text-lg font-bold text-red-800 mb-1">{event.title}</h3>
                      <p className="text-sm font-semibold text-amber-700">{event.date}</p>
                      <p className="text-sm text-amber-600 mb-2">{event.time}</p>
                      <p className="text-sm text-amber-900">{event.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Desktop Design */}
                <div className={`hidden md:flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <div className="bg-white/80 backdrop-blur-sm border border-amber-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <h3 className="text-xl font-bold text-red-800 mb-2">{event.title}</h3>
                      <div className="space-y-1 mb-3">
                        <p className="text-sm font-semibold text-amber-700">{event.date}</p>
                        <p className="text-sm text-amber-600">{event.time}</p>
                      </div>
                      <p className="text-amber-900">{event.desc}</p>
                    </div>
                  </div>

                  <div className="w-2/12 flex justify-center items-center relative">
                    <div className="z-10 w-20 h-20 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center border-2 border-amber-300 shadow-lg transform transition-transform duration-300 hover:scale-110">
                      <Image src={event.icon} alt={event.alt} width={40} height={40} className="opacity-80" />
                    </div>
                    {/* Horizontal connector lines */}
                    <div className={`absolute w-1/2 h-0.5 bg-amber-300 ${index % 2 === 0 ? 'right-0' : 'left-0'}`}></div>
                  </div>

                  <div className="w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ornate divider */}
        {/* Note: Replaced divider with a generic public domain ornament */}
        <div className="flex justify-center my-12">
           <Image
             src="images/floral-divider.png"
             alt="Decorative divider"
             width={250}
             height={40}
             className="opacity-80"
           />
        </div>

        {/* Our Story section */}
        <section id="story" className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-xl p-8 md:p-10 mb-16 shadow-lg relative overflow-hidden">
           <div className="absolute bottom-2 left-2 text-red-700 opacity-50 transform rotate-[-15deg]"><Feather size={24} /></div>
          <h2 className="font-['Aref_Ruqaa',serif] text-3xl md:text-4xl mb-8 text-red-700 text-center">Our Story</h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-2/5">
              <div className="rounded-lg overflow-hidden border-4 border-amber-100 shadow-md aspect-[4/5] relative group">
                 {/* Note: Replaced couple photo with a placeholder from Pexels */}
                <Image src="/images/western-dress-photo.jpeg" alt="Siddharth and Pooja Placeholder" layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-lg text-amber-900 space-y-5 leading-relaxed">
              <p>
                Our journey began amidst the bustling halls of college, where Siddharth navigated the complexities of engineering and Pooja shaped worlds through architecture.
                What started with shared lunch breaks and easy laughter soon blossomed into something deeper, a connection woven with shared dreams and mutual admiration.
              </p>
              <p>
                Five years have flown by, filled with growth, learning, and countless cherished memories. Now, standing on the threshold of a new chapter, we&apos;re filled with excitement and gratitude.
              </p>
              <p className="font-semibold text-red-800 italic">
                We can&apos;t wait to celebrate this milestone with you, our beloved family and friends, who have supported us along the way.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery section */}
        <section id="gallery" className="mb-16">
          <h2 className="font-['Aref_Ruqaa',serif] text-3xl md:text-4xl mb-8 text-red-700 text-center">Moments We Cherish</h2>

           {/* Note: Replaced gallery images with placeholders from Pexels */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
                "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
                "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
                "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
                "https://images.pexels.com/photos/13129951/pexels-photo-13129951.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
                "https://images.pexels.com/photos/3014815/pexels-photo-3014815.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
                "https://images.pexels.com/photos/1488319/pexels-photo-1488319.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
                "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
                "https://images.pexels.com/photos/916344/pexels-photo-916344.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
            ].map((src, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg border-2 border-amber-100/50 shadow-sm group relative cursor-pointer hover:shadow-xl transition-all duration-300">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1} placeholder`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <Camera size={32} className="text-white/80" />
                 </div>
              </div>
            ))}
          </div>
           {/* Note: Add a lightbox library for a better gallery experience */}
           <p className="text-center mt-6 text-sm text-amber-700 italic">Click to view (Functionality requires a gallery library)</p>
        </section>

        {/* Accommodation info */}
        <section id="accommodation" className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-xl p-8 md:p-10 mb-16 shadow-lg">
          <h2 className="font-['Aref_Ruqaa',serif] text-3xl md:text-4xl mb-8 text-red-700 text-center">Guest Accommodation</h2>

          <p className="text-lg text-center text-amber-900 mb-8">
            For our cherished guests travelling from afar, we&apos;ve arranged special rates at nearby hotels. Please mention our wedding when booking.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Sanghvi Palace", distance: "0.1 km from venue", phone: "+91 11111-11111", tel: "+911111111111" },
              { name: "Tanvi Palace", distance: "2 km from venue", phone: "+91 11111-11111", tel: "+911111111111" },
            ].map((hotel) => (
            <div key={hotel.name} className="border border-amber-100 rounded-lg p-5 shadow-sm bg-white/50 hover:bg-white/80 transition-colors duration-300 flex flex-col items-center text-center">
               <Hotel size={24} className="text-red-700 mb-3" />
              <h3 className="text-xl font-bold text-amber-950">{hotel.name}</h3>
              <p className="text-sm text-amber-700 mb-3">{hotel.distance}</p>
               <div className="flex items-center gap-2">
                 <Phone size={16} className="text-red-700" />
                 <a href={`tel:${hotel.tel}`} className="text-red-700 underline hover:text-red-900 transition-colors">{hotel.phone}</a>
               </div>
            </div>
            ))}
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-xl p-8 md:p-10 mb-16 shadow-lg">
          <h2 className="font-['Aref_Ruqaa',serif] text-3xl md:text-4xl mb-8 text-red-700 text-center">With Blessings From</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center border border-amber-100 rounded-lg p-6 shadow-sm bg-white/50">
               <Users size={24} className="text-red-700 mb-3 mx-auto" />
              <h3 className="text-xl font-bold mb-3 text-amber-950">Bride&apos;s Family</h3>
              <p className="text-lg">Mr. & Mrs. Gupta</p>
              <div className="mt-3 space-y-1">
                <p className="flex items-center justify-center gap-2">
                  <Phone size={16} className="text-red-700"/>
                  <a href="tel:+911111111111" className="text-red-700 underline hover:text-red-900 transition-colors">+91 11111-11111</a>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Mail size={16} className="text-red-700"/>
                  <a href="mailto:wedding@gupta.com" className="text-red-700 underline hover:text-red-900 transition-colors">wedding@gupta.com</a>
                </p>
              </div>
            </div>

            <div className="text-center border border-amber-100 rounded-lg p-6 shadow-sm bg-white/50">
               <Users size={24} className="text-red-700 mb-3 mx-auto" />
              <h3 className="text-xl font-bold mb-3 text-amber-950">Groom&apos;s Family</h3>
              <p className="text-lg">Mr. & Mrs. Dangarh</p>
              <div className="mt-3 space-y-1">
                <p className="flex items-center justify-center gap-2">
                  <Phone size={16} className="text-red-700"/>
                  <a href="tel:+911111111111" className="text-red-700 underline hover:text-red-900 transition-colors">+91 11111-11111</a>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Mail size={16} className="text-red-700"/>
                  <a href="mailto:wedding@dangarh.com" className="text-red-700 underline hover:text-red-900 transition-colors">wedding@dangarh.com</a>
                </p>
              </div>
            </div>
          </div>
           <p className="text-center mt-8 text-amber-800">For any queries, please feel free to reach out.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-amber-800 to-amber-700 text-amber-50 py-8 text-center relative mt-16">
        {/* Note: Replaced divider with a generic public domain ornament */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 rounded-full overflow-hidden">
           <Image src="/images/cute-animal-couple-2.png" alt="" layout="fill" objectFit="contain" className="rounded-full" aria-hidden="true" />
        </div>
        <p className="mb-3 text-lg font-['Aref_Ruqaa',serif] tracking-wider">#PoojaWedsSiddharth</p>
        <p className="text-sm opacity-80">We look forward to celebrating with you!</p>
      </footer>

      {/* Sticky Bottom Navigation with Icons */}
      <nav className="sticky bottom-0 z-50 bg-white/80 backdrop-blur-md shadow-inner py-3">
        <div className="container mx-auto px-6 flex justify-around items-center text-amber-800">
          <Link href="#events" className="p-2 hover:text-red-700 transition-colors rounded-full hover:bg-amber-100/50" title="Events" aria-label="Go to Events section">
            <CalendarDays size={24} />
          </Link>
          <Link href="#story" className="p-2 hover:text-red-700 transition-colors rounded-full hover:bg-amber-100/50" title="Our Story" aria-label="Go to Our Story section">
            <Heart size={24} />
          </Link>
          <Link href="#gallery" className="p-2 hover:text-red-700 transition-colors rounded-full hover:bg-amber-100/50" title="Gallery" aria-label="Go to Gallery section">
            <Camera size={24} />
          </Link>
          <Link href="#contact" className="p-2 hover:text-red-700 transition-colors rounded-full hover:bg-amber-100/50" title="Contact" aria-label="Go to Contact section">
            <Users size={24} />
          </Link>
        </div>
      </nav>
    </div>
  );
}