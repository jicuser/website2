import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, BookOpen, Building2, CalendarDays, Heart, Play,
  Users, Youtube, Facebook, Instagram, MessageCircle
} from 'lucide-react';
import { usePrayerTimes } from '@/components/prayer-times/PrayerTimesLogic';

const HERO_IMAGE = 'https://storage.googleapis.com/hostinger-horizons-assets-prod/6d6be6eb-ad37-41f6-b510-19ea41b9028a/a36d60015d1eb1f64588a36222584b66.png';
const ABOUT_IMAGE = 'https://storage.googleapis.com/hostinger-horizons-assets-prod/6d6be6eb-ad37-41f6-b510-19ea41b9028a/b4cad674da90c42b10367d7c50b4ea75.png';
const HISTORY_IMAGE = 'https://storage.googleapis.com/hostinger-horizons-assets-prod/6d6be6eb-ad37-41f6-b510-19ea41b9028a/2355863303a48938de3cc43028eeac23.png';
const FUNERAL_IMAGE = 'https://storage.googleapis.com/hostinger-horizons-assets-prod/6d6be6eb-ad37-41f6-b510-19ea41b9028a/58a3215da96feff6bb9f6dea8bf5890e.jpg';

const cards = [
  { title: 'Services', text: 'Religious, educational and community services for all.', cta: 'Explore Services', to: '/services', icon: Heart, image: ABOUT_IMAGE },
  { title: 'Projects', text: 'Building for a stronger future.', cta: 'View Projects', to: '/projects', icon: Building2, image: HISTORY_IMAGE },
  { title: 'Youth', text: 'Activities, programs and opportunities.', cta: 'Explore Youth', to: '/youth', icon: Users, image: FUNERAL_IMAGE },
  { title: 'Madrassah', text: 'Islamic education for the next generation.', cta: 'View Classes', to: '/madrassah', icon: BookOpen, image: ABOUT_IMAGE },
];

const cleanTime = (value) => value && value !== 'N/A' ? String(value).replace(/^0/, '') : null;

export default function HomePage() {
  const { todaysTimes } = usePrayerTimes();
  const jummah1 = cleanTime(todaysTimes?.jummah_1_jamah || todaysTimes?.jummah_1_start) || '1:00 PM';
  const jummah2 = cleanTime(todaysTimes?.jummah_2_jamah || todaysTimes?.jummah_2_start) || '2:30 PM';

  return (
    <div className="min-h-screen bg-[#06101c] text-white">
      <section className="relative mx-auto max-w-[1500px] overflow-hidden px-2 pb-3 sm:px-4">
        <div className="relative min-h-[620px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1725] shadow-2xl md:min-h-[670px]">
          <img src={HERO_IMAGE} alt="Jamatia Islamic Centre" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,18,.96)_0%,rgba(3,10,18,.80)_34%,rgba(3,10,18,.30)_68%,rgba(3,10,18,.18)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,10,18,.94)_0%,transparent_48%)]" />

          <div className="relative z-10 flex min-h-[620px] items-end px-6 pb-10 pt-16 sm:px-10 md:min-h-[670px] md:items-center md:px-12 md:pb-12 lg:px-16">
            <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.55}} className="max-w-[690px]">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.3em] text-[#efc766] sm:text-xs">Jamatia Islamic Centre · Birmingham</p>
              <h1 className="max-w-[660px] font-serif text-[48px] italic leading-[.98] tracking-[-.035em] sm:text-[64px] md:text-[76px] lg:text-[82px]">
                A place for faith.<br/><span className="text-white/95">A home for<br className="sm:hidden"/> community.</span>
              </h1>
              <div className="my-6 h-[3px] w-16 rounded-full bg-[#efc766]" />
              <p className="text-lg font-medium sm:text-xl">Worship. Learn. Grow. Together.</p>
              <p className="mt-1 max-w-lg text-sm text-white/70 sm:text-base">A stronger community for a brighter tomorrow.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#f5cf70] to-[#e7ac3d] px-6 py-3.5 text-sm font-semibold text-[#07111d] shadow-[0_12px_35px_rgba(231,172,61,.24)]">Visit the Centre <ArrowRight size={17}/></Link>
                <a href="https://youtube.com/@JICMASJID" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-black/20 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl hover:bg-white/10"><Play size={16} fill="currentColor"/>Watch Live</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-2 py-2 sm:px-4">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {cards.map(({title,text,cta,to,icon:Icon,image}, index) => (
            <motion.div key={title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}}>
              <Link to={to} className="group relative block min-h-[250px] overflow-hidden rounded-2xl border border-white/14 bg-white/5 p-5 shadow-xl sm:min-h-[285px]">
                <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-65" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06101c] via-[#06101c]/70 to-black/10" />
                <div className="relative z-10 flex h-full min-h-[210px] flex-col justify-end sm:min-h-[245px]">
                  <Icon className="mb-3 text-[#efc766]" size={28}/>
                  <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
                  <p className="mt-1 max-w-[230px] text-xs leading-relaxed text-white/70 sm:text-sm">{text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#efc766]">{cta}<ArrowRight size={16}/></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-2 py-3 sm:px-4">
        <div className="grid gap-3 md:grid-cols-[1.1fr_.9fr]">
          <div className="flex min-h-[68px] items-center overflow-hidden rounded-2xl border border-white/12 bg-white/[.055] backdrop-blur-2xl">
            <div className="flex h-full items-center gap-2 border-r border-white/10 px-4 text-xs font-medium text-white/70 sm:px-5"><CalendarDays size={17} className="text-[#efc766]"/><span className="hidden sm:inline">Upcoming Event</span></div>
            <div className="min-w-0 flex-1 px-4 text-xs sm:text-sm"><span className="font-semibold">Jummah Khutbah</span><span className="ml-3 text-white/65">{jummah1} – {jummah2}</span></div>
            <Link to="/prayer-times" className="grid h-full min-w-[54px] place-items-center border-l border-white/10 text-[#efc766]"><ArrowRight size={18}/></Link>
          </div>

          <div className="flex min-h-[68px] items-center justify-between rounded-2xl border border-white/12 bg-white/[.055] px-4 backdrop-blur-2xl sm:px-5">
            <div><div className="text-xs font-semibold">Stay Updated</div><div className="mt-1 text-[11px] text-white/55">Get the latest news and events</div></div>
            <div className="flex items-center gap-3 text-white/75">
              <a href="https://youtube.com/@JICMASJID" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-[#efc766]"><Youtube size={19}/></a>
              <a href="https://facebook.com/JICMasjid" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#efc766]"><Facebook size={18}/></a>
              <a href="https://instagram.com/jicmasjid" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#efc766]"><Instagram size={18}/></a>
              <a href="https://wa.me/441217786612" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-[#efc766]"><MessageCircle size={18}/></a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-2 pb-10 pt-3 sm:px-4">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1725] px-6 py-12 sm:px-10 md:px-14">
          <img src={HERO_IMAGE} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111d] via-[#07111d]/90 to-[#07111d]/55" />
          <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs uppercase tracking-[.25em] text-[#efc766]">Jamatia Islamic Centre</p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl italic sm:text-4xl">Faith, learning and service — together under one roof.</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">Prayer, education, youth work, community support and projects for Birmingham's Muslim community.</p>
            </div>
            <Link to="/about" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold hover:bg-white/12">Discover JIC <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
