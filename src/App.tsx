/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Music, 
  Utensils, 
  Palette, 
  Type, 
  Layout, 
  Users, 
  Coffee, 
  ChevronRight, 
  Flame, 
  Zap,
  Disc,
  Mic2,
  Monitor,
  MapPin,
  FlameKindling
} from 'lucide-react';

// --- Types ---
interface BrandElement {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  items: { 
    name: string; 
    detail: string; 
    image?: string;
    mapEmbed?: string;
    link?: string;
    color?: string;
    hexTextColor?: string;
    fontFamily?: string;
    samples?: string[];
    objectFit?: 'cover' | 'contain';
  }[];
}

// --- Data ---
const BRAND_DATA: BrandElement[] = [
  {
    id: 'identity',
    title: 'Brand Identity',
    icon: <FlameKindling className="w-6 h-6" />,
    description: "Mojo's is a bold, flavour-first American comfort food destination. All flavour. No fuss.",
    items: [
      { 
        name: 'The Concept', 
        detail: "Mojo's is a bold, flavour-first American comfort food destination. Think crispy, indulgent, unapologetically satisfying — the kind of food that has regulars coming back twice a week and first-timers instantly hooked.",
        image: 'https://picsum.photos/seed/mojo-hero/800/600'
      },
      { 
        name: 'Smash Burgers', 
        detail: "The undisputed hero. Seven builds ranging from the classic Bacon Cheese to the showstopping Brisket, each one crafted with intention. These aren't afterthoughts — they're the reason people walk through the door.",
        image: 'https://picsum.photos/seed/burger/800/600'
      },
      { 
        name: 'Street-Style Starters', 
        detail: "Tacos on fried cheese tallow tortillas, loaded fries stacked with pulled pork and chipotle chicken. These are shareable, craveable, and highly Instagram-able.",
        image: 'https://picsum.photos/seed/tacos/800/600'
      },
      { 
        name: 'Southern Fried Chicken', 
        detail: "Woven throughout the menu as a recurring signature, from tenders to tacos to burgers. It's a thread that ties the whole offering together.",
        image: 'https://picsum.photos/seed/fried-chicken/800/600'
      },
      { 
        name: 'The Feeling', 
        detail: "Mojo's doesn't take itself too seriously — but it takes its food very seriously. It's relaxed, confident, and a little bit rowdy. \"The best meal you didn't need to dress up for.\"",
        image: 'https://picsum.photos/seed/restaurant-vibe/800/600'
      },
      { 
        name: 'The Tagline', 
        detail: "All flavour. No fuss.",
        image: 'https://picsum.photos/seed/mojo-tagline/800/600'
      }
    ]
  },
  {
    id: 'logo',
    title: 'Logo Identity',
    icon: <Disc className="w-6 h-6" />,
    description: 'The visual heartbeat of Mojo\'s. A bold, circular emblem that signifies the "Fire & Smoke" philosophy.',
    items: [
      { 
        name: 'Master Logo: Variation 1', 
        detail: 'The primary mark featuring the iconic Mojo\'s typography with a distressed, wood-fired texture. Circular composition for maximum versatility across social and physical media.',
        image: '/assets/logos/logo-variation-1.png',
        objectFit: 'contain'
      },
      { 
        name: 'Master Logo: Variation 2', 
        detail: 'A simplified, high-contrast version for small-scale printing and embroidery. Removes fine distressing for clarity.',
        image: '/assets/logos/logo-variation-2.png',
        objectFit: 'contain'
      },
      { 
        name: 'Master Logo: Variation 3', 
        detail: 'A stylized version designed for digital displays and neon signage. Emphasizes the Crimson and Orange glow.',
        image: '/assets/logos/logo-variation-3.png',
        objectFit: 'contain'
      },
      { 
        name: 'Master Logo: Variation 4', 
        detail: 'A rugged, stencil-style variant for spray-painting on shipping crates and outdoor pit equipment.',
        image: '/assets/logos/logo-variation-4.png',
        objectFit: 'contain'
      }
    ]
  },
  {
    id: 'typography',
    title: 'Typography',
    icon: <Type className="w-6 h-6" />,
    description: 'The website uses four distinct font families to create a technical yet bold "Smokehouse" aesthetic.',
    items: [
      { 
        name: 'Display Font: Anton', 
        detail: 'Heavy, Condensed Sans-Serif. Usage: Large branding, hero titles, background watermarks.',
        fontFamily: 'font-display',
        samples: ['MOJO FIRE SMOKE', 'mojo fire smoke']
      },
      { 
        name: 'Heading Font: Space Grotesk', 
        detail: 'Modern Geometric Sans-Serif. Usage: Section labels, menu titles.',
        fontFamily: 'font-heading',
        samples: ['MOJO FIRE SMOKE', 'mojo fire smoke']
      },
      { 
        name: 'Body Font: Inter', 
        detail: 'Clean, highly legible Sans-Serif. Common Classes: font-sans.',
        fontFamily: 'font-sans',
        samples: ['MOJO FIRE SMOKE', 'mojo fire smoke']
      },
      { 
        name: 'Monospace Font: Roboto Mono', 
        detail: 'Technical Monospace. Usage: Prices, labels, "Back to top" button, small-caps metadata.',
        fontFamily: 'font-mono',
        samples: ['MOJO FIRE SMOKE', 'mojo fire smoke']
      }
    ]
  },
  {
    id: 'palette',
    title: 'Color Palette',
    icon: <Palette className="w-6 h-6" />,
    description: 'A foundation of charcoal and smoke, punctuated by the vibrant glow of live embers.',
    items: [
      { name: 'Charcoal Pit', detail: 'Main background. Deep, matte, and soot-inspired.', color: '#111111' },
      { name: 'Mojo Crimson', detail: 'Prices, accents, numbers. The primary heartbeat of the brand.', color: '#E8003D', hexTextColor: 'text-white' },
      { name: 'Neon Heat', detail: 'Hero banner, Sunday Roast panel. Vibrant and high-energy.', color: '#FF1F5A', hexTextColor: 'text-white' },
      { name: 'Ember Glow', detail: 'Watermark / shadow tones. Deep, smoldering heat.', color: '#C4003A', hexTextColor: 'text-white' },
      { name: 'Smoked Slate', detail: 'Menu card backgrounds. Subtle contrast for readability.', color: '#1A1A1A' },
      { name: 'Iron Grid', detail: 'Borders & dividers. Industrial-grade structural elements.', color: '#2E2E2E' },
      { name: 'Ash Grey', detail: 'Sub-category labels. Muted metadata and secondary info.', color: '#888888', hexTextColor: 'text-white' },
      { name: 'Bone White', detail: 'All primary text. Maximum contrast and clarity.', color: '#FFFFFF' },
      { name: 'Smoke White', detail: 'Text on red panels. Softened contrast for high-heat areas.', color: '#F0EDE8' }
    ]
  },
  {
    id: 'locations',
    title: 'Locations & Venues',
    icon: <MapPin className="w-6 h-6" />,
    description: 'Our outposts across Thailand, each maintaining the core Fire & Smoke identity.',
    items: [
      { 
        name: 'Lamai Outpost', 
        detail: 'Signature location for optimal size, covers, and location for tourists and grab delivery radius - not too big, not too small - has more refined vision brand', 
        mapEmbed: 'https://maps.google.com/maps?q=9.464096763954156,100.0434715411214&t=&z=15&ie=UTF8&iwloc=&output=embed',
        link: 'https://maps.app.goo.gl/Rvg99Cx8WrZPm2bS7'
      },
      { 
        name: 'Chaloklum Hub', 
        detail: 'Slightly oversized for the our needs in Chaloklum, has V1 of previous branding ideas, lots of changes between chaloklum and lamai', 
        mapEmbed: 'https://maps.google.com/maps?q=9.786670871753794,100.00766608345157&t=&z=15&ie=UTF8&iwloc=&output=embed',
        link: 'https://maps.app.goo.gl/Z1gZdZvnXPqdELsM7'
      },
      { 
        name: 'Thong Sala', 
        detail: 'Food Court - Quick, Dirty Take away, location good for tourists and KPG Delivery radius', 
        mapEmbed: 'https://maps.google.com/maps?q=Mojo\'s%20Fire%20and%20Smoke%20Thong%20Sala%20Koh%20Phangan&t=&z=15&ie=UTF8&iwloc=&output=embed',
        link: 'https://maps.app.goo.gl/ReKr3REoTqDEpkRr6'
      },
      { 
        name: 'Baan Tai Night Market', 
        detail: 'Good Location overall, but market layout / inside location not adequte, good delivery location', 
        mapEmbed: 'https://maps.google.com/maps?q=9.699998076770726,100.02440791043722&t=&z=15&ie=UTF8&iwloc=&output=embed',
        link: 'https://maps.app.goo.gl/vtM7A59EjdcjCCrY9'
      }
    ]
  },
  {
    id: 'tableware',
    title: 'Tableware',
    icon: <Utensils className="w-6 h-6" />,
    description: 'Industrial-grade materials that can handle the volume and the grease.',
    items: [
      { 
        name: 'Plateware', 
        detail: 'Matte black stoneware with irregular, organic edges. Feels like raw earth.',
        image: 'https://picsum.photos/seed/plate1/800/600'
      },
      { 
        name: 'Burger Plate', 
        detail: 'Heavy-set matte black plate designed for our signature smash burgers. Wide rim for easy handling and grease-resistant finish.',
        image: 'https://picsum.photos/seed/plate2/800/600'
      },
      { 
        name: 'Taco Plate', 
        detail: 'Elongated platter for our Fire & Smoke tacos. Perfect for sharing and displaying vibrant salsa colors.',
        image: 'https://picsum.photos/seed/plate3/800/600'
      },
      { 
        name: 'Loaded Fries Bowl', 
        detail: 'Deep, industrial-style bowl for our pit-fired loaded fries. Retains heat and stands up to heavy toppings.',
        image: 'https://picsum.photos/seed/bowl1/800/600'
      },
      { 
        name: 'Matte Black Cutlery & Plate Set', 
        detail: 'A complete set featuring our signature matte black plateware paired with brushed gunmetal flatware.',
        image: 'https://picsum.photos/seed/cutlery1/800/600'
      },
      { 
        name: 'Plateware & Cutlery', 
        detail: 'The perfect pairing of organic stoneware and industrial-grade steel.',
        image: 'https://picsum.photos/seed/cutlery2/800/600'
      }
    ]
  },
  {
    id: 'furniture',
    title: 'Furniture',
    icon: <Coffee className="w-6 h-6" />,
    description: 'Comfortable enough for a long set, durable enough for a mosh pit.',
    items: [
      { name: 'Tables', detail: 'Reclaimed barn wood tops with heavy I-beam steel bases. Bolt-head details exposed.', image: 'https://picsum.photos/seed/tables/800/600' },
      { name: 'Seating', detail: 'Distressed black leather booths with diamond stitching. Bar stools made from repurposed drum thrones.', image: 'https://picsum.photos/seed/seating/800/600' },
      { name: 'Bar Counter', detail: 'Poured concrete with embedded guitar picks and broken vinyl shards.', image: 'https://picsum.photos/seed/bar/800/600' },
      { name: 'Furniture Direction', detail: 'Custom "Stage Rig" trusses with adjustable PAR cans and warm Edison bulbs.', image: 'https://picsum.photos/seed/lighting/800/600' }
    ]
  },
  {
    id: 'uniforms',
    title: 'Staff Uniforms',
    icon: <Users className="w-6 h-6" />,
    description: 'The crew is part of the show. No stiff collars here.',
    items: [
      { 
        name: 'Front of House', 
        detail: "Mojo's logo'd T (Front small logo - back Large Logo). Denim jeans or shorts, rolled up sleeves.",
        image: 'https://picsum.photos/seed/tshirt/800/600'
      },
      { 
        name: 'Kitchen Crew', 
        detail: 'Heavy-duty black canvas aprons with leather straps and brass rivets.',
        image: 'https://picsum.photos/seed/apron1/800/600'
      },
      { name: 'The Full Look', detail: 'Full or half denim apron, dark navy / midnight black.', image: 'https://picsum.photos/seed/apron2/800/600' },
      { 
        name: 'Accessories', 
        detail: 'Branded "Fire & Smoke" bandanas and guitar-pick-shaped name badges.',
        image: 'https://picsum.photos/seed/bandana/800/600'
      }
    ]
  },
  {
    id: 'sound',
    title: 'Sound & Music',
    icon: <Music className="w-6 h-6" />,
    description: 'The heartbeat of Mojo’s. If it doesn’t have soul and grit, it doesn’t play.',
    items: [
      { 
        name: 'Classic Soul & Motown Royalty', 
        detail: 'Deep roots in 1960s–70s soul — Marvin Gaye, Aretha Franklin, Stevie Wonder, Sam & Dave, Wilson Pickett, Al Green. The foundation of the playlist, full of groove, emotion, and timeless vocal power.',
        image: 'https://picsum.photos/seed/stevie/800/600'
      },
      { 
        name: 'The Blues Lineage', 
        detail: 'Ray Charles, B.B. King, John Lee Hooker, Bo Diddley, Big Joe Turner. This thread ties together the rawer, more rootsy side of the list, from boogie-woogie to soul blues, acting as the spiritual backbone.',
        image: 'https://picsum.photos/seed/bbking/800/600'
      },
      { 
        name: 'Funk, Disco & Groove', 
        detail: 'Earth, Wind & Fire, Kool & the Gang, James Brown, and Ike & Tina Turner. Highest-energy entries, made for moving, bridging soul to the dancefloor.',
        image: 'https://picsum.photos/seed/jamesbrown/800/600'
      },
      { 
        name: 'Classic Rock & Its Outliers', 
        detail: 'The Rolling Stones, Led Zeppelin, Pink Floyd, Fleetwood Mac, The Police, Patti Smith, David Bowie, Roxy Music, The Cruel Sea, and Nick Cave. Rock that carries a similar spirit to soul/blues.',
        image: 'https://picsum.photos/seed/stones/800/600'
      }
    ]
  },
  {
    id: 'menu',
    title: 'Menu Direction',
    icon: <Utensils className="w-6 h-6" />,
    description: 'A return to our roots: focusing on legendary smash burgers, wood-fired BBQ, and perfecting every bite.',
    items: [
      { 
        name: 'The Smash Burger', 
        detail: 'Our core focus. High-quality beef, smashed thin for maximum crust, served on toasted buns with signature Mojo sauce.',
        image: 'https://picsum.photos/seed/burger2/800/600'
      },
      { 
        name: 'Fire & Smoke Tacos', 
        detail: 'Brisket and Pulled Pork served on fried cheese tallow tortillas with salsa roja and fresh cilantro.',
        image: 'https://picsum.photos/seed/tacos2/800/600'
      },
      { 
        name: 'Loaded Pit Fries', 
        detail: 'Fresh cut, skin-on fries topped with 12-hour smoked brisket and blue cheese ranch.',
        image: 'https://picsum.photos/seed/fries1/800/600'
      },
      { 
        name: 'Chicken Loaded Fries', 
        detail: 'Our signature fries topped with buttermilk fried chicken and spicy Mojo sauce.',
        image: 'https://picsum.photos/seed/fries2/800/600'
      },
      {
        name: 'Wings & Tenders',
        detail: 'Crispy, double-fried wings tossed in our signature dry rubs or wet sauces.',
        image: 'https://picsum.photos/seed/wings1/800/600'
      },
      {
        name: 'The "Grab" Shot',
        detail: 'Action photography style for social media, emphasizing the crispy texture and heat.',
        image: 'https://picsum.photos/seed/grab/800/600'
      },
      {
        name: 'Southern Fried Tenders',
        detail: 'Hand-breaded buttermilk chicken tenders, served with a side of pit-fire salsa.',
        image: 'https://picsum.photos/seed/tenders/800/600'
      },
      { 
        name: 'The Sweet Stuff', 
        detail: 'Indulgent finishers: Basque burnt cheesecake and ultra-thick honeycomb malt shakes.',
        image: 'https://picsum.photos/seed/dessert/800/600'
      }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: <Monitor className="w-6 h-6" />,
    description: 'Our presence across physical and digital stages. Every touchpoint is a performance.',
    items: [
      { 
        name: 'Take Out Packaging', 
        detail: 'Pizza-style boxes for tacos/burgers with "Gig Poster" graphics. Heavy-duty, grease-resistant, and designed to be a collectible artifact.',
        image: 'https://picsum.photos/seed/packaging/800/600'
      },
      { 
        name: 'Website / Online Presence', 
        detail: 'High-contrast, high-performance digital hub. Featuring live pit-cams, online ordering, and a "Tour Dates" style event calendar.',
        image: 'https://picsum.photos/seed/website/800/600'
      },
      { 
        name: 'Social Media Channels', 
        detail: 'Aggressive, high-energy content. Focusing on the "Grab" shot, the sizzle of the pit, and the roar of the crowd. Consistent use of Mojo Crimson filters.',
        image: 'https://picsum.photos/seed/social/800/600'
      },
      { 
        name: 'Sunday Roast Marketing', 
        detail: 'Specialized "Family Set" campaigns. Emphasizing the "Low & Slow" tradition with a rock-and-roll twist. Large-format platters for the whole crew.',
        image: 'https://picsum.photos/seed/roast/800/600'
      }
    ]
  }
];

// --- Components ---

const NavItem = ({ element, active, onClick }: { element: BrandElement, active: boolean, onClick: () => void, key?: React.Key }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 p-4 transition-all duration-300 border-l-4 ${
      active 
        ? 'bg-white/5 border-red-600 text-white' 
        : 'border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-white/2'
    }`}
  >
    <div className={`${active ? 'text-red-600' : 'text-zinc-600'}`}>
      {element.icon}
    </div>
    <span className="font-medium uppercase tracking-widest text-sm">{element.title}</span>
    {active && (
      <motion.div layoutId="active-nav" className="ml-auto">
        <ChevronRight className="w-4 h-4 text-red-600" />
      </motion.div>
    )}
  </button>
);

const DetailCard = ({ item }: { item: { name: string, detail: string, image?: string, mapEmbed?: string, link?: string, color?: string, hexTextColor?: string, fontFamily?: string, samples?: string[], objectFit?: 'cover' | 'contain' }, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="group relative bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg hover:border-red-600/50 transition-colors overflow-hidden"
  >
    {item.color ? (
      <div className="mb-6 aspect-square rounded-md overflow-hidden border border-zinc-800 flex items-center justify-center" style={{ backgroundColor: item.color }}>
        <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${item.hexTextColor ? item.hexTextColor : 'text-white/40 mix-blend-difference'}`}>
          {item.color}
        </span>
      </div>
    ) : item.mapEmbed ? (
      <div className="mb-6 aspect-square rounded-md overflow-hidden border border-zinc-800 bg-black">
        <iframe
          title={item.name}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9) brightness(0.8)' }}
          src={item.mapEmbed}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    ) : item.image && (
      <div className="mb-6 aspect-square rounded-md overflow-hidden border border-zinc-800 bg-black p-4">
        <img 
          src={item.image} 
          alt={item.name} 
          className={`w-full h-full ${item.objectFit === 'contain' ? 'object-contain' : 'object-cover'} group-hover:scale-110 transition-transform duration-500`}
          referrerPolicy="no-referrer"
        />
      </div>
    )}
    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
      <Zap className="w-4 h-4 text-red-600" />
    </div>
    <h4 className={`text-red-500 font-bold uppercase tracking-tighter text-lg mb-2 ${item.fontFamily || ''}`}>{item.name}</h4>
    <p className="text-zinc-400 text-sm leading-relaxed mb-4">{item.detail}</p>
    
    {item.link && (
      <a 
        href={item.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-red-600 hover:text-red-500 transition-colors border border-red-600/20 px-3 py-2 rounded bg-red-600/5"
      >
        <MapPin className="w-3 h-3" />
        View on Google Maps
      </a>
    )}

    {item.fontFamily && item.samples && (
      <div className={`mt-6 p-6 bg-black/40 rounded-lg border border-zinc-800/50 ${item.fontFamily}`}>
        <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-zinc-600 mb-4 border-b border-zinc-800 pb-2">Font Preview</p>
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-sans uppercase tracking-widest text-zinc-700">Upper Case</span>
            <span className="text-2xl md:text-3xl text-zinc-100 break-all">{item.samples[0]}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-sans uppercase tracking-widest text-zinc-700">Lower Case</span>
            <span className="text-2xl md:text-3xl text-zinc-100 break-all">{item.samples[1]}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-sans uppercase tracking-widest text-zinc-700">Alphabet</span>
            <span className="text-xl md:text-2xl text-zinc-100 break-all leading-tight">The quick brown fox jumps over the lazy dog.</span>
          </div>
        </div>
      </div>
    )}
  </motion.div>
);

