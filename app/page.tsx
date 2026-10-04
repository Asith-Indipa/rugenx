'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  ChevronLeft,
  ChevronRight,
  Cog,
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
  Handshake,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

const capabilities = [
  ['01', 'Engineering Consultancy', 'Technical analysis, problem solving and engineering decision support.', Gauge],
  ['02', 'Product Development', 'From concept development to production-ready engineered products.', Box],
  ['03', 'Research & Development', 'New technologies, machinery, processes and customised engineering solutions.', FlaskConical],
  ['04', 'CAE & Simulation', 'Evaluate and optimise designs before physical manufacturing.', Settings2],
  ['05', 'Industrial Automation', 'Automation, monitoring, control and intelligent industrial systems.', Cpu],
  ['06', 'Product & Process Optimisation', 'Improve products, machinery and manufacturing processes.', Zap],
  ['07', 'Prototyping & Testing', 'Develop prototypes and validate engineering concepts.', Wrench],
  ['08', 'Manufacturing Support', 'Support fabrication, assembly, commissioning and implementation.', Factory],
] as const

const industries = [
  {
    number: '01',
    title: 'Manufacturing',
    category: ['all', 'manufacturing'],
    description: 'Machinery, production systems, process optimisation, automation and engineering support.',
    icon: Factory,
    image: '/industry-manufacturing.jpg',
    tags: ['Machinery', 'Production Systems', 'Process Optimisation', 'Automation', 'Engineering Support'],
  },
  {
    number: '02',
    title: 'Food & Agro Processing',
    category: ['all', 'processing'],
    description: 'Processing machinery, drying systems, grinding systems and automation.',
    icon: Wheat,
    image: '/industry-food-agro.jpg',
    tags: ['Processing Machinery', 'Drying Systems', 'Grinding Systems', 'Automation'],
  },
  {
    number: '03',
    title: 'Waste Management & Recycling',
    category: ['all', 'processing'],
    description: 'Recycling systems, material processing and resource recovery.',
    icon: Recycle,
    image: '/industry-waste-recycling.jpg',
    tags: ['Recycling Systems', 'Material Processing', 'Resource Recovery'],
  },
  {
    number: '04',
    title: 'Industrial Automation',
    category: ['all', 'automation'],
    description: 'Automated machinery, sensor systems, monitoring and control.',
    icon: Cpu,
    image: '/industry-automation.jpg',
    tags: ['Automated Machinery', 'Sensor Systems', 'Monitoring & Control'],
  },
  {
    number: '05',
    title: 'Energy & Thermal Systems',
    category: ['all', 'processing', 'automation'],
    description: 'Thermal equipment, heat transfer systems and energy optimisation.',
    icon: Thermometer,
    image: '/industry-energy-thermal.jpg',
    tags: ['Thermal Equipment', 'Heat Transfer', 'Energy Optimisation'],
  },
  {
    number: '06',
    title: 'Automotive & Transportation',
    category: ['all', 'manufacturing'],
    description: 'Engineering analysis, product development and mechanical systems.',
    icon: Gauge,
    image: '/industry-automotive-transport.jpg',
    tags: ['Engineering Analysis', 'Product Development', 'Mechanical Systems'],
  },
  {
    number: '07',
    title: 'SMEs & Startups',
    category: ['all', 'rd'],
    description: 'Product development, prototype development, engineering consultancy and external R&D.',
    icon: Box,
    image: '/industry-smes-startups.jpg',
    tags: ['Product Development', 'Prototype Development', 'Engineering Consultancy', 'External R&D'],
  },
] as const

function DryingIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 4.5c1.2 2.2-1.2 4.4 0 6.6 1.2 2.2-1.2 4.4 0 6.6" />
      <path d="M12 4.5c1.2 2.2-1.2 4.4 0 6.6 1.2 2.2-1.2 4.4 0 6.6" />
      <path d="M17 4.5c1.2 2.2-1.2 4.4 0 6.6 1.2 2.2-1.2 4.4 0 6.6" />
    </svg>
  )
}

function SensorWavesIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <path d="M16 8.5a5 5 0 0 1 0 7" />
      <path d="M8 15.5a5 5 0 0 1 0-7" />
      <path d="M19 5.5a9 9 0 0 1 0 13" />
      <path d="M5 18.5a9 9 0 0 1 0-13" />
    </svg>
  )
}

function CrossedToolsIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14.7 10.3 19.5 5.5a2.5 2.5 0 0 0-3.5-3.5l-5 5" />
      <path d="m3.5 20.5 7.1-7.1" />
      <path d="m20.5 20.5-7.1-7.1" />
      <path d="m8.9 4.9-5 5a2.8 2.8 0 0 0 4 4l5-5" />
    </svg>
  )
}

const developmentAreas = [
  {
    number: '01',
    title: 'Automated Processing Systems',
    description: 'Development of automated systems for food and agricultural processing.',
    icon: Factory,
    tag: 'Automation & Processing',
  },
  {
    number: '02',
    title: 'Drying & Dehydration Technologies',
    description: 'Engineering of controlled drying systems with temperature, humidity, time, and process monitoring.',
    icon: DryingIcon,
    tag: 'Thermal & Process Control',
  },
  {
    number: '03',
    title: 'Grinding & Powder Processing',
    description: 'Development of grinding, milling, material handling, collection, and packaging systems.',
    icon: Cog,
    tag: 'Milling & Solids Handling',
  },
  {
    number: '04',
    title: 'Waste Plastic Processing',
    description: 'Development and integration of systems for plastic sorting, processing, recycling, and material recovery.',
    icon: Recycle,
    tag: 'Recycling & Resource Recovery',
  },
  {
    number: '05',
    title: 'Industrial Monitoring',
    description: 'Sensor-based systems for monitoring industrial parameters and equipment performance.',
    icon: SensorWavesIcon,
    tag: 'IIoT & Real-Time Telemetry',
  },
  {
    number: '06',
    title: 'Custom Machinery',
    description: 'Design and development of machinery according to specific industrial requirements.',
    icon: CrossedToolsIcon,
    tag: 'Custom Engineered Systems',
  },
]

