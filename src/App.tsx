import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import {

  BrowserRouter,

  Link,

  NavLink,

  Navigate,

  Route,

  Routes,

  useLocation,

} from "react-router-dom";



import {

  ArrowRight,

  BadgeCheck,

  BarChart3,

  CheckCircle2,

  ChevronRight,

  Cloud,

  Code2,

  Headphones,

  Layers3,

  Lock,

  Mail,

  MapPin,

  Menu,

  MessageCircle,

  Package,

  Phone,

  Rocket,

  ShieldCheck,

  Sparkles,

  Users,

  X,

  Zap,

} from "lucide-react";



/* =========================================================

   NAVIGATION

========================================================= */



const navItems = [

  {

    label: "Product",

    path: "/product",

  },

  {

    label: "Support",

    path: "/support",

  },

  {

    label: "About Us",

    path: "/about",

  },

  {

    label: "Pricing",

    path: "/pricing",

  },

  {

    label: "Contact",

    path: "/contact",

  },

];



/* =========================================================

   PREMIUM MOTION LAYER

========================================================= */

function PremiumMotionLayer() {
  const shouldReduceMotion = useReducedMotion();
  const location = useLocation();

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const sections = Array.from(main.querySelectorAll("section"));
    const cards = Array.from(main.querySelectorAll("div[class*='rounded-3xl']"));
    const buttons = Array.from(main.querySelectorAll("a.inline-flex, button"));

    sections.forEach((element) => element.classList.add("premium-reveal"));
    cards.forEach((element) => element.classList.add("premium-card"));
    buttons.forEach((element) => element.classList.add("premium-button"));

    if (shouldReduceMotion) {
      sections.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    sections.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname, shouldReduceMotion]);

  return null;
}

/* =========================================================

   SHARED COMPONENTS

========================================================= */



function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);



  const closeMenu = () => {

    setMobileOpen(false);

  };



  return (

    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">



        {/* LOGO */}

        <Link

          to="/"

          onClick={closeMenu}

          className="flex items-center gap-3"

        >

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-lg shadow-indigo-500/20">

            <Sparkles className="h-5 w-5 text-white" />

          </div>



          <div>

            <div className="text-lg font-black tracking-tight text-slate-900">

              TAGITStore

            </div>



            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">

              Smart Business Solutions

            </div>

          </div>

        </Link>



        {/* DESKTOP NAV */}

        <nav className="hidden items-center gap-7 lg:flex">

          <NavLink

            to="/"

            className={({ isActive }) =>

              `text-sm font-semibold transition ${

                isActive

                  ? "text-indigo-600"

                  : "text-slate-600 hover:text-slate-900"

              }`

            }

          >

            Home

          </NavLink>



          {navItems.map((item) => (

            <NavLink

              key={item.path}

              to={item.path}

              className={({ isActive }) =>

                `text-sm font-semibold transition ${

                  isActive

                    ? "text-indigo-600"

                    : "text-slate-600 hover:text-slate-900"

                }`

              }

            >

              {item.label}

            </NavLink>

          ))}

        </nav>



        {/* DESKTOP CTA */}

        <Link

          to="/contact"

          className="hidden items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 lg:inline-flex"

        >

          Get Started

          <ArrowRight className="h-4 w-4" />

        </Link>



        {/* MOBILE BUTTON */}

        <button

          type="button"

          onClick={() =>

            setMobileOpen((current) => !current)

          }

          className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm lg:hidden"

          aria-label="Toggle navigation"

        >

          {mobileOpen ? (

            <X className="h-5 w-5" />

          ) : (

            <Menu className="h-5 w-5" />

          )}

        </button>

      </div>



      {/* MOBILE MENU */}

      {mobileOpen && (

        <div className="border-t border-slate-200 bg-white lg:hidden">

          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

            <div className="flex flex-col gap-1">



              <NavLink

                to="/"

                onClick={closeMenu}

                className={({ isActive }) =>

                  `rounded-xl px-4 py-3 text-sm font-semibold ${

                    isActive

                      ? "bg-indigo-50 text-indigo-600"

                      : "text-slate-700 hover:bg-slate-50"

                  }`

                }

              >

                Home

              </NavLink>



              {navItems.map((item) => (

                <NavLink

                  key={item.path}

                  to={item.path}

                  onClick={closeMenu}

                  className={({ isActive }) =>

                    `rounded-xl px-4 py-3 text-sm font-semibold ${

                      isActive

                        ? "bg-indigo-50 text-indigo-600"

                        : "text-slate-700 hover:bg-slate-50"

                    }`

                  }

                >

                  {item.label}

                </NavLink>

              ))}



              <Link

                to="/contact"

                onClick={closeMenu}

                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white"

              >

                Get Started

                <ArrowRight className="h-4 w-4" />

              </Link>

            </div>

          </div>

        </div>

      )}

    </header>

  );

}



