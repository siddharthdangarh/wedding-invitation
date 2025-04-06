"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';

// Icon imports
import { Clock, MapPin, Phone, Mail, CalendarDays, Camera, Heart, Feather, Users, Hotel, Globe, Home } from 'lucide-react';

// Gallery functionality imports
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Porjcet files import
import { fortunes } from './constants/fortunes';
import { translations } from './translations';

export default function HomePage() {

  ///////////// LANGUAGE SWITCHER /////////////
  const [currentLang, setCurrentLang] = useState('en');

  // Function to toggle language
  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'en' ? 'hi' : 'en');
  };

  // Get current translations
  const t = translations[currentLang];

  ///////////// COUNTDOWN /////////////
  // Add new state variables for countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Add useEffect for countdown calculation
  useEffect(() => {
    const weddingDate = new Date('2025-06-07T09:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  //////////// RANDOM FORTUNE /////////////
  // Add new state for fortune cookie
  const [showFortune, setShowFortune] = useState(false);
  const [currentFortune, setCurrentFortune] = useState('');

  // Add function to get random fortune
  const getRandomFortune = () => {
    if (fortunes.length > 0) {
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      setCurrentFortune(fortunes[randomIndex]);
      setShowFortune(true);
      // Auto-hide fortune after longer duration to account for animations
      setTimeout(() => setShowFortune(false), 8000);
    }
  };

  //////////// GALLERY /////////////
  // Add state for lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Gallery images array
  const galleryImages = [
    "/images/couple/udaipur.jpeg",
    "/images/couple/waves.jpeg",
    "/images/couple/udaipur-2.jpeg",
    "/images/couple/holding-hands.jpeg",
    "/images/couple/sagai-candid.jpeg",
    "/images/couple/sangeet-animated.jpeg",
    "/images/couple/haldi-animated.jpeg",
    "/images/couple/holi-animated.jpeg",
  ];

  // Format images for lightbox
  const slides = galleryImages.map((src) => ({
    src: src,
    width: 3840,
    height: 2560,
    alt: "Gallery Image"
  }));

  return (
    <div className="relative min-h-screen font-['Cormorant_Garamond',serif] text-amber-950">
      {/* Background image and overlays */}
      <div className="fixed inset-0 -z-10">
        {/* Main background image */}
        <Image
          src="/images/couple/western-dress-photo-animated.jpeg"
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

        {/* Add countdown timer after the header section and before the main event details */}
        <div className="mb-16 text-center px-4">
          <h3 className="text-2xl text-amber-800 mb-6 font-light italic">Counting down to our special day</h3>
          <div className="flex flex-wrap justify-center gap-4 bg-gradient-to-br from-white/90 to-rose-50/90 backdrop-blur-sm border border-amber-200 rounded-2xl p-4 md:p-8 shadow-lg">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={item.label} className="relative px-3 md:px-6">
                {/* Separator between items */}
                {index !== 0 && (
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4">
                    <span className="hidden md:block w-1 h-1 bg-amber-300 rounded-full mb-1"></span>
                    <span className="hidden md:block w-1 h-1 bg-amber-300 rounded-full"></span>
                  </div>
                )}
                {/* Counter item */}
                <div className="flex flex-col items-center min-w-[70px] md:min-w-[100px]">
                  <span className="text-2xl md:text-5xl font-['Aref_Ruqaa',serif] text-red-800 mb-1 md:mb-2">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] md:text-sm text-amber-700 font-light tracking-wider uppercase">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mt-6">
            <div className="h-[1px] w-12 md:w-16 bg-gradient-to-r from-transparent to-amber-300"></div>
            <Image
              src="/images/small-flower.png"
              alt=""
              width={30}
              height={30}
              className="opacity-60 md:w-[40px] md:h-[40px]"
            />
            <div className="h-[1px] w-12 md:w-16 bg-gradient-to-l from-transparent to-amber-300"></div>
          </div>
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
              <a 
                href="https://maps.app.goo.gl/mnMzuV4KtFkzPMKk6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-sm text-red-700 hover:text-red-900 transition-colors group"
              >
                <span className="underline">View on Google Maps</span>
                <Globe size={16} className="transform group-hover:rotate-12 transition-transform" />
              </a>
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
              { icon: "https://api.iconify.design/mdi:hands-pray.svg", alt: "Mataji Poojan", title: "Mataji Poojan", date: "June 5, 2025", time: "09:00 AM", desc: "Seeking blessings from the family deity." },
              { icon: "https://api.iconify.design/material-symbols:celebration.svg", alt: "Procession", title: "Procession", date: "June 5, 2025", time: "08:00 PM", desc: "A grand procession with music, dance, and joy." },
              { icon: "https://api.iconify.design/mdi:flower-tulip.svg", alt: "Haldi", title: "Haldi Ceremony", date: "June 6, 2025", time: "02:00 PM", desc: "A joyful ceremony with turmeric paste, flowers, and fun." },
              { icon: "https://api.iconify.design/mdi:music-note.svg", alt: "Sangeet", title: "Sangeet & DJ Night", date: "June 6, 2025", time: "08:00 PM", desc: "A night of music, dance performances, and celebration." },
              { icon: "https://api.iconify.design/mdi:horse-human.svg", alt: "Baraat", title: "Baraat", date: "June 7, 2025", time: "09:30 AM", desc: "The groom's arrival with music and dancing." },
              { icon: "https://api.iconify.design/mdi:gift.svg", alt: "Mayra", title: "Mayra / Mamera", date: "June 7, 2025", time: "11:00 AM", desc: "Ceremony for the maternal families." },
              { icon: "https://api.iconify.design/mdi:face-man-shimmer.svg", alt: "Tilak Chidi", title: "Tilak Chidi", date: "June 7, 2025", time: "02:00 PM", desc: "A traditional ceremony where tilak is applied to the groom with blessings and gifts" },
              { icon: "https://api.iconify.design/mdi:food-fork-drink.svg", alt: "Reception", title: "Reception", date: "June 7, 2025", time: "7:00 PM", desc: "Celebrating the newlyweds with dinner and entertainment." },
              { icon: "https://api.iconify.design/mdi:flower-outline.svg", alt: "Varmala", title: "Varmala", date: "June 7, 2025", time: "09:00 PM", desc: "The beautiful exchange of garlands between bride and groom." },
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
                <Image src="/images/couple/western-dress-photo.jpeg" alt="Siddharth and Pooja Placeholder" layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-lg text-amber-900 space-y-5 leading-relaxed">
              <p>
                Our story began in the corridors of school when Pooja transferred to our class in 8th standard. Little did we know that sharing the same school, participating in school activities, and growing up together through our teenage years would one day lead to something so beautiful.
              </p>
              <p>
                Life took an unexpected but delightful turn when our families approached us with the prospect of an arranged marriage. It was a pleasant surprise to discover that our childhood schoolmate would become our life partner! While it took some time to process this wonderful coincidence, we gradually discovered new dimensions to each other&apos;s personalities that we had never noticed before.
              </p>
              <p className="font-semibold text-red-800 italic">
                From being schoolmates to soulmates, our journey has been uniquely beautiful. We&apos;re excited to begin this new chapter of our lives with the blessings of our families who helped write this destined love story.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery section */}
        <section id="gallery" className="mb-16">
          <h2 className="font-['Aref_Ruqaa',serif] text-3xl md:text-4xl mb-8 text-red-700 text-center">Moments We Cherish</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden rounded-lg border-2 border-amber-100/50 shadow-sm group relative cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
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

          {/* Lightbox component */}
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={slides}
            plugins={[Zoom, Thumbnails]}
            animation={{ fade: 300 }}
            thumbnails={{
              position: "bottom",
              width: 120,
              height: 80,
              border: 2,
              borderRadius: 4,
              padding: 4,
              gap: 16,
            }}
            zoom={{
              maxZoomPixelRatio: 3,
              zoomInMultiplier: 2,
              doubleTapDelay: 300,
            }}
            carousel={{
              finite: true,
              preload: 2,
              padding: { top: 20, bottom: 20 },
            }}
            render={{
              iconPrev: () => <span className="text-white">←</span>,
              iconNext: () => <span className="text-white">→</span>,
              iconClose: () => <span className="text-white">×</span>,
            }}
          />
        </section>

        {/* Photo Upload Section */}
        <section className="mb-16 bg-white/70 backdrop-blur-sm border border-amber-200 rounded-xl p-8 md:p-10 shadow-lg text-center">
          <h2 className="font-['Aref_Ruqaa',serif] text-3xl md:text-4xl mb-8 text-red-700">Share Your Moments</h2>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-amber-900">
              Help us capture every beautiful moment! Upload your photos from our wedding celebrations to our shared album.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm border border-amber-100 rounded-lg p-6 shadow-md">
              <Camera size={32} className="text-red-700 mx-auto mb-4" />
              <p className="text-amber-800 mb-4">
                Click below to access our shared Google Drive folder and upload your photos
              </p>
              
              <a 
                href="https://drive.google.com/drive/folders/1HUZ96oIUOrNRd07_q3sKTAAgi4SehKjP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-800 text-white px-6 py-3 rounded-lg hover:from-red-800 hover:to-red-900 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Upload Photos</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </a>
            </div>
            
            <p className="text-sm text-amber-700 italic">
              Your shared moments will help us relive these precious memories for years to come.
            </p>
          </div>
        </section>

        {/* Accommodation info */}
        <section id="accommodation" className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-xl p-8 md:p-10 mb-16 shadow-lg">
          <h2 className="font-['Aref_Ruqaa',serif] text-3xl md:text-4xl mb-8 text-red-700 text-center">Guest Accommodation</h2>

          <p className="text-lg text-center text-amber-900 mb-8">
            For our cherished guests travelling from afar, we&apos;ve arranged a special stay at our home and nearby hotels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { 
                name: "Our Home", 
                distance: "0.2 km from venue",
                isHome: true,
                mapLink: "https://maps.app.goo.gl/qwFkGfVKhSp7p5Rg6"
              },
              { 
                name: "Sanghvi Palace", 
                distance: "0.1 km from venue",
                mapLink: "https://maps.app.goo.gl/C5tuDjr8k96WDrKY8"
              },
              { 
                name: "Tanvi Palace", 
                distance: "2 km from venue",
                mapLink: "https://maps.app.goo.gl/NGZL9A2t1fkaAnFS6"
              },
            ].map((place) => (
            <div key={place.name} className="border border-amber-100 rounded-lg p-5 shadow-sm bg-white/50 hover:bg-white/80 transition-colors duration-300 flex flex-col items-center text-center">
               {place.isHome ? (
                 <Home size={24} className="text-red-700 mb-3" />
               ) : (
                 <Hotel size={24} className="text-red-700 mb-3" />
               )}
              <h3 className="text-xl font-bold text-amber-950">{place.name}</h3>
              <p className="text-sm text-amber-700 mb-3">{place.distance}</p>
              <div className="flex flex-col items-center gap-2">
                {place.mapLink && (
                  <a 
                    href={place.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-1 text-sm text-red-700 hover:text-red-900 transition-colors group"
                  >
                    <span className="underline">View on Maps</span>
                    <Globe size={14} className="transform group-hover:rotate-12 transition-transform" />
                  </a>
                )}
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
              <p className="text-lg">Mrs. Sunita & Mr. Manoj Gupta</p>
            </div>

            <div className="text-center border border-amber-100 rounded-lg p-6 shadow-sm bg-white/50">
               <Users size={24} className="text-red-700 mb-3 mx-auto" />
              <h3 className="text-xl font-bold mb-3 text-amber-950">Groom&apos;s Family</h3>
              <p className="text-lg">Mrs. Sunita & Mr. Jagdish Dangarh</p>
            </div>
          </div>
        </section>

        {/* Fortune Cookie Section */}
        <section id="fortune" className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-xl p-8 md:p-10 shadow-lg text-center">
        <h2 className="font-['Aref_Ruqaa',serif] text-3xl md:text-4xl mb-8 text-red-700">Wedding Fortune Cookie</h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-amber-800 mb-8">Click the fortune cookie to reveal your destiny at our wedding!</p>
          
          <div className="relative min-h-[200px] flex flex-col items-center">
            <button
              onClick={getRandomFortune}
              className={`bg-gradient-to-br from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 
                border-2 border-amber-300 rounded-full p-6 shadow-lg hover:shadow-xl 
                transition-all duration-500 transform hover:scale-105 
                ${showFortune ? 'scale-90 rotate-[360deg]' : ''}`}
              title="Get a Wedding Fortune"
              disabled={showFortune}
            >
              <Image
                src="/images/fortune-cookie.png"
                alt="Fortune Cookie"
                width={48}
                height={48}
                className="opacity-80"
              />
            </button>

            {showFortune && (
              <div className="w-full mt-8">
                {/* Sparkles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="animate-float-up-left absolute top-1/2 left-1/4 text-amber-400">✨</div>
                  <div className="animate-float-up-right absolute top-1/2 right-1/4 text-amber-400">✨</div>
                  <div className="animate-float-down absolute bottom-0 left-1/3 text-amber-400">✨</div>
                </div>

                {/* Fortune Message */}
                <div className="relative">
                  <div className="animate-fortune-reveal bg-amber-50/90 backdrop-blur-sm border-2 border-amber-200 
                    rounded-lg p-6 shadow-lg max-w-md mx-auto overflow-hidden">
                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-red-700/30 rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-red-700/30 rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-red-700/30 rounded-bl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-red-700/30 rounded-br-lg"></div>
                    
                    <p className="text-amber-900 text-xl font-light italic animate-fortune-text">
                      {currentFortune}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
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
          {/* <button 
            onClick={toggleLanguage}
            className="p-2 hover:text-red-700 transition-colors rounded-full hover:bg-amber-100/50 flex items-center gap-1"
            title="Switch Language"
          >
            <Globe size={24} />
            <span className="text-sm font-semibold">{currentLang.toUpperCase()}</span>
          </button> */}
        </div>
      </nav>
    </div>
  );
}