const techCapabilities = [
  {
    category: 'Digital Engineering',
    skills: ['3D CAD', 'CAD/CAM', 'Digital Prototyping'],
    icon: Box,
  },
  {
    category: 'Simulation',
    skills: ['CFD', 'FEA', 'Thermal', 'Structural', 'Flow Analysis'],
    icon: Gauge,
  },
  {
    category: 'Automation',
    skills: ['Sensors', 'PLC', 'Microcontrollers', 'Industrial IoT'],
    icon: Cpu,
  },
  {
    category: 'Manufacturing',
    skills: ['Fabrication', 'Machining', 'Sheet Metal', 'Assembly'],
    icon: Factory,
  },
] as const


const engagementModels = [
  {
    number: '01',
    title: 'Project-Based Engineering',
    description: 'Complete engineering solutions developed for specific technical requirements, milestones, and deliverable targets.',
  },
  {
    number: '02',
    title: 'Engineering Consultancy',
    description: 'Specialist technical expertise and diagnostic reviews provided to solve difficult bottlenecks and support critical decisions.',
  },
  {
    number: '03',
    title: 'External R&D Partnership',
    description: 'Long-term strategic collaboration where RUGENX functions seamlessly as your external multidisciplinary R&D wing.',
  },
  {
    number: '04',
    title: 'Product Development Partnership',
    description: 'Collaborative development of new industrial hardware from early-stage conceptualization through to commercialization.',
  },
  {
    number: '05',
    title: 'Technology Integration',
    description: 'Interfacing mechanical, electronic, IoT sensors, firmware, and PLC automation into cohesive, reliable industrial systems.',
  },
  {
    number: '06',
    title: 'Manufacturing & Implementation Support',
    description: 'Hands-on engineering support across precision fabrication, vendor coordination, installation, and field commissioning.',
  },
] as const

