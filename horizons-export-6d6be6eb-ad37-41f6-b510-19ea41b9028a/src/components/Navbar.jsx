import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BookOpen, Building2, ChevronDown, HandHeart, Home, Info,
  MapPin, Menu, Pause, Play, Search, Users, X
} from 'lucide-react';
import JamatiaLogo from '@/components/JamatiaLogo';
import { usePrayerTimes } from '@/components/prayer-times/PrayerTimesLogic';
import { cn } from '@/lib/utils';

const RADIO_STREAM = import.meta.env.VITE_RADIO_STREAM_URL || 'https://jicmosque.radioca.st/stream';

const PRAYERS = [
  ['Fajr', 'fajr'], ['Sunrise', 'sunrise'], ['Dhuhr', 'dhuhr'],
  ['Asr', 'asr'], ['Maghrib', 'maghrib'], ['Isha', 'isha'],
];

const groups = [
  {
    name: 'About', path: '/about', icon: Info,
    links: [
      ['About Us', '/about'], ['Meet the Team', '/team'], ['Our History', '/about#history'],
      ['Financial History', '/financial-history'], ['Contact Us', '/contact'],
    ],
  },
  {
    name: 'Services', path: '/services', icon: Home,
    links: [
      ['Daily Prayers', '/prayer-times'], ['Jummah', '/prayer-times'], ['Quran Classes', '/madrassah'],
      ['Community Services', '/services'], ['Funeral Services', '/services'], ['Hall Booking', '/contact'],
    ],
  },
  {
    name: 'Projects', path: '/projects', icon: Building2,
    links: [
      ['Masjid Extension', '/projects'], ['Main Prayer Hall', '/projects'], ['Community Hall', '/projects'],
      ['Madrassah Building', '/projects'], ['Current Appeals', '/projects'], ['Gallery', '/projects'],
    ],
  },
  {
    name: 'Madrassah', path: '/madrassah', icon: BookOpen,
    links: [
      ['About Madrassah', '/madrassah'], ['Our Programs', '/madrassah'], ['Classes & Courses', '/madrassah'],
      ['Enrolment', '/madrassah'], ['Policies', '/madrassah'],
    ],
  },
  {
    name: 'Youth', path: '/youth', icon: Users,
    links: [
      ['Youth Projects', '/youth'], ['Activities', '/youth'], ['Itikaf Program', '/youth'],
      ['Trips & Events', '/youth'], ['Volunteering', '/youth'], ['Classes & Skills', '/youth'],
    ],
  },
];

const compactTime = (value) => value && value !== 'N/A'
  ? String(value).replace(/^0/, '').replace(/\s?[AP]M$/i, '')
  : '—';

const jamaahTime = (value) => value && value !== 'N/A' ? String(value).replace(/^0/, '') : null;