/* =========================================================

   PAGE HERO

========================================================= */



function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.45 }}
      className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-24"
    >
      <motion.div
        aria-hidden="true"
        className="absolute left-[-10%] top-[-25%] h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl"
        animate={shouldReduceMotion ? undefined : { x: [0, 28, 0], y: [0, 16, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[-20%] right-[-5%] h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl"
        animate={shouldReduceMotion ? undefined : { x: [0, -24, 0], y: [0, -12, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {description}
          </p>
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            animate={{ scaleX: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.35, duration: shouldReduceMotion ? 0.01 : 0.7 }}
            className="mt-8 h-px max-w-sm bg-gradient-to-r from-cyan-400/80 via-indigo-500/60 to-transparent"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}



/* =========================================================

   FOOTER

========================================================= */



function Footer() {

  return (

    <footer className="border-t border-slate-200 bg-white">

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">



        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">



          {/* COMPANY */}

          <div>

            <Link

              to="/"

              className="flex items-center gap-3"

            >

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500">

                <Sparkles className="h-5 w-5 text-white" />

              </div>



              <div>

                <p className="font-black text-slate-900">

                  TAGITStore

                </p>



                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">

                  Business Solutions

                </p>

              </div>

            </Link>



            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">

              Innovative technology and secure SaaS-based

              solutions designed to help businesses operate,

              grow, and serve customers more efficiently.

            </p>

          </div>



          {/* NAVIGATION */}

          <div>

            <h3 className="text-sm font-bold text-slate-900">

              Navigation

            </h3>



            <div className="mt-4 space-y-3">

              <Link

                to="/"

                className="block text-sm text-slate-500 transition hover:text-indigo-600"

              >

                Home

              </Link>



              <Link

                to="/product"

                className="block text-sm text-slate-500 transition hover:text-indigo-600"

              >

                Product

              </Link>



              <Link

                to="/support"

                className="block text-sm text-slate-500 transition hover:text-indigo-600"

              >

                Support

              </Link>



              <Link

                to="/about"

                className="block text-sm text-slate-500 transition hover:text-indigo-600"

              >

                About Us

              </Link>

            </div>

          </div>



          {/* MORE */}

          <div>

            <h3 className="text-sm font-bold text-slate-900">

              Explore

            </h3>



            <div className="mt-4 space-y-3">

              <Link

                to="/pricing"

                className="block text-sm text-slate-500 transition hover:text-indigo-600"

              >

                Pricing

              </Link>



              <Link

                to="/contact"

                className="block text-sm text-slate-500 transition hover:text-indigo-600"

              >

                Contact

              </Link>

            </div>

          </div>



          {/* CONTACT */}

          <div>

            <h3 className="text-sm font-bold text-slate-900">

              Contact

            </h3>



            <div className="mt-4 space-y-4">



              <a

                href="mailto:istorecare@tagit.store"

                className="flex items-start gap-3 text-sm text-slate-500 transition hover:text-indigo-600"

              >

                <Mail className="mt-0.5 h-4 w-4 shrink-0" />

                istorecare@tagit.store

              </a>



              <a

                href="tel:+919843166444"

                className="flex items-start gap-3 text-sm text-slate-500 transition hover:text-indigo-600"

              >

                <Phone className="mt-0.5 h-4 w-4 shrink-0" />

                +91 98431 66444

              </a>



              <div className="flex items-start gap-3 text-sm text-slate-500">

                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />

                India

              </div>

            </div>

          </div>

        </div>



        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>

            © {new Date().getFullYear()} TAGITStore.

            All rights reserved.

          </p>



          <div className="flex flex-wrap gap-5">

            <span>Terms of Service</span>

            <span>Privacy Policy</span>

            <span>Cookie Policy</span>

          </div>

        </div>

      </div>

    </footer>

  );

}



/* =========================================================

   HOME PAGE

========================================================= */



function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(shouldReduceMotion ? value : 0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(value);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1200;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [shouldReduceMotion, value]);

  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.5 }}
        className="text-4xl font-black tabular-nums text-slate-950"
      >
        {count.toLocaleString()}{suffix}
      </motion.p>
      <p className="mt-2 text-sm text-slate-500">{label}</p>
    </div>
  );
}

function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const visualY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, shouldReduceMotion ? 0 : -35],
  );

  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  const revealTransition = { duration: 0.65, ease: "easeOut" as const };

  return (

    <>

      {/* HERO */}

      <motion.section ref={heroRef} className="relative overflow-hidden bg-white">

        <div className="absolute left-[-10%] top-[-15%] h-96 w-96 rounded-full bg-indigo-100 blur-3xl" />

        <div className="absolute right-[-10%] top-[15%] h-96 w-96 rounded-full bg-cyan-100 blur-3xl" />



        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">



          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">



            {/* LEFT */}

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ ...revealTransition, delay: 0.1 }}
            >



              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-600">

                <Rocket className="h-4 w-4" />

                Smart solutions for modern businesses

              </div>



              <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">

                Elevating Your

                <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">

                  Business

                </span>

                <span className="block text-slate-900">

                  with Innovative Solutions

                </span>

              </h1>



              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">

                TAGITStore builds IT solutions for MSMEs

                that make running your business easier,

                with smart tools for every need.

              </p>



              <div className="mt-8 flex flex-col gap-3 sm:flex-row">



                <Link

                  to="/product"

                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-800"

                >

                  Explore Product

                  <ArrowRight className="h-4 w-4" />

                </Link>



                <Link

                  to="/contact"

                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-slate-50"

                >

                  Contact Us

                </Link>



              </div>



              {/* TRUST POINTS */}

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">



                <div className="flex items-center gap-2">

                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />

                  Secure solutions

                </div>



                <div className="flex items-center gap-2">

                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />

                  Cloud-based

                </div>



                <div className="flex items-center gap-2">

                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />

                  Business focused

                </div>



              </div>

            </motion.div>



            {/* RIGHT VISUAL */}

            <motion.div
              className="relative"
              style={{ y: visualY }}
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >



              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-r from-indigo-100 via-violet-100 to-cyan-100 blur-2xl" />



              <div className="relative rounded-[2rem] border border-slate-200 bg-slate-950 p-5 shadow-2xl">



                <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 p-6 sm:p-8">



                  <div className="flex items-center justify-between">

                    <div className="flex gap-2">

                      <span className="h-3 w-3 rounded-full bg-red-400" />

                      <span className="h-3 w-3 rounded-full bg-yellow-400" />

                      <span className="h-3 w-3 rounded-full bg-green-400" />

                    </div>



                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold text-slate-400">

                      TAGITStore

                    </span>

                  </div>



                  <div className="mt-8">

                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">

                      Business Technology

                    </p>



                    <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">

                      One platform.

                      <span className="block text-cyan-400">

                        Endless solutions.

                      </span>

                    </h2>



                    <p className="mt-4 text-sm leading-7 text-slate-400">

                      Technology designed to simplify

                      everyday business operations.

                    </p>

                  </div>



                  <div className="mt-8 grid grid-cols-2 gap-3">



                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

                      <Package className="h-5 w-5 text-cyan-400" />

                      <p className="mt-3 text-sm font-bold text-white">

                        Smart Tools

                      </p>

                      <p className="mt-1 text-xs text-slate-500">

                        Built for business

                      </p>

                    </div>



                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

                      <Cloud className="h-5 w-5 text-indigo-400" />

                      <p className="mt-3 text-sm font-bold text-white">

                        Cloud Access

                      </p>

                      <p className="mt-1 text-xs text-slate-500">

                        Access anywhere

                      </p>

                    </div>



                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

                      <ShieldCheck className="h-5 w-5 text-emerald-400" />

                      <p className="mt-3 text-sm font-bold text-white">

                        Secure

                      </p>

                      <p className="mt-1 text-xs text-slate-500">

                        Protection focused

                      </p>

                    </div>



                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

                      <BarChart3 className="h-5 w-5 text-violet-400" />

                      <p className="mt-3 text-sm font-bold text-white">

                        Insights

                      </p>

                      <p className="mt-1 text-xs text-slate-500">

                        Better decisions

                      </p>

                    </div>



                  </div>



                </div>

              </div>

            </motion.div>



          </div>

        </div>

      </motion.section>



      {/* STATS */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={reveal}
        transition={revealTransition}
        className="border-y border-slate-200 bg-slate-50 py-14"
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">



          <div className="grid gap-8 text-center sm:grid-cols-3">



            <AnimatedCounter value={15} suffix="+" label="Years Overall Experience" />

            <AnimatedCounter value={1000} suffix="+" label="Satisfied Clients" />

            <AnimatedCounter value={90} suffix="%" label="Positive Feedbacks" />



          </div>

        </div>

      </motion.section>



      {/* FEATURED PRODUCT */}

      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">



          <div className="mx-auto max-w-3xl text-center">



            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">

              Featured Solution

            </p>



            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">

              Technology that makes business easier

            </h2>



            <p className="mt-4 text-slate-500">

              Discover solutions designed to simplify

              processes, organize information, and

              support business growth.

            </p>

          </div>



          <div className="mt-12 grid gap-5 md:grid-cols-3">



            <motion.div
                whileHover={{ y: shouldReduceMotion ? 0 : -8, scale: shouldReduceMotion ? 1 : 1.015 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl"
              >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">

                <Layers3 />

              </div>



              <h3 className="mt-5 text-lg font-bold text-slate-950">

                Business Automation

              </h3>



              <p className="mt-2 text-sm leading-7 text-slate-500">

                Simplify repetitive workflows and

                improve everyday business operations.

              </p>

            </motion.div>



            <motion.div
                whileHover={{ y: shouldReduceMotion ? 0 : -8, scale: shouldReduceMotion ? 1 : 1.015 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl"
              >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">

                <Cloud />

              </div>



              <h3 className="mt-5 text-lg font-bold text-slate-950">

                Cloud-Based Solutions

              </h3>



              <p className="mt-2 text-sm leading-7 text-slate-500">

                Keep your business connected with

                secure access from wherever you work.

              </p>

            </motion.div>



            <motion.div
                whileHover={{ y: shouldReduceMotion ? 0 : -8, scale: shouldReduceMotion ? 1 : 1.015 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl"
              >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">

                <ShieldCheck />

              </div>



              <h3 className="mt-5 text-lg font-bold text-slate-950">

                Data Security

              </h3>



              <p className="mt-2 text-sm leading-7 text-slate-500">

                Security-focused technology for

                protecting important business data.

              </p>

            </motion.div>



          </div>



          <div className="mt-10 text-center">

            <Link

              to="/product"

              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700"

            >

              Explore our product

              <ChevronRight className="h-4 w-4" />

            </Link>

          </div>

        </div>

      </section>



      {/* VALUES */}

      <section className="bg-slate-950 py-20 text-white sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">



          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">

              Why TAGITStore

            </p>



            <h2 className="mt-3 text-3xl font-black sm:text-4xl">

              Built around your business

            </h2>

          </div>



          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">



            {[

              {

                icon: ShieldCheck,

                title: "Data Security",

                text: "Security-focused solutions designed to protect important business information.",

              },

              {

                icon: Headphones,

                title: "Anytime Support",

                text: "Support designed to help your business keep moving when you need assistance.",

              },

              {

                icon: Cloud,

                title: "Access Anywhere",

                text: "Cloud-based solutions that make your business accessible wherever you work.",

              },

              {

                icon: Users,

                title: "Customer Values",

                text: "Solutions built around practical customer and business requirements.",

              },

              {

                icon: Zap,

                title: "Affordability",

                text: "Technology focused on useful features and practical business value.",

              },

              {

                icon: BadgeCheck,

                title: "Enduring Commitment",

                text: "Long-term commitment to reliable business technology solutions.",

              },

            ].map((item) => {

              const Icon = item.icon;



              return (

                <div

                  key={item.title}

                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"

                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cyan-400">

                    <Icon className="h-5 w-5" />

                  </div>



                  <h3 className="mt-5 text-lg font-bold">

                    {item.title}

                  </h3>



                  <p className="mt-2 text-sm leading-7 text-slate-400">

                    {item.text}

                  </p>

                </div>

              );

            })}



          </div>

        </div>

      </section>



      {/* CTA */}

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={revealTransition}
          className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-indigo-600 to-cyan-500 p-8 text-white shadow-2xl sm:p-12 lg:p-16"
        >



          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">



            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">

                Let's build together

              </p>



              <h2 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">

                Ready to move your business forward?

              </h2>



              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">

                Explore TAGITStore solutions or get in touch

                with our team to learn more.

              </p>

            </div>



            <Link

              to="/contact"

              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-indigo-700 transition hover:bg-slate-100"

            >

              Contact Us

              <ArrowRight className="h-4 w-4" />

            </Link>



          </div>

        </motion.div>

      </section>

    </>

  );

}



/* =========================================================

   PRODUCT PAGE

========================================================= */



function ProductPage() {

  return (

    <>

      <PageHero

        eyebrow="Our Product"

        title="Pawn Broker's Automation"

        description="A practical technology solution designed to simplify pawn broker operations, customer management, transactions, and everyday business workflows."

      />



      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">



          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">



            {[

              {

                icon: Users,

                title: "Customer Management",

                text: "Organize customer information and maintain easy access to important records.",

              },

              {

                icon: Package,

                title: "Pledge Management",

                text: "Manage pledge information and keep business records organized.",

              },

              {

                icon: BarChart3,

                title: "Business Reports",

                text: "Access useful business information to understand daily performance.",

              },

              {

                icon: Cloud,

                title: "Cloud Access",

                text: "Use cloud-based technology to access your business information wherever needed.",

              },

              {

                icon: Lock,

                title: "Secure Platform",

                text: "Security-focused technology helps protect business information.",

              },

              {

                icon: Zap,

                title: "Efficient Operations",

                text: "Reduce repetitive tasks and simplify important workflows.",

              },

            ].map((item) => {

              const Icon = item.icon;



              return (

                <div

                  key={item.title}

                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"

                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">

                    <Icon />

                  </div>



                  <h3 className="mt-5 text-lg font-bold text-slate-950">

                    {item.title}

                  </h3>



                  <p className="mt-3 text-sm leading-7 text-slate-500">

                    {item.text}

                  </p>

                </div>

              );

            })}



          </div>



          <div className="mt-16 rounded-3xl border border-indigo-100 bg-indigo-50 p-8 sm:p-10">



            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">



              <div>

                <p className="text-sm font-bold text-indigo-600">

                  Need more information?

                </p>



                <h2 className="mt-2 text-2xl font-black text-slate-950">

                  Talk to our team about the product.

                </h2>

              </div>



              <Link

                to="/contact"

                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white"

              >

                Contact Team

                <ArrowRight className="h-4 w-4" />

              </Link>



            </div>

          </div>



        </div>

      </section>

    </>

  );

}



/* =========================================================

   SUPPORT PAGE

========================================================= */



function SupportPage() {

  return (

    <>

      <PageHero

        eyebrow="Customer Support"

        title="Support when your business needs it"

        description="Get assistance, guidance, and practical support for your TAGITStore solutions."

      />



      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">



          <div className="grid gap-6 lg:grid-cols-3">



            {[

              {

                icon: Headphones,

                title: "Direct Support",

                text: "Connect with our support team for assistance with your solution.",

              },

              {

                icon: MessageCircle,

                title: "Business Guidance",

                text: "Get practical guidance for using technology effectively in your operations.",

              },

              {

                icon: Code2,

                title: "Technical Assistance",

                text: "Receive help with technical questions and platform-related issues.",

              },

            ].map((item) => {

              const Icon = item.icon;



              return (

                <div

                  key={item.title}

                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"

                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">

                    <Icon />

                  </div>



                  <h3 className="mt-5 text-lg font-bold text-slate-950">

                    {item.title}

                  </h3>



                  <p className="mt-3 text-sm leading-7 text-slate-500">

                    {item.text}

                  </p>

                </div>

              );

            })}



          </div>



          <div className="mt-12 rounded-3xl bg-slate-950 p-8 text-white sm:p-10">



            <div className="grid gap-8 md:grid-cols-2">



              <div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">

                  Need help?

                </p>



                <h2 className="mt-3 text-3xl font-black">

                  Talk to TAGITStore support.

                </h2>



                <p className="mt-4 text-sm leading-7 text-slate-400">

                  Reach out using email or phone and our

                  team can assist with your requirements.

                </p>

              </div>



              <div className="space-y-4">



                <a

                  href="mailto:istorecare@tagit.store"

                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm"

                >

                  <Mail className="text-cyan-400" />

                  istorecare@tagit.store

                </a>



                <a

                  href="tel:+919843166444"

                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm"

                >

                  <Phone className="text-cyan-400" />

                  +91 98431 66444

                </a>



              </div>

            </div>

          </div>



        </div>

      </section>

    </>

  );

}



/* =========================================================

   ABOUT PAGE

========================================================= */



function AboutPage() {

  return (

    <>

      <PageHero

        eyebrow="About TAGITStore"

        title="Technology built to support business growth"

        description="TAGITStore is focused on creating practical technology solutions that help businesses simplify operations and work more efficiently."

      />



      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">



          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">



            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">

                Our Story

              </p>



              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">

                Experience, innovation, and commitment

              </h2>



              <p className="mt-6 text-base leading-8 text-slate-600">

                TAGITStore is part of TAGTES Group and focuses

                on delivering innovative technology and SaaS-based

                solutions for businesses.

              </p>



              <p className="mt-4 text-base leading-8 text-slate-600">

                Our approach is centered around practical

                business requirements, secure technology,

                accessibility, affordability, and long-term

                customer support.

              </p>

            </div>



            <div className="grid gap-4 sm:grid-cols-2">



              <div className="rounded-3xl bg-slate-950 p-7 text-white">

                <Sparkles className="h-7 w-7 text-cyan-400" />

                <p className="mt-6 text-3xl font-black">

                  15+

                </p>

                <p className="mt-2 text-sm text-slate-400">

                  Years of overall experience

                </p>

              </div>



              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">

                <Users className="h-7 w-7 text-indigo-600" />

                <p className="mt-6 text-3xl font-black text-slate-950">

                  1000+

                </p>

                <p className="mt-2 text-sm text-slate-500">

                  Satisfied clients

                </p>

              </div>



              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">

                <ShieldCheck className="h-7 w-7 text-emerald-600" />

                <p className="mt-6 text-3xl font-black text-slate-950">

                  Secure

                </p>

                <p className="mt-2 text-sm text-slate-500">

                  Security-focused solutions

                </p>

              </div>



              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">

                <Cloud className="h-7 w-7 text-cyan-600" />

                <p className="mt-6 text-3xl font-black text-slate-950">

                  SaaS

                </p>

                <p className="mt-2 text-sm text-slate-500">

                  Cloud-based technology

                </p>

              </div>



            </div>

          </div>



          <div className="mt-16">



            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">

              Our Values

            </p>



            <h2 className="mt-3 text-3xl font-black text-slate-950">

              What guides us

            </h2>



            <div className="mt-8 grid gap-5 md:grid-cols-3">



              {[

                "Enduring Commitment",

                "Anytime Support",

                "Access Anywhere",

                "Customer Values",

                "Affordability",

                "Data Security",

              ].map((value) => (

                <div

                  key={value}

                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5"

                >

                  <CheckCircle2 className="h-5 w-5 shrink-0 text-indigo-600" />

                  <span className="text-sm font-bold text-slate-800">

                    {value}

                  </span>

                </div>

              ))}



            </div>

          </div>



        </div>

      </section>

    </>

  );

}



/* =========================================================

   PRICING PAGE

========================================================= */



function PricingPage() {

  return (

    <>

      <PageHero

        eyebrow="Pricing"

        title="Choose a solution that fits your business"

        description="Flexible technology solutions designed to deliver practical value for businesses of different sizes and requirements."

      />



      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">



          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm text-slate-500">

              Pricing can be tailored to your business

              requirements.

            </p>



            <h2 className="mt-2 text-3xl font-black text-slate-950">

              Talk to us for a suitable plan

            </h2>

          </div>



          <div className="mt-12 grid gap-6 lg:grid-cols-3">



            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

              <p className="text-sm font-bold text-indigo-600">

                Starter

              </p>



              <h3 className="mt-3 text-2xl font-black text-slate-950">

                Essential

              </h3>



              <p className="mt-3 text-sm leading-7 text-slate-500">

                Suitable for businesses beginning their

                digital transformation journey.

              </p>



              <Link

                to="/contact"

                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-800"

              >

                Contact Us

                <ArrowRight className="h-4 w-4" />

              </Link>

            </div>



            <div className="relative rounded-3xl border-2 border-indigo-500 bg-slate-950 p-7 text-white shadow-xl">



              <div className="absolute right-5 top-5 rounded-full bg-indigo-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">

                Popular

              </div>



              <p className="text-sm font-bold text-cyan-400">

                Business

              </p>



              <h3 className="mt-3 text-2xl font-black">

                Professional

              </h3>



              <p className="mt-3 text-sm leading-7 text-slate-400">

                Designed for businesses that need broader

                capabilities and ongoing support.

              </p>



              <Link

                to="/contact"

                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950"

              >

                Discuss Requirements

                <ArrowRight className="h-4 w-4" />

              </Link>

            </div>



            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

              <p className="text-sm font-bold text-emerald-600">

                Enterprise

              </p>



              <h3 className="mt-3 text-2xl font-black text-slate-950">

                Custom

              </h3>



              <p className="mt-3 text-sm leading-7 text-slate-500">

                For organizations with specialized

                requirements and larger deployments.

              </p>



              <Link

                to="/contact"

                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-800"

              >

                Request Details

                <ArrowRight className="h-4 w-4" />

              </Link>

            </div>



          </div>



          <p className="mt-8 text-center text-xs text-slate-500">

            Pricing depends on the selected solution,

            requirements, and implementation scope.

          </p>



        </div>

      </section>

    </>

  );

}



/* =========================================================

   CONTACT PAGE

========================================================= */



function ContactPage() {

  return (

    <>

      <PageHero

        eyebrow="Contact Us"

        title="Let's talk about your business requirements"

        description="Reach out to the TAGITStore team to discuss products, support, pricing, or your specific technology needs."

      />



      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">



          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">



            {/* CONTACT INFO */}

            <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">



              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">

                Get in touch

              </p>



              <h2 className="mt-3 text-3xl font-black">

                We are here to help.

              </h2>



              <p className="mt-4 text-sm leading-7 text-slate-400">

                Contact us to learn more about TAGITStore

                products and business solutions.

              </p>



              <div className="mt-8 space-y-5">



                <a

                  href="mailto:istorecare@tagit.store"

                  className="flex gap-4"

                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-400">

                    <Mail className="h-5 w-5" />

                  </div>



                  <div>

                    <p className="text-xs text-slate-500">

                      Email

                    </p>



                    <p className="mt-1 text-sm font-semibold">

                      istorecare@tagit.store

                    </p>

                  </div>

                </a>



                <a

                  href="tel:+919843166444"

                  className="flex gap-4"

                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-400">

                    <Phone className="h-5 w-5" />

                  </div>



                  <div>

                    <p className="text-xs text-slate-500">

                      Phone

                    </p>



                    <p className="mt-1 text-sm font-semibold">

                      +91 98431 66444

                    </p>

                  </div>

                </a>



                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-400">

                    <MapPin className="h-5 w-5" />

                  </div>



                  <div>

                    <p className="text-xs text-slate-500">

                      Location

                    </p>



                    <p className="mt-1 text-sm font-semibold">

                      India

                    </p>

                  </div>

                </div>



              </div>



              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">

                <p className="text-sm font-bold">

                  Business support

                </p>



                <p className="mt-2 text-xs leading-6 text-slate-400">

                  Our team can help with product

                  information, support requirements,

                  pricing, and business solutions.

                </p>

              </div>



            </div>



            {/* CONTACT CARD */}

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">



              <h2 className="text-2xl font-black text-slate-950">

                Tell us what you need

              </h2>



              <p className="mt-2 text-sm text-slate-500">

                Use the details below to contact our team.

              </p>



              <div className="mt-8 space-y-4">



                <a

                  href="mailto:istorecare@tagit.store?subject=TAGITStore%20Website%20Enquiry"

                  className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-300 hover:bg-indigo-50/50"

                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">

                      <Mail className="h-5 w-5" />

                    </div>



                    <div>

                      <p className="text-xs text-slate-500">

                        Email us

                      </p>



                      <p className="mt-1 text-sm font-bold text-slate-900">

                        istorecare@tagit.store

                      </p>

                    </div>

                  </div>



                  <ArrowRight className="h-5 w-5 text-slate-400" />

                </a>



                <a

                  href="https://wa.me/919843166444"

                  target="_blank"

                  rel="noreferrer"

                  className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-300 hover:bg-emerald-50/50"

                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">

                      <MessageCircle className="h-5 w-5" />

                    </div>



                    <div>

                      <p className="text-xs text-slate-500">

                        WhatsApp / Phone

                      </p>



                      <p className="mt-1 text-sm font-bold text-slate-900">

                        +91 98431 66444

                      </p>

                    </div>

                  </div>



                  <ArrowRight className="h-5 w-5 text-slate-400" />

                </a>



              </div>



              <div className="mt-8 rounded-2xl bg-slate-50 p-5">

                <p className="text-sm font-bold text-slate-900">

                  What can we help with?

                </p>



                <div className="mt-4 grid gap-3 sm:grid-cols-2">



                  {[

                    "Product information",

                    "Support",

                    "Pricing",

                    "Business requirements",

                  ].map((item) => (

                    <div

                      key={item}

                      className="flex items-center gap-2 text-sm text-slate-600"

                    >

                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />

                      {item}

                    </div>

                  ))}



                </div>

              </div>



            </div>



          </div>

        </div>

      </section>

    </>

  );

}



/* =========================================================

   SUPPORTING WRAPPER

========================================================= */



function AnimatedRoutes() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.32, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function WebsiteLayout() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-slate-900">
      <Navbar />
      <PremiumMotionLayer />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
}



export default function App() {

  return (

    <BrowserRouter>

      <WebsiteLayout />

    </BrowserRouter>

  );

}