function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 750,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)'
    switch (direction) {
      case 'up':
        return 'translate3d(0, 32px, 0)'
      case 'down':
        return 'translate3d(0, -32px, 0)'
      case 'left':
        return 'translate3d(32px, 0, 0)'
      case 'right':
        return 'translate3d(-32px, 0, 0)'
      default:
        return 'translate3d(0, 0, 0)'
    }
  }

  return (
    <div
      ref={ref}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'transform, opacity',
      }}
      className={className}
    >
      {children}
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [heroMounted, setHeroMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const [activeCapability, setActiveCapability] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)
  const [activeIndustryCategory, setActiveIndustryCategory] = useState('all')
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [industryItemsPerView, setIndustryItemsPerView] = useState(4)

  useEffect(() => {
    setHeroMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        const progress = (window.scrollY / docHeight) * 100
        setScrollProgress(Math.min(100, Math.max(0, progress)))
      }

      const sectionIds = ['contact', 'leadership', 'engagement', 'rd', 'industries', 'work', 'capabilities', 'about', 'top']
      const scrollPosition = window.scrollY + 140

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          const top = rect.top + window.scrollY
          if (scrollPosition >= top) {
            if (id === 'engagement' || id === 'rd') {
              setActiveSection('rd')
            } else if (id === 'work' || id === 'capabilities') {
              setActiveSection('capabilities')
            } else if (id === 'leadership' || id === 'contact') {
              setActiveSection('contact')
            } else {
              setActiveSection(id)
            }
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.replace('#', '')
      if (targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setActiveSection('top')
        window.history.pushState(null, '', '#top')
        setMenuOpen(false)
        return
      }

      const el = document.getElementById(targetId)
      if (el) {
        const headerOffset = 76
        const elementPosition = el.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
        setActiveSection(targetId)
        window.history.pushState(null, '', href)
      }
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setItemsPerView(4)
        setIndustryItemsPerView(4)
      } else if (window.innerWidth >= 1024) {
        setItemsPerView(3)
        setIndustryItemsPerView(3)
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2)
        setIndustryItemsPerView(2)
      } else {
        setItemsPerView(1)
        setIndustryItemsPerView(1)
      }
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

  const filteredIndustries = industries.filter((item) =>
    activeIndustryCategory === 'all' ? true : item.category.includes(activeIndustryCategory as any)
  )

  const navLinks = [
    { name: 'Home', href: '#top', id: 'top' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#capabilities', id: 'capabilities' },
    { name: 'Projects', href: '#industries', id: 'industries' },
    { name: 'R&D', href: '#rd', id: 'rd' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <div id="top" className="min-h-screen bg-[#FFFFFF] text-[#1F2937]">
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? 'border-[#E5E7EB] bg-white/95 shadow-sm backdrop-blur-md'
            : 'border-[#E5E7EB]/80 bg-white/95 backdrop-blur'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-[2.5px] w-full overflow-hidden bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-[#F8B526] via-[#E5A319] to-[#8C6109] transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, '#top')}
            className="flex items-center gap-3"
            aria-label="RUGENX home"
          >
            <Image
              src="icon.png"
              alt="RUGENX (PVT) LTD. ENGINEERED TO PERFORM"
              width={180}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>
          <div className="hidden items-center gap-8 text-[13px] font-medium text-[#4B5563] lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`pb-1 transition-colors ${
                    isActive
                      ? 'border-b-2 border-[#F8B526] font-semibold text-[#1F2937]'
                      : 'border-b-2 border-transparent text-[#4B5563] hover:text-[#D99A0F]'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </div>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden items-center gap-2 rounded bg-[#F8B526] px-6 py-2.5 text-xs font-bold text-[#1F2937] shadow-sm transition-all hover:bg-[#D99A0F] hover:shadow sm:inline-flex"
          >
            Get in Touch <ArrowRight size={14} />
          </a>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
        {menuOpen && (
          <div className="border-t border-[#E5E7EB] bg-white px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors ${
                    activeSection === link.id
                      ? 'text-[#D99A0F]'
                      : 'text-[#4B5563] hover:text-[#1F2937]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="overflow-x-clip">

      <section className="relative border-b border-[#E5E7EB] bg-gradient-to-br from-[#FFFFFF] via-[#FFFDF9] to-[#FEF8EB]/50 overflow-hidden">
        {/* Soft Ambient Light Glows matching the warm factory lighting in the image */}
        <div className="pointer-events-none absolute -right-10 top-0 h-[550px] w-[550px] rounded-full bg-gradient-to-bl from-[#F8B526]/12 via-[#FCD580]/8 to-transparent blur-[100px]" />
        <div className="pointer-events-none absolute right-[25%] top-[20%] h-[350px] w-[350px] rounded-full bg-[#F8B526]/8 blur-[80px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-8 py-10 lg:min-h-[520px] lg:grid-cols-12 lg:py-14">
            {/* Left Content Column with Staggered Entrance */}
            <div className="z-10 lg:col-span-5 xl:col-span-5">
              <div
                className={`flex items-center gap-3 transition-all duration-700 ease-out ${
                  heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <span className="inline-block h-[2px] w-8 bg-[#F8B526]" />
                <span className="text-[13px] font-medium text-[#4B5563]">
                  Engineering consultancy · Sri Lanka
                </span>
              </div>
              <h1
                className={`mt-5 text-[clamp(3rem,5.4vw,5.6rem)] font-extrabold leading-[.92] tracking-[-.04em] text-[#111827] transition-all duration-800 delay-100 ease-out ${
                  heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Engineered<br />
                <span className="text-[#F8B526]">to perform.</span>
              </h1>
              <p
                className={`mt-5 max-w-lg text-base leading-relaxed text-[#4B5563] md:text-[17px] transition-all duration-800 delay-200 ease-out ${
                  heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Engineering and industrial technology solutions that transform ideas and technical challenges into practical, reliable, and production-ready outcomes.
              </p>

              <div
                className={`mt-8 flex flex-wrap items-center gap-6 transition-all duration-800 delay-300 ease-out ${
                  heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="inline-flex items-center gap-2.5 rounded bg-[#F8B526] px-6 py-3.5 text-sm font-bold text-[#1F2937] shadow-sm transition-all hover:bg-[#D99A0F] hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  Start a Project <ArrowRight size={16} />
                </a>
                <a
                  href="#capabilities"
                  onClick={(e) => handleNavClick(e, '#capabilities')}
                  className="inline-flex items-center gap-2 py-3.5 text-sm font-bold text-[#1F2937] transition-all hover:text-[#B37D0C] hover:translate-x-1"
                >
                  Explore Services <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right Engineer Workstation Column with Soft Edge Fade and Smooth Float Entrance */}
            <div
              className={`relative z-0 -mr-6 sm:-mr-10 lg:-mr-16 lg:col-span-7 xl:col-span-7 lg:-ml-12 xl:-ml-16 self-end transition-all duration-1000 delay-200 ease-out ${
                heroMounted ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
              }`}
            >
              <div className="relative w-full [mask-image:radial-gradient(ellipse_92%_88%_at_52%_50%,black_65%,transparent_100%)]">
                <Image
                  src="/hero.png"
                  alt="RUGENX Engineer working on 3D CAD simulation and industrial automation workstation"
                  width={1376}
                  height={768}
                  priority
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden border-y border-[#E5E7EB] bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Left Column (Sticky) */}
            <div className="lg:col-span-7 lg:pr-12 xl:pr-16">
              <div className="sticky top-32">
                <RevealOnScroll direction="up">
                  <p className="eyebrow flex items-center gap-3">
                    <span className="h-px w-8 bg-[#F8B526]" />
                    About RUGENX / 01
                  </p>

                  <h2 className="mt-6 text-5xl font-semibold leading-[1.1] tracking-[-.06em] md:text-6xl/tight">
                    Practical ideas.<br />
                    <span className="text-[#8C6109]">Engineered well.</span>
                  </h2>

                  <p className="mt-8 text-lg font-light leading-relaxed tracking-[-.01em] text-[#1F2937] md:text-xl md:leading-[1.6]">
                    <strong className="font-semibold text-[#8C6109]">RUGENX Pvt Ltd</strong> is an engineering and industrial technology solutions company dedicated to transforming ideas, technical challenges and industrial requirements into practical, reliable and production-ready engineering outcomes.
                  </p>

                  <p className="mt-6 text-base leading-relaxed text-[#4B5563]">
                    From concept and engineering development to validation, implementation and continuous improvement, we work as a technical extension of our clients' teams.
                  </p>
                </RevealOnScroll>
              </div>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-5">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {/* Vision Card */}
                <RevealOnScroll direction="up" delay={100}>
                  <div className="group relative overflow-hidden border border-[#E5E7EB] bg-[#FEFCF7] p-8 transition-all duration-300 hover:border-[#F8B526] hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1">
                    <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-[#FCD580]/15 transition-transform duration-700 group-hover:scale-[2.5]"></div>
                    <div className="relative">
                      <Target size={28} strokeWidth={1.5} className="mb-6 text-[#D99A0F]" />
                      <h3 className="font-mono text-sm font-bold tracking-widest text-[#B37D0C] uppercase">Our Vision</h3>
                      <p className="mt-4 text-[15px] leading-relaxed text-[#4B5563]">
                        To become a leading engineering and industrial technology solutions company, delivering innovative, reliable, and sustainable solutions for the industries of tomorrow.
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F8B526] transition-all duration-500 ease-out group-hover:w-full"></div>
                  </div>
                </RevealOnScroll>

                {/* Commitment Card */}
                <RevealOnScroll direction="up" delay={250}>
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
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="relative border-y border-[#E5E7EB] bg-[#FEFCF7]">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-24 lg:px-10 lg:pt-16 lg:pb-32">
          {/* Top Row: Left Header & Subtitle + Right Engineering Visual */}
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Heading & Intro */}
            <div className="lg:col-span-5 xl:col-span-5">
              <RevealOnScroll direction="up">
                <p className="eyebrow flex items-center gap-3">
                  <span className="h-px w-8 bg-[#F8B526]" />
                  Services &amp; Capabilities / 02
                </p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-.06em] text-[#1F2937] md:text-5xl lg:text-6xl">
                  The technical depth<br />
                  <span className="text-[#8C6109]">to move forward.</span>
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4B5563]">
                  From concept to production, RUGENX provides integrated engineering services that help you design, develop and optimise solutions for a more efficient and sustainable future.
                </p>
              </RevealOnScroll>
            </div>

            {/* Right Column: Large Engineering Visual */}
            <div className="relative lg:col-span-7 xl:col-span-7">
              <RevealOnScroll direction="left" delay={150}>
                <div className="relative mx-auto h-[260px] w-full overflow-hidden sm:h-[320px] md:h-[360px] lg:h-[400px]">
                  <Image
                    src="/services-cad-engineer.png"
                    alt="Professional mechanical engineer analyzing 3D CAD turbine and simulation at industrial workstation"
                    fill
                    className="object-contain object-right lg:object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                  {/* Soft gradient edge overlays for seamless background blending */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FEFCF7] via-[#FEFCF7]/70 to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FEFCF7] to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-[#FEFCF7]/60 to-transparent" />
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* Sub-header / Carousel Controls Bar */}
          <div className="mt-12 flex items-center justify-between border-t border-[#E5E7EB]/80 pt-6">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#F8B526]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                Core Practice Areas
              </span>
              <span className="hidden font-mono text-[11px] text-[#9CA3AF] sm:inline">
                · 08 Specialized Disciplines
              </span>
            </div>

            {/* Desktop Navigation Arrows */}
            <div className="hidden items-center gap-2 md:flex">
              <button
                onClick={() => setActiveCapability((prev) => (prev === 0 ? Math.max(0, capabilities.length - itemsPerView) : prev - 1))}
                className="flex h-10 w-10 items-center justify-center border border-[#E5E7EB] bg-white text-[#4B5563] transition-colors hover:border-[#FCD580] hover:text-[#B37D0C] focus:outline-none focus:ring-2 focus:ring-[#F8B526]"
                aria-label="Previous capabilities"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setActiveCapability((prev) => (prev >= capabilities.length - itemsPerView ? 0 : prev + 1))}
                className="flex h-10 w-10 items-center justify-center border border-[#E5E7EB] bg-white text-[#4B5563] transition-colors hover:border-[#FCD580] hover:text-[#B37D0C] focus:outline-none focus:ring-2 focus:ring-[#F8B526]"
                aria-label="Next capabilities"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Service Cards Carousel */}
          <div className="relative mx-auto mt-6 w-full">
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
                      className="shrink-0 p-2 md:p-2.5"
                    >
                      <div className="group relative flex h-full min-h-[290px] cursor-pointer flex-col justify-between border border-[#E5E7EB] bg-[#FFFFFF] p-7 transition-all duration-300 hover:border-[#FCD580] hover:bg-[#FEFCF7] hover:shadow-[0_8px_20px_rgba(248,181,38,0.08)] focus-within:ring-2 focus-within:ring-[#F8B526]">
                        <div className="absolute right-0 top-0 h-0 w-0 border-l-[28px] border-t-[28px] border-l-transparent border-t-[#F8B526] opacity-0 transition-opacity group-hover:opacity-100" />
                        <div>
                          <div className="flex items-start justify-between">
                            <span className="font-mono text-xs font-bold tracking-widest text-[#B37D0C]">{number}</span>
                            <Icon size={22} strokeWidth={1.5} className="text-[#9CA3AF] transition-colors group-hover:text-[#F8B526]" />
                          </div>
                          <h3 className="mt-7 text-xl font-semibold tracking-[-.03em] text-[#1F2937] transition-colors group-hover:text-[#8C6109] md:text-2xl">{title}</h3>
                          <p className="mt-3 text-xs leading-relaxed text-[#4B5563]">{description}</p>
                        </div>
                        <div className="mt-8 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#4B5563] transition-colors group-hover:text-[#8C6109]">
                          <a href="#contact" className="before:absolute before:inset-0 focus:outline-none">LEARN MORE</a>
                          <ArrowUpRight size={14} className="relative z-10" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Controls & Dots */}
            <div className="mt-8 flex items-center justify-between md:justify-center">
              <button
                onClick={() => setActiveCapability((prev) => (prev === 0 ? Math.max(0, capabilities.length - itemsPerView) : prev - 1))}
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

      {/* Engineering Process Section: Design. Simulate. Optimise. */}
      <section id="work" className="relative border-y border-[#E5E7EB] bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column (Overview & Methodology Visual) */}
            <div className="lg:col-span-5 lg:pr-4">
              <RevealOnScroll direction="up">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <p className="eyebrow flex items-center gap-3">
                      <span className="h-px w-8 bg-[#F8B526]" />
                      Engineering Methodology / 03
                    </p>

                    <h2 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-.06em] text-[#1F2937] md:text-6xl">
                      Design.<br />
                      Simulate.<br />
                      <span className="text-[#8C6109]">Optimise.</span>
                    </h2>

                    <p className="mt-6 text-base leading-relaxed text-[#4B5563] md:text-lg">
                      A disciplined, simulation-first engineering lifecycle that evaluates every physical parameter before committing to tooling and fabrication.
                    </p>

                    <div className="mt-8 border-t border-[#E5E7EB] pt-6">
                      <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B37D0C] transition-colors hover:text-[#1F2937]"
                      >
                        Discuss your engineering challenge <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Large Engineering Methodology Visual */}
                  <div className="relative mt-8 overflow-hidden">
                    <div className="relative h-[290px] w-full sm:h-[350px] md:h-[390px] lg:h-[430px] xl:h-[470px]">
                      <Image
                        src="/methodology-simulation-engineer.png"
                        alt="Mechanical engineer analyzing 3D CAD turbine model and FEA simulation at industrial engineering workstation"
                        fill
                        className="object-contain object-left-bottom"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Column (Interactive Timeline Steps) */}
            <div className="lg:col-span-7">
              <div className="relative pl-4 sm:pl-8">
                {/* Connecting Vertical Track */}
                <div className="absolute left-[34px] sm:left-[50px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#F8B526] via-[#FCD580] to-[#E5E7EB]" />

                <div className="space-y-8">
                  {[
                    {
                      number: '01',
                      title: 'Design',
                      description: 'Understand the requirement and develop the engineering concept.',
                      tag: 'Concept & 3D CAD',
                      details: 'Requirements analysis, mechanical architecture, 3D CAD modeling, and design for manufacturability (DFM).',
                      icon: Box,
                    },
                    {
                      number: '02',
                      title: 'Simulate',
                      description: 'Evaluate performance using engineering simulation.',
                      tag: 'CFD & FEA Analysis',
                      details: 'Finite Element Analysis (FEA) for stress and deformation, plus Computational Fluid Dynamics (CFD) for airflow, thermal, and fluid flow.',
                      icon: Settings2,
                    },
                    {
                      number: '03',
                      title: 'Optimise',
                      description: 'Refine the design based on engineering analysis.',
                      tag: 'Performance Tuning',
                      details: 'Iterative optimization to maximize strength-to-weight ratio, improve energy efficiency, and prevent operational failure modes.',
                      icon: Zap,
                    },
                    {
                      number: '04',
                      title: 'Manufacture',
                      description: 'Move the validated solution toward physical implementation.',
                      tag: 'Fabrication & Commissioning',
                      details: 'Fabrication-ready drawings, supplier coordination, precision assembly, testing, and full production implementation.',
                      icon: Factory,
                    },
                  ].map((step, idx) => {
                    const StepIcon = step.icon
                    return (
                      <RevealOnScroll key={step.number} delay={idx * 120} direction="left">
                        <div
                          className="group relative flex gap-6 sm:gap-8 rounded-xl border border-[#E5E7EB] bg-[#FEFCF7] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8B526] hover:bg-white hover:shadow-[0_12px_30px_rgba(248,181,38,0.12)]"
                        >
                          {/* Step Number & Icon Circle */}
                          <div className="relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#F8B526] bg-white font-mono text-sm font-bold text-[#1F2937] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F8B526] group-hover:text-white">
                            <StepIcon size={20} className="text-[#B37D0C] transition-colors group-hover:text-[#1F2937]" />
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="font-mono text-xs font-bold tracking-widest text-[#B37D0C]">
                                STEP {step.number}
                              </span>
                              <span className="rounded bg-white border border-[#E5E7EB] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#4B5563] transition-colors group-hover:border-[#FCD580] group-hover:text-[#B37D0C]">
                                {step.tag}
                              </span>
                            </div>

                            <h3 className="mt-2 text-xl font-bold tracking-tight text-[#1F2937] sm:text-2xl transition-colors group-hover:text-[#8C6109]">
                              {step.title}
                            </h3>

                            <p className="mt-2 text-base font-medium text-[#1F2937]">
                              {step.description}
                            </p>

                            <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                              {step.details}
                            </p>
                          </div>
                        </div>
                      </RevealOnScroll>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="relative overflow-hidden border-y border-[#E5E7EB] bg-[#FEFCF7] py-24 lg:py-32">
        {/* Subtle decorative background glows */}
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#FCD580]/15 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-[#F8B526]/10 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* Top Row: Left Header & Filters + Right Engineering Visual */}
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Heading, Subtitle & Filter Tabs */}
            <div className="lg:col-span-6 xl:col-span-5">
              <RevealOnScroll direction="up">
                <p className="eyebrow flex items-center gap-3">
                  <span className="h-px w-8 bg-[#F8B526]" />
                  Industries We Serve / 04
                </p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-.06em] text-[#1F2937] md:text-5xl lg:text-6xl">
                  Useful in the<br />
                  <span className="text-[#8C6109]">real world.</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-[#4B5563]">
                  We combine domain-specific mechanical, thermal, and automation expertise to solve high-impact engineering challenges across core industrial sectors.
                </p>

                {/* Filter Tabs */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    { id: 'all', label: 'ALL INDUSTRIES' },
                    { id: 'manufacturing', label: 'MANUFACTURING & AUTOMOTIVE' },
                    { id: 'processing', label: 'PROCESSING & ENERGY' },
                    { id: 'automation', label: 'AUTOMATION' },
                    { id: 'rd', label: 'SMES & STARTUPS' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveIndustryCategory(tab.id)
                        setActiveIndustry(0)
                      }}
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
              </RevealOnScroll>
            </div>

            {/* Right Column: Large Engineering Visual */}
            <div className="relative lg:col-span-6 xl:col-span-7">
              <RevealOnScroll direction="left" delay={150}>
                <div className="relative mx-auto h-[260px] w-full overflow-hidden sm:h-[320px] md:h-[360px] lg:h-[400px]">
                  <Image
                    src="/services-cad-engineer.png"
                    alt="Industrial engineering testing and CAD simulation"
                    fill
                    className="object-contain object-right lg:object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FEFCF7] via-[#FEFCF7]/70 to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FEFCF7] to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-[#FEFCF7]/60 to-transparent" />
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* Carousel Slider with Left and Right Arrows */}
          <RevealOnScroll direction="up" delay={200}>
            <div className="relative mt-14 flex items-center">
              {/* Left Navigation Arrow */}
              <button
                onClick={() =>
                  setActiveIndustry((prev) =>
                    prev === 0 ? Math.max(0, filteredIndustries.length - industryItemsPerView) : prev - 1
                  )
                }
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#E5E7EB] bg-white text-[#4B5563] shadow-sm transition-colors hover:border-[#FCD580] hover:text-[#B37D0C] focus:outline-none focus:ring-2 focus:ring-[#F8B526]"
                aria-label="Previous industries"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Slider Viewport */}
              <div className="mx-2 flex-1 overflow-hidden sm:mx-4">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${activeIndustry * (100 / industryItemsPerView)}%)` }}
                >
                  {filteredIndustries.map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.number}
                        style={{ width: `${100 / industryItemsPerView}%` }}
                        className="shrink-0 p-2 sm:p-2.5"
                      >
                        <div className="group relative flex h-full min-h-[390px] cursor-pointer flex-col justify-between border border-[#E5E7EB] bg-white p-2 transition-all duration-300 hover:border-[#FCD580] hover:bg-[#FEFCF7] hover:shadow-[0_12px_25px_rgba(248,181,38,0.1)] focus-within:ring-2 focus-within:ring-[#F8B526] sm:p-2 rounded">
                          <div>
                            {/* Card Image */}
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded bg-[#E5E7EB]">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                              />
                            </div>

                            {/* Number & Icon */}
                            <div className="mt-5 flex items-center justify-between">
                              <span className="font-mono text-xs font-bold tracking-widest text-[#B37D0C]">
                                {item.number}
                              </span>
                              <div className="flex h-10 w-10 items-center justify-center border border-[#FCD580]/70 bg-[#FEFCF7] text-[#B37D0C] transition-colors group-hover:border-[#F8B526] group-hover:bg-[#F8B526] group-hover:text-[#1F2937]">
                                <Icon size={20} strokeWidth={1.5} />
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className="mt-3 text-lg font-bold tracking-tight text-[#1F2937] transition-colors group-hover:text-[#8C6109]">
                              {item.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-2 text-xs leading-relaxed text-[#4B5563]">
                              {item.description}
                            </p>
                          </div>

                          {/* Bottom Link */}
                          <div className="mt-5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#B37D0C] transition-colors group-hover:text-[#1F2937]">
                            <a href="#contact" className="before:absolute before:inset-0 focus:outline-none">
                              LEARN MORE
                            </a>
                            <ArrowUpRight size={14} className="relative z-10" />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Right Navigation Arrow */}
              <button
                onClick={() =>
                  setActiveIndustry((prev) =>
                    prev >= filteredIndustries.length - industryItemsPerView ? 0 : prev + 1
                  )
                }
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#E5E7EB] bg-white text-[#4B5563] shadow-sm transition-colors hover:border-[#FCD580] hover:text-[#B37D0C] focus:outline-none focus:ring-2 focus:ring-[#F8B526]"
                aria-label="Next industries"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots Pagination */}
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: Math.max(1, filteredIndustries.length - industryItemsPerView + 1) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndustry(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 focus:outline-none ${
                    activeIndustry === idx ? 'w-8 bg-[#F8B526]' : 'w-2 bg-[#E5E7EB] hover:bg-[#D1D5DB]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Research & Development / Strategic Development Areas */}
      <section id="rd" className="relative scroll-mt-20 overflow-hidden border-y border-[#E5E7EB] bg-white py-24 lg:py-32">
        <div id="r-and-d" className="absolute -top-20" />
        {/* Subtle decorative glow matching hero and industries */}
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#FCD580]/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-[#F8B526]/5 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* Top Row: Left Header & Subtitle + Right Engineering Visual */}
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Heading, Subtitle & Callout */}
            <div className="lg:col-span-5 xl:col-span-5">
              <RevealOnScroll direction="up">
                <p className="eyebrow flex items-center gap-3">
                  <span className="h-px w-8 bg-[#F8B526]" />
                  Research &amp; Development / 05
                </p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-.06em] text-[#1F2937] md:text-5xl lg:text-6xl">
                  Focused on<br />
                  <span className="text-[#8C6109]">what&apos;s next.</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-[#4B5563]">
                  RUGENX functions as an externalized R&amp;D partner—transforming early research, physical prototypes, and emerging technologies into proven, production-grade industrial machinery.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded bg-[#F8B526] px-5 py-3 text-xs font-bold text-[#1F2937] shadow-sm transition-all hover:bg-[#D99A0F] hover:shadow"
                  >
                    Start an R&amp;D Project <ArrowRight size={14} />
                  </a>
                  <a
                    href="#engagement"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#B37D0C] transition-colors hover:text-[#8C6109]"
                  >
                    Engagement Models <ArrowRight size={13} />
                  </a>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Column: Large Engineering Visual (aligned with Services and Industries) */}
            <div className="relative lg:col-span-7 xl:col-span-7">
              <RevealOnScroll direction="left" delay={150}>
                <div className="relative mx-auto h-[260px] w-full overflow-hidden sm:h-[320px] md:h-[360px] lg:h-[400px]">
                  <Image
                    src="/development-areas-engineer.png"
                    alt="Automation and mechatronics engineer testing custom processing machinery in R&D laboratory"
                    fill
                    className="object-contain object-right lg:object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                  {/* Soft gradient edge overlays for seamless background blending */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/70 to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white/60 to-transparent" />
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* Sub-header Bar (matching Services & Industries section rhythm) */}
          <RevealOnScroll direction="up">
            <div className="mt-14 flex items-center justify-between border-t border-[#E5E7EB] pt-6">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#F8B526]" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                  Strategic Development Focus
                </span>
                <span className="hidden font-mono text-[11px] text-[#9CA3AF] sm:inline">
                  · 06 Applied Technology Domains
                </span>
              </div>
              <span className="hidden font-mono text-[11px] uppercase tracking-wider text-[#B37D0C] sm:inline">
                Prototype Rigs · Pilot Systems
              </span>
            </div>
          </RevealOnScroll>

          {/* 6 Strategic Development Areas Grid: 3 columns x 2 rows */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {developmentAreas.map((item, idx) => (
              <RevealOnScroll key={item.number} direction="up" delay={(idx % 3) * 100}>
                <div className="group relative flex h-full flex-col justify-between border border-[#E5E7EB] bg-[#FEFCF7] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FCD580] hover:bg-white hover:shadow-[0_12px_28px_rgba(248,181,38,0.12)]">
                  {/* Top Accent Hover Line (matching How We Work & Engagement cards) */}
                  <div className="absolute left-0 top-0 h-1 w-0 bg-[#F8B526] transition-all duration-500 ease-out group-hover:w-full" />
                  
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold tracking-widest text-[#B37D0C] transition-colors group-hover:text-[#F8B526]">
                        {item.number}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center border border-[#E5E7EB] bg-white text-[#B37D0C] shadow-sm transition-all duration-300 group-hover:border-[#F8B526] group-hover:bg-[#FEFCF7] group-hover:text-[#8C6109] group-hover:scale-105">
                        <item.icon className="h-4 w-4" />
                      </div>
                    </div>

                    <h3 className="mt-5 text-base font-bold tracking-tight text-[#1F2937] transition-colors group-hover:text-[#8C6109]">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-[13px] leading-relaxed text-[#4B5563]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#E5E7EB]/70 pt-4">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF] transition-colors group-hover:text-[#B37D0C]">
                      {item.tag || 'R&D Focus'}
                    </span>
                    <ArrowUpRight size={14} className="text-[#9CA3AF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F8B526]" />
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Technology & Engineering Capabilities Strip */}
          <RevealOnScroll direction="up" delay={150}>
            <div className="mt-14 border border-[#E5E7EB] bg-[#FEFCF7] p-6 transition-all duration-300 md:p-8">
              <div className="flex flex-col justify-between gap-3 border-b border-[#E5E7EB] pb-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F8B526]" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                    Technology &amp; Engineering Tooling
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#9CA3AF]">
                  Multidisciplinary Infrastructure &amp; CAE Suite
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {techCapabilities.map((cap) => (
                  <div key={cap.category} className="group flex flex-col justify-start">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center border border-[#F8B526]/80 bg-white text-[#B37D0C] shadow-sm transition-colors group-hover:border-[#F8B526] group-hover:text-[#8C6109]">
                        <cap.icon className="h-3.5 w-3.5" />
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F2937]">
                        {cap.category}
                      </h4>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs leading-relaxed text-[#4B5563]">
                      {cap.skills.map((skill, idx) => (
                        <span key={skill} className="inline-flex items-center gap-1.5">
                          <span className="transition-colors hover:text-[#1F2937]">{skill}</span>
                          {idx < cap.skills.length - 1 && (
                            <span className="select-none font-bold text-[#B37D0C]/60">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section id="engagement" className="border-t border-[#E5E7EB] bg-[#FEFCF7] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <RevealOnScroll direction="up">
            <div className="mb-16 max-w-2xl">
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-[#F8B526]"></span>
                Engagement / 06
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-.06em] md:text-6xl">
                Flexible models.<br />
                <span className="text-[#8C6109]">Tailored to your needs.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#4B5563] md:text-lg">
                Whether you need end-to-end turnkey machinery or dedicated external R&amp;D engineering support, we adapt to fit your project milestones.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {engagementModels.map((model, idx) => (
              <RevealOnScroll key={model.number} direction="up" delay={(idx % 3) * 100}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden border border-[#E5E7EB] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8B526] hover:shadow-[0_12px_30px_rgba(248,181,38,0.1)]">
                  <div className="absolute left-0 top-0 h-1 w-0 bg-[#F8B526] transition-all duration-500 ease-out group-hover:w-full" />
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold tracking-widest text-[#B37D0C]">
                        {model.number}
                      </span>
                      <Handshake size={20} className="text-[#B37D0C]/60 transition-colors group-hover:text-[#F8B526]" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold tracking-tight text-[#1F2937] transition-colors group-hover:text-[#8C6109]">
                      {model.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                      {model.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="border-y border-[#E5E7EB] bg-[#FFFFFF]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <RevealOnScroll direction="up">
            <div className="mb-16">
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-[#F8B526]"></span>
                Leadership / 07
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-.06em] md:text-6xl">
                Led by <span className="text-[#8C6109]">engineers.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Founder 1 */}
            <RevealOnScroll direction="up" delay={100}>
              <div className="group h-full">
                <div className="mb-8 flex items-center gap-6">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-[#E5E7EB] shadow-md transition-all duration-500 ease-out group-hover:border-[#F8B526]">
                    <Image
                      src="/kolitha.jpg"
                      alt="Kolitha Indrachapa Thuduhena"
                      fill
                      className="object-cover"
                    />
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
            </RevealOnScroll>

            {/* Founder 2 */}
            <RevealOnScroll direction="up" delay={200}>
              <div className="group h-full">
                <div className="mb-8 flex items-center gap-6">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-[#E5E7EB] shadow-md transition-all duration-500 ease-out group-hover:border-[#F8B526]">
                    <Image
                      src="/harshana.jpg"
                      alt="Harshana Laknath Subasinghe"
                      fill
                      className="object-cover"
                    />
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
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#1F2937] text-white">
        <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-10 lg:pt-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <RevealOnScroll direction="right" delay={100}>
                <p className="eyebrow text-[#F8B526]">Start a conversation / 07</p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-.07em] sm:text-5xl md:text-6xl">
                  Let's engineer<br />
                  <span className="text-[#F8B526]">the future together.</span>
                </h2>
                <p className="mt-6 text-sm leading-7 text-white/70">
                  Have a technical challenge, product idea or process ready to improve? Connect with our engineering team directly or send an inquiry.
                </p>
                <div className="mt-8 space-y-4 text-sm text-white/80">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#F8B526]">
                      <MapPin size={16} />
                    </span>
                    <span>563/C, Nawagamuwa South, Ranala, Sri Lanka</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#F8B526]">
                      <Phone size={16} />
                    </span>
                    <a href="tel:+94741850060" className="hover:text-[#F8B526] transition-colors">+94 74 18 500 60</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#F8B526]">
                      <Mail size={16} />
                    </span>
                    <a href="mailto:rugenxinnovations@gmail.com" className="text-[#F8B526] hover:text-white transition-colors">rugenxinnovations@gmail.com</a>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Direct Engineering Inquiry Form */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:col-span-7">
              <RevealOnScroll direction="left" delay={200}>
                <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-[#F8B526]">
                  Submit an Engineering Inquiry
                </h3>
                <p className="mt-1 text-xs text-white/60">
                  Share your requirements. Our technical leads will review and respond within 24 hours.
                </p>
                <form action="mailto:rugenxinnovations@gmail.com" method="post" encType="text/plain" className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/70 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. John Perera"
                        className="w-full rounded border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#F8B526] focus:bg-white/15 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/70 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="name@company.com"
                        className="w-full rounded border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#F8B526] focus:bg-white/15 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-white/70 mb-1.5">Project Scope / Technical Domain</label>
                    <input
                      type="text"
                      name="scope"
                      placeholder="e.g. Industrial Automation / CFD Simulation / Custom Machinery"
                      className="w-full rounded border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#F8B526] focus:bg-white/15 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-white/70 mb-1.5">Challenge or Objective Details</label>
                    <textarea
                      name="details"
                      rows={4}
                      required
                      placeholder="Briefly describe your industrial requirement, product concept, or operational bottleneck..."
                      className="w-full rounded border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#F8B526] focus:bg-white/15 focus:outline-none resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center gap-2 rounded bg-[#F8B526] px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#1F2937] transition-all hover:bg-[#D99A0F] hover:shadow-lg"
                  >
                    Send Inquiry <ArrowUpRight size={16} />
                  </button>
                </form>
              </RevealOnScroll>
            </div>
          </div>

          <footer className="mt-32 border-t border-white/15 pb-12 pt-16">
            <RevealOnScroll direction="up" delay={100}>
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
                    <li><a href="#rd" className="transition-colors hover:text-white">Research &amp; Development</a></li>
                    <li><a href="#engagement" className="transition-colors hover:text-white">Engagement Models</a></li>
                    <li><a href="#leadership" className="transition-colors hover:text-white">Leadership</a></li>
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
            </RevealOnScroll>
          </footer>
        </div>
      </section>
      </main>
    </div>
  )
}