const Navbar = () => {
  const { todaysTimes } = usePrayerTimes();
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [radioError, setRadioError] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }
  }, []);

  const toggleRadio = async () => {
    if (!audioRef.current) {
      const audio = new Audio(RADIO_STREAM);
      audio.preload = 'none';
      audio.addEventListener('playing', () => { setPlaying(true); setRadioError(false); });
      audio.addEventListener('pause', () => setPlaying(false));
      audio.addEventListener('error', () => { setPlaying(false); setRadioError(true); });
      audioRef.current = audio;
    }
    try {
      if (playing) audioRef.current.pause();
      else await audioRef.current.play();
    } catch {
      setPlaying(false);
      setRadioError(true);
    }
  };

  const jummah1 = jamaahTime(todaysTimes?.jummah_1_jamah || todaysTimes?.jummah_1_start) || '1:00 PM';
  const jummah2 = jamaahTime(todaysTimes?.jummah_2_jamah || todaysTimes?.jummah_2_start) || '2:30 PM';

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto max-w-[1500px] px-2 pt-2 sm:px-4">
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0b1b2c]/80 shadow-2xl backdrop-blur-2xl">
          <div className="grid min-h-[48px] grid-cols-[1fr_auto] items-stretch border-b border-white/10 lg:grid-cols-[260px_1fr_230px]">
            <a href="https://www.google.com/maps/search/?api=1&query=179-183%20Woodlands%20Rd%20Birmingham%20B11%204ER" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 text-xs text-white/85 hover:text-[#f2c963]">
              <MapPin size={15}/><span className="truncate">Woodlands Rd · Birmingham · B11 4ER</span>
            </a>

            <div className="hidden items-stretch justify-center lg:flex">
              {PRAYERS.map(([label, key]) => (
                <div key={key} className="flex min-w-[82px] flex-col items-center justify-center border-l border-white/10 px-3">
                  <span className="text-[10px] text-white/60">{label}</span>
                  <strong className="text-sm font-semibold text-[#f2c963]">{compactTime(todaysTimes?.[key])}</strong>
                </div>
              ))}
            </div>

            <button onClick={toggleRadio} className={cn('flex items-center justify-center gap-2 border-l border-white/10 px-4 text-xs font-medium hover:bg-white/5', playing && 'text-[#f2c963]')}>
              {playing ? <Pause size={15}/> : <Play size={15}/>}<span>JIC Radio</span>
              <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,.85)]" />
              <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-white/55">{radioError ? 'Retry' : 'Live'}</span>
            </button>
          </div>

          <div className="flex min-h-[76px] items-center gap-3 px-3 sm:px-5">
            <Link to="/" className="shrink-0" aria-label="Jamatia Islamic Centre home">
              <JamatiaLogo className="scale-[.72] origin-left sm:scale-[.82]" />
            </Link>

            <nav className="ml-auto hidden items-center gap-1 lg:flex">
              <NavLink to="/" className={({isActive}) => cn('rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-white/8', isActive && 'text-[#f2c963]')}>Home</NavLink>
              {groups.map((group) => (
                <NavLink key={group.name} to={group.path} onMouseEnter={() => setMegaOpen(true)} className="flex items-center gap-1 rounded-xl px-3 py-3 text-sm font-medium transition hover:bg-white/8 hover:text-[#f2c963]">
                  {group.name}<ChevronDown size={14}/>
                </NavLink>
              ))}
              <NavLink to="/prayer-times" className="rounded-xl px-3 py-3 text-sm font-medium transition hover:bg-white/8 hover:text-[#f2c963]">Prayer Times</NavLink>
            </nav>

            <div className="ml-auto flex items-center gap-2 lg:ml-3">
              <Link to="/projects" className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#f5cf70] to-[#e7ac3d] px-4 font-semibold text-[#07111d] shadow-[0_8px_30px_rgba(231,172,61,.25)]">
                <HandHeart size={18}/><span className="hidden sm:inline">Donate</span>
              </Link>
              <Link to="/contact" className="hidden h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 sm:grid" aria-label="Search and contact"><Search size={18}/></Link>
              <button onClick={() => { setMenuOpen(v => !v); setMegaOpen(false); }} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 lg:hidden" aria-label="Open menu">
                {menuOpen ? <X size={22}/> : <Menu size={22}/>} 
              </button>
            </div>
          </div>

          <div className="flex overflow-x-auto border-t border-white/10 lg:hidden">
            {PRAYERS.map(([label, key]) => (
              <div key={key} className="min-w-[72px] flex-1 border-r border-white/10 px-2 py-2 text-center">
                <div className="text-[9px] text-white/55">{label}</div>
                <strong className="text-xs text-[#f2c963]">{compactTime(todaysTimes?.[key])}</strong>
              </div>
            ))}
            <Link to="/prayer-times" className="flex min-w-[92px] items-center justify-center px-3 text-[10px] font-medium text-white/80">Full timetable →</Link>
          </div>

          <AnimatePresence>
            {megaOpen && (
              <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} onMouseLeave={() => setMegaOpen(false)} className="hidden border-t border-white/10 bg-[#081523]/95 p-6 backdrop-blur-2xl lg:block">
                <div className="grid grid-cols-5 divide-x divide-white/10">
                  {groups.map(({name, path, icon: Icon, links}) => (
                    <div key={name} className="px-6 first:pl-2">
                      <Link to={path} className="mb-4 flex items-center gap-2 font-semibold text-[#f2c963]"><Icon size={19}/>{name}</Link>
                      <div className="space-y-2.5">
                        {links.map(([label, to]) => <Link key={label} to={to} className="block text-sm text-white/68 transition hover:text-white">{label}</Link>)}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {menuOpen && (
              <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} className="border-t border-white/10 bg-[#07121f]/98 lg:hidden">
                <div className="p-3 sm:p-5">
                  <Link to="/" onClick={() => setMenuOpen(false)} className="mb-2 flex items-center gap-3 rounded-xl bg-white/8 px-4 py-3 font-medium"><Home size={19} className="text-[#f2c963]"/>Home</Link>
                  {groups.map(({name, path, icon: Icon, links}) => (
                    <div key={name} className="border-b border-white/8">
                      <button onClick={() => setMobileOpen(mobileOpen === name ? null : name)} className="flex w-full items-center gap-3 px-4 py-3 text-left">
                        <Icon size={19} className="text-[#f2c963]"/><span className="flex-1">{name}</span><ChevronDown size={16} className={cn('transition', mobileOpen === name && 'rotate-180')}/>
                      </button>
                      <AnimatePresence>{mobileOpen === name && <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden pb-3 pl-12">
                        <Link to={path} onClick={() => setMenuOpen(false)} className="mb-2 block text-sm font-semibold text-[#f2c963]">{name} overview</Link>
                        {links.map(([label, to]) => <Link key={label} to={to} onClick={() => setMenuOpen(false)} className="block py-1.5 text-sm text-white/65">{label}</Link>)}
                      </motion.div>}</AnimatePresence>
                    </div>
                  ))}
                  <Link to="/prayer-times" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 border-b border-white/8 px-4 py-3"><span className="text-[#f2c963]">◷</span>Prayer Times</Link>
                  <Link to="/projects" onClick={() => setMenuOpen(false)} className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f5cf70] to-[#e7ac3d] px-4 py-3 font-semibold text-[#07111d]"><HandHeart size={18}/>Donate</Link>
                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm italic text-white/75">“And hold firmly to the rope of Allah, all together, and do not become divided.”<div className="mt-2 not-italic text-xs text-[#f2c963]">Qur'an 3:103</div></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
