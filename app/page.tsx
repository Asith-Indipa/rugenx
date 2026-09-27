'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight,
  Box,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Factory,
  FlaskConical,
  Gauge,
  Menu,
  Recycle,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Thermometer,
  Wheat,
  Wrench,
  X,
  Zap,
} from 'lucide-react'

const capabilities = [
  ['01', 'Engineering Consultancy', 'Technical analysis, problem solving and decision support.', Gauge],
  ['02', 'Product Development', 'From concept architecture to production-ready design.', Box],
  ['03', 'R&D and Innovation', 'Feasibility studies, experimental development and testing.', FlaskConical],
  ['04', 'CAE & Simulation', 'CFD, FEA and thermal analysis before you build.', Settings2],
  ['05', 'Industrial Automation', 'Sensor-led monitoring, controls and connected machines.', Cpu],
  ['06', 'Process Optimisation', 'Improve productivity, energy efficiency and quality.', Zap],
  ['07', 'Prototyping & Testing', 'Functional prototypes, test rigs and validation.', Wrench],
  ['08', 'Manufacturing Support', 'Fabrication drawings, suppliers and commissioning.', Factory],
] as const

const industries = [
  {
    number: '01',
    title: 'Manufacturing & Production',
    category: ['all', 'manufacturing', 'automation'],
    description: 'Custom machinery, high-speed production systems, process debottlenecking, and fabrication support.',
    icon: Factory,
    tags: ['Machinery Design', 'Line Automation', 'OEE Optimisation', 'Fabrication'],
  },
  {
    number: '02',
    title: 'Food & Agro Processing',
    category: ['all', 'processing', 'rd'],
    description: 'Controlled drying, dehydration technologies, grinding, pulverising, and hygienic process automation.',
    icon: Wheat,
    tags: ['Drying & Dehydration', 'Grinding Systems', 'Process Control', 'Sanitary Rigs'],
  },
  {
    number: '03',
    title: 'Waste & Recycling Tech',
    category: ['all', 'processing'],
    description: 'Plastic sorting and shredding lines, material recovery facilities, and resource recovery technologies.',
    icon: Recycle,
    tags: ['Plastic Recycling', 'Material Recovery', 'Sorting Systems', 'Circular Tech'],
  },
  {
    number: '04',
    title: 'Industrial Automation & IoT',
    category: ['all', 'automation', 'manufacturing'],
    description: 'PLC architectures, sensor integration, machine-to-cloud telemetry, and predictive condition monitoring.',
    icon: Cpu,
    tags: ['PLC & SCADA', 'Industrial IoT', 'Sensor Networks', 'Telemetry'],
  },
  {
    number: '05',
    title: 'Energy & Thermal Systems',
    category: ['all', 'processing', 'automation'],
    description: 'Heat exchangers, combustion and drying thermal analysis, waste heat recovery, and energy audits.',
    icon: Thermometer,
    tags: ['Heat Transfer', 'Thermal CFD', 'Waste Heat Recovery', 'Energy Audits'],
  },
  {
    number: '06',
    title: 'Automotive & Transport',
    category: ['all', 'manufacturing'],
    description: 'Structural and fatigue CAE analysis, EV subsystem packaging, drivetrain components, and test rigs.',
    icon: Gauge,
    tags: ['FEA & CFD Analysis', 'EV Subsystems', 'Rapid Prototyping', 'Structural Design'],
  },
  {
    number: '07',
    title: 'SMEs & Emerging Startups',
    category: ['all', 'rd'],
    description: 'Fractional engineering leadership, proof-of-concept builds, CAD/CAM drafting, and fast-track scaling.',
    icon: Box,
    tags: ['Fractional R&D', 'POC to MVP', 'Design Support', 'Supplier Sourcing'],
  },
  {
    number: '08',
    title: 'Custom & Bespoke Sectors',
    category: ['all', 'manufacturing', 'rd'],
    description: 'Multidisciplinary engineering for non-standard requirements, specialised test rigs, and novel industrial tech.',
    icon: Sparkles,
    tags: ['Custom Machinery', 'Test Rigs', 'Turnkey Solutions', 'Feasibility Studies'],
    isCta: true,
  },
] as const