export default function App() {
  const [activeId, setActiveId] = useState(BRAND_DATA[0].id);
  const activeElement = BRAND_DATA.find(e => e.id === activeId)!;

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-red-600 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-sm rotate-3">
              <Flame className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-black uppercase tracking-tighter italic">
              Mojo's <span className="text-red-600">Fire & Smoke</span> Guidelines
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">
            <span>Est. 2026</span>
            <span className="w-1 h-1 bg-red-600 rounded-full"></span>
            <span>Thailand Outposts</span>
            <span className="w-1 h-1 bg-red-600 rounded-full"></span>
            <span>Rock & BBQ Identity</span>
          </div>
        </div>
      </header>

      <main className="pt-20 flex min-h-screen">
        {/* Sidebar Navigation */}
        <aside className="w-72 fixed left-0 top-20 bottom-0 border-r border-zinc-800 bg-[#050505] hidden lg:block overflow-y-auto">
          <div className="py-8">
            <div className="px-6 mb-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">Brand Architecture</p>
            </div>
            <nav>
              {BRAND_DATA.map((element) => (
                <NavItem
                  key={element.id}
                  element={element}
                  active={activeId === element.id}
                  onClick={() => setActiveId(element.id)}
                />
              ))}
            </nav>
          </div>
          
          <div className="absolute bottom-8 left-6 right-6 p-4 bg-red-600/10 border border-red-600/20 rounded-lg">
            <p className="text-[10px] text-red-500 font-bold uppercase mb-1">Confidential</p>
            <p className="text-[9px] text-zinc-500 leading-tight">Internal use only. All designs are property of Mojo's Fire & Smoke BBQ.</p>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 lg:ml-72 p-6 md:p-12">
          <div className={`mx-auto ${activeId === 'palette' ? 'max-w-6xl' : 'max-w-4xl'}`}>
            {/* Hero Section of Category */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-zinc-900 rounded-lg text-red-600 border border-zinc-800">
                      {activeElement.icon}
                    </div>
                    <span className="text-red-600 font-mono text-sm tracking-widest">SECTION_{activeElement.id.toUpperCase()}</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
                    {activeElement.title}
                  </h2>
                  <p className="text-xl text-zinc-400 max-w-2xl font-light leading-relaxed">
                    {activeElement.description}
                  </p>
                </div>

                {/* Grid of details */}
                <div className={`grid gap-6 mb-20 ${activeId === 'palette' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {activeElement.items.map((item, idx) => (
                    <DetailCard key={idx} item={item} />
                  ))}
                </div>

                {/* Visual Placeholder / Moodboard Element */}
                {activeId !== 'marketing' && (
                  <div className={`relative rounded-2xl overflow-hidden border border-zinc-800 group transition-all duration-500 ${
                    activeId === 'uniforms' ? 'aspect-[16/10]' : 'aspect-video'
                  }`}>
                    <img 
                      src={
                        activeId === 'identity'
                          ? 'https://picsum.photos/seed/vibe/1200/800'
                          : activeId === 'palette'
                            ? 'https://picsum.photos/seed/palette/1200/800'
                            : activeId === 'tableware'
                              ? 'https://picsum.photos/seed/tableware/1200/800'
                              : activeId === 'locations' 
                            ? 'https://i.imgur.com/gNL13PE.jpeg' 
                            : activeId === 'logo'
                              ? 'https://picsum.photos/seed/logo-hero/1200/800'
                              : activeId === 'typography'
                                ? 'https://picsum.photos/seed/typography/1200/800'
                                : activeId === 'sound'
                                  ? 'https://picsum.photos/seed/music/1200/800'
                                  : activeId === 'menu'
                                    ? 'https://picsum.photos/seed/food/1200/800'
                                    : activeId === 'uniforms'
                                      ? 'https://picsum.photos/seed/staff/1200/800'
                                      : activeId === 'furniture'
                                        ? 'https://picsum.photos/seed/furniture/1200/800'
                                        : `https://picsum.photos/seed/${activeElement.id}/1200/800?grayscale`
                      } 
                      alt={activeElement.title}
                      className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                        activeId === 'uniforms' 
                          ? 'object-top opacity-90' 
                          : 'object-[center_35%] opacity-40'
                      }`}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                    
                    {activeId === 'sound' && (
                      <a 
                        href="https://open.spotify.com/playlist/3VUPA31RZIHGmww45MSbTq?si=b76a62fbd4bf40ea" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 backdrop-blur-[2px]"
                      >
                        <div className="flex flex-col items-center gap-4 scale-75 group-hover:scale-100 transition-transform duration-500">
                          <div className="bg-[#1DB954] p-5 rounded-full shadow-2xl shadow-[#1DB954]/20">
                            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white">
                              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.491 17.306c-.215.353-.674.464-1.027.249-2.846-1.738-6.429-2.131-10.648-1.169-.403.092-.809-.16-.901-.563-.092-.403.16-.809.563-.901 4.621-1.057 8.583-.605 11.764 1.337.353.215.464.674.249 1.027zm1.468-3.258c-.272.441-.849.581-1.29.309-3.258-2.002-8.225-2.583-12.08-1.413-.498.151-1.022-.133-1.173-.631-.151-.498.133-1.022.631-1.173 4.407-1.337 9.888-.68 13.603 1.604.441.272.581.849.309 1.29zm.126-3.403c-3.907-2.321-10.347-2.534-14.108-1.393-.599.182-1.238-.162-1.42-.761-.182-.599.162-1.238.761-1.42 4.316-1.31 11.439-1.063 15.903 1.588.538.319.715 1.012.396 1.55-.319.538-1.012.715-1.55.396z"/>
                            </svg>
                          </div>
                          <span className="text-white font-bold uppercase tracking-widest text-[10px] bg-black/60 px-4 py-2 rounded-full border border-white/10">Listen on Spotify</span>
                        </div>
                      </a>
                    )}

                    <div className="absolute bottom-8 left-8">
                      <div className="flex items-center gap-2 mb-2">
                        <Disc className="w-4 h-4 text-red-600 animate-spin-slow" />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">Moodboard Reference</span>
                      </div>
                      <p className="text-2xl font-bold uppercase italic tracking-tight">Visualizing the {activeElement.title} vibe</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Mobile Navigation (Visible only on small screens) */}
            <div className="lg:hidden mt-20 grid grid-cols-2 gap-4">
              {BRAND_DATA.map((element) => (
                <button
                  key={element.id}
                  onClick={() => {
                    setActiveId(element.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`p-4 text-left border rounded-lg transition-all ${
                    activeId === element.id 
                      ? 'bg-red-600 border-red-600 text-white' 
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                  }`}
                >
                  <div className="mb-2">{element.icon}</div>
                  <span className="text-[10px] uppercase font-bold tracking-widest">{element.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="lg:ml-72 border-t border-zinc-800 py-12 px-6 md:px-12 bg-zinc-950">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <FlameKindling className="text-red-600 w-8 h-8" />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Mojo's Fire & Smoke BBQ</p>
              <p className="text-[10px] text-zinc-600">© 2026 All Rights Reserved. Smoked low, played loud.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-red-600 transition-colors"><Music className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-500 hover:text-red-600 transition-colors"><Utensils className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-500 hover:text-red-600 transition-colors"><Zap className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