const focusAreas = ['Automated processing systems', 'Drying & dehydration technologies', 'Grinding & powder processing', 'Waste plastic processing', 'Industrial monitoring', 'Custom machinery']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCapability, setActiveCapability] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [activeIndustryCategory, setActiveIndustryCategory] = useState('all')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3)
      else if (window.innerWidth >= 768) setItemsPerView(2)
      else setItemsPerView(1)
    }

    // Set initial
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCapability((prev) => {
        const maxIndex = capabilities.length - itemsPerView
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, 4500)

    return () => clearInterval(timer)
  }, [itemsPerView])

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#FFFFFF] text-[#1F2937]">
      <header className="sticky top-0 z-50 border-b border-[#E5E7EB]/80 bg-[#FFFFFF]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="RUGENX home">
            <Image
              src="/RugenX - Logo_BLACK.png"
              alt="RUGENX Logo"
              width={160}
              height={84}
              className="h-9 w-auto object-contain"
              priority
            />
          </a>
          <div className="hidden items-center gap-7 text-[11px] font-bold uppercase tracking-[0.14em] text-[#4B5563] lg:flex"><a href="#about" className="hover:text-[#D99A0F]">About</a><a href="#capabilities" className="hover:text-[#D99A0F]">Services</a><a href="#industries" className="hover:text-[#D99A0F]">Industries</a><a href="#work" className="hover:text-[#D99A0F]">How we work</a></div>
          <a href="#contact" className="hidden border border-[#1F2937] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors hover:border-[#D99A0F] hover:text-[#8C6109] sm:block">Start a project <ArrowUpRight className="ml-2 inline" size={14} /></a>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
        {menuOpen && <div className="border-t border-[#E5E7EB] bg-white px-6 py-5 lg:hidden"><div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest"><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#capabilities" onClick={() => setMenuOpen(false)}>Services</a><a href="#industries" onClick={() => setMenuOpen(false)}>Industries</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div></div>}
      </header>

      <section className="hero-grid relative border-b border-[#E5E7EB] bg-[#FFFFFF]">
        <div className="absolute right-[-10%] top-20 h-[620px] w-[620px] rounded-full border border-[#FCD580]/70" aria-hidden="true" /><div className="absolute right-[9%] top-40 h-[360px] w-[360px] rounded-full border border-[#FCD580]/60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-10 lg:pb-28 lg:pt-32"><div className="max-w-5xl"><p className="eyebrow"><span className="mr-3 inline-block h-px w-9 bg-[#F8B526]" />Engineering consultancy · Sri Lanka</p><h1 className="mt-7 max-w-4xl text-[clamp(3.8rem,9vw,8.7rem)] font-semibold leading-[.86] tracking-[-.08em]">Engineered<br /><span className="text-[#F8B526]">to perform.</span></h1><p className="mt-10 max-w-2xl text-base leading-7 text-[#4B5563] md:text-lg">Engineering Consultancy | Product Development | R&D | Simulation | Automation | Industrial Solutions</p><div className="mt-9 flex flex-wrap gap-4"><a href="#contact" className="inline-flex items-center gap-3 bg-[#F8B526] px-5 py-3.5 text-sm font-bold transition-colors hover:bg-[#D99A0F]">Get in touch <ArrowUpRight size={18} /></a><a href="#capabilities" className="inline-flex items-center gap-2 px-3 py-3.5 text-sm font-bold text-[#8C6109] hover:text-[#1F2937]">Explore services <ChevronRight size={17} /></a></div></div><div className="mt-20 grid max-w-3xl grid-cols-2 gap-6 border-t border-[#E5E7EB] pt-5 text-xs uppercase tracking-[.14em] text-[#4B5563] md:grid-cols-4"><div><strong className="block font-mono text-2xl text-[#1F2937]">360°</strong>Development cycle</div><div><strong className="block font-mono text-2xl text-[#1F2937]">8+</strong>Core capabilities</div><div><strong className="block font-mono text-2xl text-[#1F2937]">01</strong>Technical partner</div><div><strong className="block font-mono text-2xl text-[#1F2937]">∞</strong>Room to improve</div></div></div>
      </section>

      <section id="about" className="relative overflow-hidden border-y border-[#E5E7EB] bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Left Column (Sticky) */}
            <div className="lg:col-span-7 lg:pr-12 xl:pr-16">
              <div className="sticky top-32">
                
                <h2 className="mt-6 text-5xl font-semibold leading-[1.1] tracking-[-.06em] md:text-6xl/tight">
                  Practical ideas.<br />
                  <span className="text-[#8C6109]">Engineered well.</span>
                </h2>

                <p className="mt-10 text-xl font-light leading-relaxed tracking-[-.01em] text-[#1F2937] md:text-2xl md:leading-[1.6]">
                  <strong className="font-semibold text-[#8C6109]">RUGENX</strong> is an engineering consultancy and industrial technology solutions company based in Sri Lanka. We combine design, simulation, research, automation, prototyping and manufacturing expertise to turn difficult technical problems into dependable outcomes.
                </p>
              </div>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-5">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {/* Vision Card */}
                <div className="group relative overflow-hidden border border-[#E5E7EB] bg-[#FEFCF7] p-8 transition-all duration-300 hover:border-[#F8B526] hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1">
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-[#FCD580]/15 transition-transform duration-700 group-hover:scale-[2.5]"></div>
                  <div className="relative">
                    <Target size={28} strokeWidth={1.5} className="mb-6 text-[#D99A0F]" />
                    <h3 className="font-mono text-sm font-bold tracking-widest text-[#B37D0C] uppercase">Our Vision</h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-[#4B5563]">
                      A future where locally relevant engineering makes industry more productive, resilient and sustainable.
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F8B526] transition-all duration-500 ease-out group-hover:w-full"></div>
                </div>

                {/* Commitment Card */}
                <div className="group relative overflow-hidden border border-[#E5E7EB] bg-[#FEFCF7] p-8 transition-all duration-300 hover:border-[#F8B526] hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1">
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-[#FCD580]/15 transition-transform duration-700 group-hover:scale-[2.5]"></div>
                  <div className="relative">
                    <ShieldCheck size={28} strokeWidth={1.5} className="mb-6 text-[#D99A0F]" />
                    <h3 className="font-mono text-sm font-bold tracking-widest text-[#B37D0C] uppercase">Our Commitment</h3>
                    <ul className="mt-4 flex flex-col gap-3 text-[14px] leading-relaxed text-[#4B5563]">
                      <li className="flex items-start gap-2 border-t border-[#E5E7EB] pt-3 group-hover:border-[#FCD580]/40 transition-colors">
                        <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F8B526]"></span> Solve a problem
                      </li>
                      <li className="flex items-start gap-2 border-t border-[#E5E7EB] pt-3 group-hover:border-[#FCD580]/40 transition-colors">
                        <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F8B526]"></span> Improve a process
                      </li>
                      <li className="flex items-start gap-2 border-t border-[#E5E7EB] pt-3 group-hover:border-[#FCD580]/40 transition-colors">
                        <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F8B526]"></span> Develop a technology
                      </li>
                      <li className="flex items-start gap-2 border-t border-[#E5E7EB] pt-3 group-hover:border-[#FCD580]/40 transition-colors">
                        <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F8B526]"></span> Create a product
                      </li>
                      <li className="flex items-start gap-2 border-t border-[#E5E7EB] pt-3 group-hover:border-[#FCD580]/40 transition-colors">
                        <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F8B526]"></span> Build a better future
                      </li>
                    </ul>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F8B526] transition-all duration-500 ease-out group-hover:w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="border-y border-[#E5E7EB] bg-[#FEFCF7]">
        <div className="mx-auto max-w-7xl px-6 pt-5 pb-24 lg:px-10 lg:pt-10 lg:pb-32">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-.06em] md:text-6xl">The technical depth<br /><span className="text-[#8C6109]">to move forward.</span></h2>
            </div>
            <div className="flex flex-col items-start gap-6 md:items-end">
              
              {/* Carousel Controls */}
              <div className="flex gap-2 hidden md:flex">
                <button
                  onClick={() => setActiveCapability((prev) => (prev === 0 ? capabilities.length - itemsPerView : prev - 1))}
                  className="flex h-12 w-12 items-center justify-center border border-[#E5E7EB] bg-white text-[#4B5563] transition-colors hover:border-[#FCD580] hover:text-[#B37D0C] focus:outline-none focus:ring-2 focus:ring-[#F8B526]"
                  aria-label="Previous capabilities"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setActiveCapability((prev) => (prev >= capabilities.length - itemsPerView ? 0 : prev + 1))}
                  className="flex h-12 w-12 items-center justify-center border border-[#E5E7EB] bg-white text-[#4B5563] transition-colors hover:border-[#FCD580] hover:text-[#B37D0C] focus:outline-none focus:ring-2 focus:ring-[#F8B526]"
                  aria-label="Next capabilities"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-14 w-full">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeCapability * (100 / itemsPerView)}%)` }}
              >
                {capabilities.map(([number, title, description, Icon], index) => {
                  const isActive = index >= activeCapability && index < activeCapability + itemsPerView;
                  return (
                    <div
                      key={number}
                      aria-hidden={!isActive}
                      style={{ width: `${100 / itemsPerView}%` }}
                      className="shrink-0 p-2 md:p-3"
                    >
                      <div className="group relative flex h-full min-h-[320px] cursor-pointer flex-col justify-between border border-[#E5E7EB] bg-[#FFFFFF] p-8 transition-colors hover:border-[#FCD580] hover:bg-[#FEFCF7] focus-within:ring-2 focus-within:ring-[#F8B526]">
                        <div className="absolute right-0 top-0 h-0 w-0 border-l-[32px] border-t-[32px] border-l-transparent border-t-[#F8B526] opacity-0 transition-opacity group-hover:opacity-100" />
                        <div>
                          <div className="flex items-start justify-between">
                            <span className="font-mono text-sm tracking-widest text-[#B37D0C]">{number}</span>
                            <Icon size={26} strokeWidth={1.5} className="text-[#9CA3AF] transition-colors group-hover:text-[#F8B526]" />
                          </div>
                          <h3 className="mt-12 text-2xl font-semibold tracking-[-.04em] text-[#1F2937] md:text-3xl lg:text-[1.75rem]">{title}</h3>
                          <p className="mt-4 text-[15px] leading-relaxed text-[#4B5563]">{description}</p>
                        </div>
                        <div className="mt-10 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4B5563] transition-colors group-hover:text-[#8C6109]">
                          <a href="#contact" className="before:absolute before:inset-0 focus:outline-none">Learn more </a>
                          <ArrowUpRight size={16} className="relative z-10" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Controls & Dots */}
            <div className="mt-10 flex items-center justify-between md:justify-center">
              <button
                onClick={() => setActiveCapability((prev) => (prev === 0 ? capabilities.length - itemsPerView : prev - 1))}
                className="flex h-10 w-10 items-center justify-center border border-[#E5E7EB] bg-white text-[#4B5563] transition-colors hover:border-[#FCD580] hover:text-[#B37D0C] focus:outline-none focus:ring-2 focus:ring-[#F8B526] md:hidden"
                aria-label="Previous capabilities"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: Math.max(1, capabilities.length - itemsPerView + 1) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCapability(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 focus:outline-none ${activeCapability === idx ? 'w-8 bg-[#F8B526]' : 'w-2 bg-[#E5E7EB] hover:bg-[#D1D5DB]'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveCapability((prev) => (prev >= capabilities.length - itemsPerView ? 0 : prev + 1))}
                className="flex h-10 w-10 items-center justify-center border border-[#E5E7EB] bg-white text-[#4B5563] transition-colors hover:border-[#FCD580] hover:text-[#B37D0C] focus:outline-none focus:ring-2 focus:ring-[#F8B526] md:hidden"
                aria-label="Next capabilities"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">How we work / 03</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.06em] md:text-6xl">Design.<br />Simulate.<br /><span className="text-[#8C6109]">Improve.</span></h2></div><div className="relative"><div className="absolute left-6 top-7 h-[calc(100%-55px)] w-px bg-[#FCD580]" />{[['01', 'Discover', 'Understand the challenge, the context and the opportunity.'], ['02', 'Develop', 'Design, simulate and refine the right technical solution.'], ['03', 'Deliver', 'Prototype, validate and support the path to production.'], ['04', 'Evolve', 'Measure results and keep improving what matters.']].map(([number, title, body]) => <div key={number} className="relative flex gap-7 pb-10 last:pb-0"><span className="z-10 flex h-12 w-12 shrink-0 items-center justify-center border border-[#FCD580] bg-[#FFFFFF] font-mono text-xs text-[#8C6109]">{number}</span><div><h3 className="text-2xl font-semibold tracking-[-.04em]">{title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-[#4B5563]">{body}</p></div></div>)}</div></div></section>

      <section id="industries" className="relative overflow-hidden border-y border-[#E5E7EB] bg-[#FEFCF7] py-24 lg:py-32">
        {/* Subtle decorative background glows */}
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#FCD580]/15 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-[#F8B526]/10 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* Section Header */}
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:mb-16">
            <div className="max-w-2xl">
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-[#F8B526]" />
                Industries we serve / 04
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-.06em] text-[#1F2937] md:text-6xl">
                Useful in the<br />
                <span className="text-[#8C6109]">real world.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#4B5563] md:text-lg">
                We combine domain-specific mechanical, thermal, and automation expertise to solve high-impact engineering challenges across core industrial sectors.
              </p>
            </div>

            {/* Interactive Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Sectors' },
                { id: 'manufacturing', label: 'Manufacturing' },
                { id: 'processing', label: 'Processing & Food' },
                { id: 'automation', label: 'Automation & Energy' },
                { id: 'rd', label: 'R&D & Startups' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveIndustryCategory(tab.id)}
                  className={`border px-3.5 py-2 font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F8B526] ${
                    activeIndustryCategory === tab.id
                      ? 'border-[#1F2937] bg-[#1F2937] text-[#F8B526] shadow-sm'
                      : 'border-[#E5E7EB] bg-white text-[#4B5563] hover:border-[#FCD580] hover:text-[#1F2937]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item) => {
              const isMatched = activeIndustryCategory === 'all' || item.category.includes(activeIndustryCategory as any)
              const Icon = item.icon

              return (
                <div
                  key={item.number}
                  className={`group relative flex flex-col justify-between overflow-hidden border bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_35px_rgba(248,181,38,0.12)] ${
                    isMatched
                      ? 'border-[#E5E7EB] opacity-100 hover:border-[#F8B526]'
                      : 'border-[#E5E7EB]/50 opacity-40 grayscale-[40%] hover:opacity-90 hover:grayscale-0'
                  } ${item.isCta ? 'border-[#FCD580] bg-gradient-to-br from-white via-[#FEFCF7] to-[#FEEAB3]/30' : ''}`}
                >
                  {/* Top gold accent line */}
                  <div className="absolute left-0 top-0 h-1 w-0 bg-[#F8B526] transition-all duration-500 ease-out group-hover:w-full" />

                  {/* Corner geometric decoration */}
                  <div className="absolute right-0 top-0 h-0 w-0 border-l-[28px] border-t-[28px] border-l-transparent border-t-[#FCD580]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    {/* Header inside Card: Number + Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold tracking-widest text-[#B37D0C]">
                        {item.number}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center border border-[#FCD580]/60 bg-[#FEFCF7] text-[#B37D0C] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-3deg] group-hover:border-[#F8B526] group-hover:bg-[#F8B526] group-hover:text-[#1F2937] group-hover:shadow-sm">
                        <Icon size={22} strokeWidth={1.75} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mt-8 text-xl font-semibold tracking-tight text-[#1F2937] transition-colors group-hover:text-[#8C6109]">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-[14px] leading-relaxed text-[#4B5563]">
                      {item.description}
                    </p>

                    {/* Tag Pills */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[#E5E7EB] bg-[#FEFCF7] px-2 py-0.5 font-mono text-[10px] font-medium text-[#4B5563] transition-colors duration-200 group-hover:border-[#FCD580] group-hover:text-[#8C6109]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom action link */}
                  
                </div>
              )
            })}
          </div>

          {/* Bottom Trust/Stats Strip */}
          
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Innovation / 05</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.06em] md:text-6xl">Focused on<br /><span className="text-[#8C6109]">what's next.</span></h2></div><div className="grid gap-3 sm:grid-cols-2">{focusAreas.map((area, index) => <div key={area} className="flex items-center gap-4 border border-[#E5E7EB] bg-[#FEFCF7] p-5"><span className="font-mono text-xs text-[#B37D0C]">0{index + 1}</span><span className="text-sm font-semibold">{area}</span></div>)}</div></div></section>

      <section id="leadership" className="border-y border-[#E5E7EB] bg-[#FFFFFF]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-16">
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-[#F8B526]"></span>
              Leadership / 06
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.06em] md:text-6xl">
              Led by <span className="text-[#8C6109]">engineers.</span>
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Founder 1 */}
            <div className="group">
              <div className="mb-8 flex items-center gap-6">
                {/* Image Placeholder */}
                <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E5E7EB] bg-[#FEFCF7] shadow-sm transition-all duration-500 ease-out group-hover:border-[#F8B526]">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#B37D0C]/50">Photo</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Kolitha Indrachapa Thuduhena</h3>
                  <p className="mt-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-[#B37D0C]">Founder & Director</p>
                </div>
              </div>
              <div className="space-y-4 text-[15px] leading-relaxed text-[#4B5563]">
                <p>
                  Kolitha is a dedicated electromechanical engineer, entrepreneur, and practical problem-solver with a strong foundation in engineering design and applied innovation. A graduate of the Faculty of Technology, University of Ruhuna, he founded RugenX with a vision to channel technical expertise into practical, real-world engineering solutions.
                </p>
                <p>
                  His technical proficiency spans 3D CAD modeling, system programming, and fault diagnosis, skills applied extensively across industrial projects. With extensive professional experience including work with Diesel &amp; Motor Engineering PLC (DIMO) and research into Digital Twin systems, he drives RugenX's vision forward with a hands-on business mindset.
                </p>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="group">
              <div className="mb-8 flex items-center gap-6">
                {/* Image Placeholder */}
                <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E5E7EB] bg-[#FEFCF7] shadow-sm transition-all duration-500 ease-out group-hover:border-[#F8B526]">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#B37D0C]/50">Photo</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Harshana Laknath Subasinghe</h3>
                  <p className="mt-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-[#B37D0C]">Co-Founder & Director</p>
                </div>
              </div>
              <div className="space-y-4 text-[15px] leading-relaxed text-[#4B5563]">
                <p>
                  Harshana is a mechanical engineer and practical problem solver with over nine years of experience in engineering design, industrial consulting, and research. He specializes in transforming complex engineering challenges into reliable, cost-effective solutions, applying deep expertise in 3D CAD/CAM modeling, rapid prototyping, and FEA/CFD simulations.
                </p>
                <p>
                  Holding a B.Sc. with First Class Honours and a Best Student Award for Engineering Design, his previous leadership roles include serving as Mechanical Coordinator for an EV Development Center. A dedicated mentor and university educator who has supervised over 30 engineering design projects, Harshana expertly oversees operations with a disciplined, results-driven approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#1F2937] text-white">
        <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-10 lg:pt-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#F8B526]">Start a conversation / 07</p>
              <h2 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-.07em] md:text-7xl">
                Let's engineer<br />
                <span className="text-[#F8B526]">the future together.</span>
              </h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-white/70">
                Have a technical challenge, product idea or process ready to improve? Tell us where to start.
              </p>
              <a href="mailto:rugenxinnovations@gmail.com" className="mt-7 inline-flex items-center gap-3 border-b border-[#F8B526] pb-2 text-sm font-bold text-[#F8B526] transition-colors hover:text-white">
                rugenxinnovations@gmail.com <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <footer className="mt-32 border-t border-white/15 pb-12 pt-16">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {/* Branding and Contact */}
              <div className="lg:col-span-1">
                <a href="#top" className="flex items-center gap-3" aria-label="RUGENX home">
                  <Image
                    src="/RugenX - Logo_BLACK.png"
                    alt="RUGENX Logo"
                    width={160}
                    height={84}
                    className="h-9 w-auto object-contain brightness-0 invert"
                  />
                </a>
                <p className="mt-6 text-[13px] leading-relaxed text-white/60">
                  Engineering consultancy & industrial technology solutions company based in Sri Lanka.
                </p>
                <div className="mt-8 space-y-2 text-[13px] text-white/70">
                  <p>+94 74 18 500 60</p>
                  <p>563/C, Nawagamuwa South,<br />Ranala, Sri Lanka.</p>
                </div>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#F8B526]">Navigation</h3>
                <ul className="mt-6 space-y-3 text-[13px] text-white/70">
                  <li><a href="#top" className="transition-colors hover:text-white">Home</a></li>
                  <li><a href="#about" className="transition-colors hover:text-white">About Us</a></li>
                  <li><a href="#capabilities" className="transition-colors hover:text-white">Services</a></li>
                  <li><a href="#industries" className="transition-colors hover:text-white">Industries</a></li>
                  <li><a href="#contact" className="transition-colors hover:text-white">Contact</a></li>
                </ul>
              </div>

              {/* Capabilities */}
              <div>
                <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#F8B526]">Capabilities</h3>
                <ul className="mt-6 space-y-3 text-[13px] text-white/70">
                  <li>Engineering Consultancy</li>
                  <li>Product Development</li>
                  <li>CAE & Simulation</li>
                  <li>Industrial Automation</li>
                  <li>Research & Development</li>
                  <li>Prototyping & Testing</li>
                </ul>
              </div>

              {/* Leadership */}
              <div>
                <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#F8B526]">Leadership</h3>
                <ul className="mt-6 space-y-5 text-sm text-white/70">
                  <li>
                    <strong className="block font-medium text-white">Kolitha Indrachapa Thuduhena</strong>
                    <span className="text-xs text-white/50">Founder & Director</span>
                  </li>
                  <li>
                    <strong className="block font-medium text-white">Harshana Laknath Subasinghe</strong>
                    <span className="text-xs text-white/50">Co-Founder & Director</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-20 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 text-[11px] uppercase tracking-[.15em] text-white/40 sm:flex-row">
              <span>RUGENX (PVT) LTD · Engineered to perform.</span>
              <span>© {new Date().getFullYear()} RUGENX</span>
            </div>
          </footer>
        </div>
      </section>
    </main>
  )
}
