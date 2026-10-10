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
   CINEMATIC / MOTION-DESIGN LAYER
========================================================= */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 right-0 top-0 z-[70] h-0.5 origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400"
      style={{ scaleX: scrollYProgress }}
    />
  );
}


function MotionTicker() {
  const items = [
    "Automation",
    "Cloud access",
    "Data security",
    "Business insight",
    "Customer focus",
    "Smart workflows",
  ];

  return (
    <section
      aria-label="TAGITStore capabilities"
      className="relative overflow-hidden border-y border-slate-200 bg-slate-950 py-4 text-white"
    >
      <style>{`
        @keyframes tagitTicker {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .tagit-ticker-track {
          animation: tagitTicker 18s linear infinite;
          width: max-content;
          will-change: transform;
        }
      `}</style>

      <div className="mx-auto flex max-w-7xl items-center gap-5 px-4 sm:px-6 lg:px-8">
        <span className="hidden shrink-0 text-[10px] font-black uppercase tracking-[0.28em] text-cyan-400 sm:block">
          In motion
        </span>

        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="tagit-ticker-track flex">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center gap-8 pr-8"
              >
                {items.map((item, index) => (
                  <div
                    key={`${copy}-${item}-${index}`}
                    className="flex shrink-0 items-center gap-8"
                  >
                    <span className="text-sm font-semibold text-slate-200">
                      {item}
                    </span>

                    <Sparkles className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MotionStudioSection() {
  const shouldReduceMotion = useReducedMotion();

  const cards = [
    {
      title: "Automate",
      text: "Turn repeat work into simple, dependable workflows.",
      icon: Layers3,
      className: "left-0 top-12 sm:left-4 lg:left-2",
      depth: 40,
    },
    {
      title: "Connect",
      text: "Keep information accessible across the business.",
      icon: Cloud,
      className: "right-0 top-2 sm:right-4 lg:right-2",
      depth: 70,
    },
    {
      title: "Protect",
      text: "Build confidence around the information that matters.",
      icon: ShieldCheck,
      className: "bottom-2 left-10 sm:bottom-8 sm:left-16 lg:left-20",
      depth: 55,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#05060a] py-24 text-white sm:py-32">
      {/* Background glow */}
      <motion.div
        aria-hidden="true"
        className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 70, 0],
                y: [0, -35, 0],
                scale: [1, 1.15, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />

      <motion.div
        aria-hidden="true"
        className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -50, 0],
                y: [0, 30, 0],
                scale: [1, 1.12, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />

      {/* Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:52px_52px]"
      />

      {/* Ambient center light */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[0.78fr_1.22fr]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : -36,
              y: shouldReduceMotion ? 0 : 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300">
                Motion-led technology
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Technology should feel alive.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              We are bringing more personality, depth, and movement into the
              TAGITStore experience—while keeping the product story clear and
              business-focused.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "2D + 3D depth",
                "Scroll storytelling",
                "Micro-interactions",
                "Fast by design",
              ].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                  }}
                  className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-bold text-slate-300 backdrop-blur-md"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Small visual line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{
                width: "180px",
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.9,
                delay: shouldReduceMotion ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 h-px bg-gradient-to-r from-cyan-400/70 via-indigo-400/40 to-transparent"
            />
          </motion.div>

          {/* RIGHT 3D VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.9,
              rotateY: shouldReduceMotion ? 0 : 12,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotateY: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto h-[500px] w-full max-w-2xl"
            style={{
              perspective: "1600px",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Outer orbit */}
            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotate: 360,
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 28,
                      repeat: Infinity,
                      ease: "linear",
                    }
              }
            >
              <div className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
            </motion.div>

            {/* Middle orbit */}
            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[275px] w-[275px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/20"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotate: -360,
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }
              }
            >
              <div className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-indigo-300 shadow-[0_0_18px_rgba(129,140,248,0.9)]" />
            </motion.div>

            {/* Inner orbit */}
            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotate: 360,
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 14,
                      repeat: Infinity,
                      ease: "linear",
                    }
              }
            />

            {/* Core glow */}
            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.18, 1],
                      opacity: [0.35, 0.65, 0.35],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
            />

            {/* Main glass panel */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2.75rem] border border-white/10 bg-slate-900/90 shadow-[0_35px_120px_rgba(34,211,238,0.16)] backdrop-blur-xl sm:h-[255px] sm:w-[255px]"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.035,
                      rotateX: 4,
                      rotateY: -4,
                    }
              }
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Inner gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(99,102,241,0.28),transparent_38%),radial-gradient(circle_at_70%_70%,rgba(34,211,238,0.15),transparent_42%)]" />

              {/* Animated core */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30 bg-cyan-300/[0.08] shadow-[0_0_60px_rgba(34,211,238,0.16)]"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.1, 1],
                        rotate: [0, 90, 180, 270, 360],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
              />

              {/* Core lines */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/15"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotate: -360,
                      }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 11,
                        repeat: Infinity,
                        ease: "linear",
                      }
                }
              />

              <motion.div
                className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotate: 360,
                      }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 17,
                        repeat: Infinity,
                        ease: "linear",
                      }
                }
              />

              {/* Tiny data points */}
              <motion.div
                className="absolute left-8 top-10 h-2 w-2 rounded-full bg-cyan-300"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, -8, 0],
                        opacity: [0.35, 1, 0.35],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
              />

              <motion.div
                className="absolute bottom-12 right-8 h-1.5 w-1.5 rounded-full bg-indigo-300"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, 10, 0],
                        opacity: [0.3, 1, 0.3],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
              />

              {/* Bottom information */}
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/30 p-3 backdrop-blur-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300">
                      TAGITStore
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">
                      One system. Many workflows.
                    </p>
                  </div>

                  <div className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.85)]" />
                </div>
              </div>
            </motion.div>

            {/* Floating cards */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.8,
                delay: shouldReduceMotion ? 0 : 0.25,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    className={`absolute ${card.className} w-[220px] rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-2xl backdrop-blur-xl`}
                    initial={{
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : 24,
                      scale: shouldReduceMotion ? 1 : 0.95,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: [0, index % 2 === 0 ? -9 : 9, 0],
                            rotateZ: [
                              0,
                              index % 2 === 0 ? 0.6 : -0.6,
                              0,
                            ],
                          }
                    }
                    transition={{
                      opacity: {
                        duration: 0.55,
                        delay: index * 0.1,
                      },
                      y: {
                        duration: 5 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      rotateZ: {
                        duration: 5 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -12,
                            scale: 1.04,
                            rotateZ: 0,
                          }
                    }
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-base font-black text-white">
                          {card.title}
                        </p>
                        <div className="mt-1 h-1 w-8 rounded-full bg-cyan-300/50" />
                      </div>
                    </div>

                    <p className="mt-4 text-xs leading-6 text-slate-400">
                      {card.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Decorative particles */}
            {!shouldReduceMotion && (
              <>
                <motion.div
                  className="absolute left-[28%] top-[18%] h-1.5 w-1.5 rounded-full bg-cyan-300"
                  animate={{
                    y: [0, -14, 0],
                    opacity: [0.25, 1, 0.25],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute right-[24%] top-[30%] h-1 w-1 rounded-full bg-indigo-300"
                  animate={{
                    y: [0, 12, 0],
                    opacity: [0.2, 0.9, 0.2],
                  }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute bottom-[20%] left-[38%] h-1 w-1 rounded-full bg-cyan-200"
                  animate={{
                    x: [0, 10, 0],
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
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

            Â© {new Date().getFullYear()} TAGITStore.

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
    [0, shouldReduceMotion ? 0 : -22],
  );

  const rise = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0 },
  };
  const riseTransition = {
    duration: shouldReduceMotion ? 0.01 : 0.65,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Security-minded",
      text: "Keep important business information protected with security-focused solutions.",
    },
    {
      icon: Headphones,
      title: "People-first support",
      text: "Get guidance from a team that understands the day-to-day needs of your business.",
    },
    {
      icon: Cloud,
      title: "Connected wherever you work",
      text: "Make it easier to access the tools and information your team depends on.",
    },
    {
      icon: Zap,
      title: "Built for practical progress",
      text: "Focus on useful technology that helps simplify everyday work.",
    },
  ];

  return (
    <>
      {/* HERO — bold editorial headline with a custom motion graphic */}
      <motion.section
        ref={heroRef}
        className="relative isolate overflow-hidden bg-[#f7f8fc]"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-indigo-300/25 blur-[110px]" />
          <div className="absolute -right-28 top-16 h-[30rem] w-[30rem] rounded-full bg-cyan-200/35 blur-[110px]" />
          <div className="absolute bottom-[-15rem] left-[38%] h-[28rem] w-[28rem] rounded-full bg-violet-200/25 blur-[110px]" />
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,23,42,0.65) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.65) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
            <motion.div
              variants={rise}
              initial="hidden"
              animate="visible"
              transition={{ ...riseTransition, delay: 0.05 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-700 shadow-sm backdrop-blur sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                Smart solutions for growing businesses
              </div>

              <h1 className="mt-7 max-w-3xl text-[3.35rem] font-black leading-[0.98] tracking-[-0.065em] text-slate-950 sm:text-7xl lg:text-[5.25rem]">
                Make room for
                <span className="mt-1 block bg-gradient-to-r from-indigo-700 via-violet-600 to-cyan-500 bg-clip-text pb-2 text-transparent">
                  better business.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                TAGITStore builds IT solutions for MSMEs that make running your
                business easier—with smart tools for everyday work, connected
                teams, and room to grow.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/product"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-bold text-white shadow-[0_18px_45px_rgba(15,23,42,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-[0_20px_55px_rgba(79,70,229,0.28)]"
                >
                  Explore solutions
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-6 py-4 text-sm font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white"
                >
                  Let’s talk
                  <MessageCircle className="h-4 w-4 text-indigo-600" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Security-focused
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Cloud-connected
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Business-first
                </span>
              </div>
            </motion.div>

            {/* Custom-built visual: connected workflows, not a stock image */}
            <motion.div
              className="relative mx-auto w-full max-w-[35rem]"
              style={{ y: visualY }}
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div aria-hidden="true" className="absolute inset-5 rounded-[3rem] bg-gradient-to-br from-indigo-400/25 via-violet-300/20 to-cyan-300/25 blur-3xl" />
              <motion.div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/20"
                animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                transition={shouldReduceMotion ? undefined : { duration: 36, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute left-[15%] top-[16%] h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-[0_0_22px_rgba(99,102,241,0.8)]" />
              </motion.div>
              <motion.div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20"
                animate={shouldReduceMotion ? undefined : { rotate: -360 }}
                transition={shouldReduceMotion ? undefined : { duration: 28, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute bottom-[12%] right-[12%] h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)]" />
              </motion.div>

              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -5, rotateX: 2, rotateY: -2 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative z-10 overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b1020] p-4 shadow-[0_35px_100px_rgba(15,23,42,0.28)] sm:rounded-[2.5rem] sm:p-5"
              >
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#121a32] via-[#111a2c] to-[#0d1724] p-5 sm:rounded-[2rem] sm:p-7">
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/20">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-black tracking-tight text-white">TAGITStore</p>
                        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Connected solutions</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-bold text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      In sync
                    </span>
                  </div>

                  <div className="mt-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-300">The work behind the work</p>
                    <h2 className="mt-3 max-w-sm text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                      Less friction.
                      <span className="block text-slate-400">More forward.</span>
                    </h2>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                      Bring everyday business tasks into a clearer, more connected flow.
                    </p>
                  </div>

                  <div className="relative mt-7 rounded-[1.5rem] border border-white/10 bg-[#080d18]/70 p-4 sm:p-5">
                    <div aria-hidden="true" className="absolute left-9 right-9 top-[3.15rem] hidden h-px bg-gradient-to-r from-indigo-400/70 via-cyan-300/70 to-emerald-300/70 sm:block" />
                    <div className="relative grid grid-cols-3 gap-2 sm:gap-3">
                      {[
                        { icon: Layers3, label: "Organize", tone: "text-indigo-300", surface: "bg-indigo-400/10" },
                        { icon: Cloud, label: "Connect", tone: "text-cyan-300", surface: "bg-cyan-400/10" },
                        { icon: ShieldCheck, label: "Protect", tone: "text-emerald-300", surface: "bg-emerald-400/10" },
                      ].map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: shouldReduceMotion ? 0.01 : 0.45, delay: 0.35 + index * 0.12 }}
                            className="flex min-w-0 flex-col items-center rounded-2xl border border-white/10 bg-white/[0.035] px-2 py-4 text-center"
                          >
                            <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.surface} ${item.tone}`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <span className="mt-3 text-[11px] font-bold text-slate-200 sm:text-xs">{item.label}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-cyan-300"><Zap className="h-4 w-4" /></div>
                        <div>
                          <p className="text-xs font-bold text-white">A smoother workflow</p>
                          <p className="mt-0.5 text-[10px] text-slate-500">Designed around your business</p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-cyan-300" />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={shouldReduceMotion ? undefined : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-3 top-[16%] z-20 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur sm:flex lg:-left-7"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"><Layers3 className="h-4 w-4" /></div>
                <div><p className="text-xs font-black text-slate-900">Simpler workflows</p><p className="mt-0.5 text-[10px] text-slate-500">Less repetitive work</p></div>
              </motion.div>
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, 7, 0] }}
                transition={shouldReduceMotion ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 bottom-[15%] z-20 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur sm:flex lg:-right-5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"><Lock className="h-4 w-4" /></div>
                <div><p className="text-xs font-black text-slate-900">Security in mind</p><p className="mt-0.5 text-[10px] text-slate-500">Technology you can trust</p></div>
              </motion.div>
            </motion.div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-slate-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">Technology · Simplicity · Scale</p>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-slate-200 via-indigo-200 to-transparent sm:block" />
            <p className="text-xs font-semibold text-slate-400">Thoughtful technology for everyday business</p>
          </div>
        </div>
      </motion.section>

      <MotionTicker />

      {/* SOLUTION SHOWCASE — varied bento cards instead of identical tiles */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute right-[-10rem] top-20 h-80 w-80 rounded-full bg-violet-100/70 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={riseTransition}
            className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-2xl">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-indigo-600">One clear direction</p>
              <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
                Better tools for the
                <span className="block text-slate-400">way you work.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              Thoughtful business technology should make the complex feel clear. Explore the areas where TAGITStore can help.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-12">
            <motion.article
              whileHover={shouldReduceMotion ? undefined : { y: -5 }}
              transition={{ duration: 0.3 }}
              className="group relative min-h-[330px] overflow-hidden rounded-[2rem] bg-[#0b1020] p-7 text-white md:col-span-7 md:p-9"
            >
              <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl transition duration-500 group-hover:bg-indigo-400/35" />
              <div aria-hidden="true" className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="relative grid h-full gap-8 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-cyan-300"><Layers3 className="h-5 w-5" /></div>
                  <p className="mt-7 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300">01 / Work smarter</p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">Business automation</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">Reduce repetitive steps and give everyday workflows a clearer path forward.</p>
                  <Link to="/product" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-cyan-300">Explore solutions <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
                </div>
                <div className="relative mx-auto w-full max-w-xs rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Workflow map</span><span className="h-2 w-2 rounded-full bg-emerald-400" /></div>
                  <div className="mt-4 space-y-3">
                    {[{ n: "01", name: "Capture the task", icon: MessageCircle, color: "text-violet-300", bg: "bg-violet-400/10" }, { n: "02", name: "Connect the steps", icon: Layers3, color: "text-cyan-300", bg: "bg-cyan-400/10" }, { n: "03", name: "Move work forward", icon: ArrowRight, color: "text-emerald-300", bg: "bg-emerald-400/10" }].map((step, index) => {
                      const Icon = step.icon;
                      return <motion.div key={step.n} initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: shouldReduceMotion ? 0.01 : 0.35, delay: index * 0.1 }} className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#11182a] p-3"><span className="text-[10px] font-black text-slate-600">{step.n}</span><div className={`flex h-9 w-9 items-center justify-center rounded-xl ${step.bg} ${step.color}`}><Icon className="h-4 w-4" /></div><span className="text-xs font-bold text-slate-200">{step.name}</span></motion.div>;
                    })}
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.article
              whileHover={shouldReduceMotion ? undefined : { y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative min-h-[330px] overflow-hidden rounded-[2rem] border border-cyan-100 bg-[#effcff] p-7 md:col-span-5 md:p-8"
            >
              <div aria-hidden="true" className="absolute -right-9 -top-7 h-48 w-48 rounded-full border border-cyan-300/50" />
              <div aria-hidden="true" className="absolute -right-1 top-1 h-32 w-32 rounded-full border border-cyan-300/45" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-cyan-700 shadow-sm"><Cloud className="h-5 w-5" /></div>
                <p className="mt-7 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-700">02 / Stay connected</p>
                <h3 className="mt-3 max-w-xs text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Cloud-based solutions</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">Keep the tools and information your team needs within reach, wherever work happens.</p>
                <div className="mt-auto flex items-center gap-3 pt-8">
                  <div className="flex -space-x-2"><span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#effcff] bg-indigo-600 text-[10px] font-black text-white">T</span><span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#effcff] bg-cyan-600 text-[10px] font-black text-white">A</span><span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#effcff] bg-emerald-600 text-[10px] font-black text-white">M</span></div>
                  <span className="text-xs font-bold text-slate-600">Your team, more connected</span>
                </div>
              </div>
            </motion.article>

            <motion.article
              whileHover={shouldReduceMotion ? undefined : { y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 md:col-span-5 md:p-8"
            >
              <div aria-hidden="true" className="absolute bottom-[-4rem] right-[-3rem] h-48 w-48 rounded-full bg-emerald-100/70 blur-2xl" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700"><ShieldCheck className="h-5 w-5" /></div>
                <p className="mt-7 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700">03 / Build confidence</p>
                <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">Data security</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">Make the protection of important business information part of the plan.</p>
                <div className="mt-auto flex items-center gap-2 pt-7 text-xs font-bold text-emerald-700"><Lock className="h-4 w-4" /> Security-minded by design</div>
              </div>
            </motion.article>

            <motion.article
              whileHover={shouldReduceMotion ? undefined : { y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-violet-100 bg-[#f5f2ff] p-7 md:col-span-7 md:p-8"
            >
              <div aria-hidden="true" className="absolute -right-8 -top-16 h-56 w-56 rounded-full bg-violet-200/70 blur-3xl" />
              <div className="relative z-10 grid h-full gap-7 sm:grid-cols-[1fr_0.8fr] sm:items-center">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-violet-700 shadow-sm"><BarChart3 className="h-5 w-5" /></div>
                  <p className="mt-7 text-[10px] font-black uppercase tracking-[0.22em] text-violet-700">04 / See the bigger picture</p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">Clearer business insight</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">Organize information so your next step feels easier to understand.</p>
                </div>
                <div aria-hidden="true" className="flex h-36 items-end justify-center gap-2 rounded-2xl border border-white/80 bg-white/70 px-5 pb-4 pt-5 shadow-sm sm:h-40">
                  {[38, 62, 48, 78, 58, 92, 70].map((height, index) => <motion.div key={index} initial={{ height: shouldReduceMotion ? `${height}%` : "8%" }} whileInView={{ height: `${height}%` }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: shouldReduceMotion ? 0.01 : 0.55, delay: index * 0.06, ease: "easeOut" }} className={`w-full rounded-t-md ${index === 5 ? "bg-gradient-to-t from-violet-600 to-cyan-400" : "bg-violet-200"}`} />)}
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* MOTION STORY — retain the existing animated brand section */}
      <MotionStudioSection />

      {/* PROOF POINTS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={rise}
        transition={riseTransition}
        className="relative overflow-hidden border-y border-slate-200 bg-[#f7f8fc] py-14 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-2 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-indigo-600">Experience with purpose</p>
            <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Built around real business needs</h2>
          </div>
          <div className="grid gap-8 border-t border-slate-200 pt-8 text-center sm:grid-cols-3 sm:gap-4">
            <AnimatedCounter value={15} suffix="+" label="Years Overall Experience" />
            <AnimatedCounter value={1000} suffix="+" label="Satisfied Clients" />
            <AnimatedCounter value={90} suffix="%" label="Positive Feedbacks" />
          </div>
        </div>
      </motion.section>

      {/* WHY TAGITSTORE */}
      <section className="relative overflow-hidden bg-[#090d18] py-20 text-white sm:py-28">
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.13] [background-image:radial-gradient(rgba(148,163,184,0.8)_0.7px,transparent_0.7px)] [background-size:20px_20px]" />
        <div aria-hidden="true" className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <motion.div variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={riseTransition}>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-300">The TAGITStore approach</p>
              <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.05em] sm:text-5xl">Practical by design.<span className="block text-slate-500">People at the center.</span></h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400 sm:text-base">Good technology is more than features. It should fit the way your business works, help your team move with confidence, and make the next step clearer.</p>
              <Link to="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-cyan-300">Get to know us <ArrowRight className="h-4 w-4" /></Link>
              <div className="mt-10 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-300">Thoughtful tools</span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-300">Clear support</span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-300">Built for business</span>
              </div>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    variants={rise}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ ...riseTransition, delay: index * 0.07 }}
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    className="group rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 transition-colors duration-300 hover:border-cyan-300/25 hover:bg-white/[0.075]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-cyan-300 transition duration-300 group-hover:scale-105 group-hover:bg-cyan-300/10"><Icon className="h-5 w-5" /></div>
                    <h3 className="mt-5 text-base font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{item.text}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={riseTransition}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-700 via-violet-700 to-[#0c9eb5] p-8 text-white shadow-[0_30px_90px_rgba(79,70,229,0.2)] sm:rounded-[2.5rem] sm:p-12 lg:p-16"
        >
          <div aria-hidden="true" className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/15" />
          <div aria-hidden="true" className="absolute -right-4 -top-12 h-56 w-56 rounded-full border border-white/10" />
          <div aria-hidden="true" className="absolute bottom-[-6rem] left-[35%] h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/70">Your next step starts here</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">Let’s make business feel simpler.</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">Tell us what your business needs. We’ll help you explore the right next step with TAGITStore.</p>
            </div>
            <Link to="/contact" className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-white px-6 py-4 text-sm font-black text-indigo-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-slate-100">Start a conversation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
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
  const shouldReduceMotion = useReducedMotion();
  const features = [
    {
      icon: Users,
      number: "01",
      title: "Customer management",
      text: "Keep customer information organized and make important records easier to find.",
      tone: "from-indigo-500/15 to-violet-500/5",
    },
    {
      icon: Package,
      number: "02",
      title: "Pledge management",
      text: "Keep pledge details together in a structured, easier-to-follow workflow.",
      tone: "from-cyan-500/15 to-sky-500/5",
    },
    {
      icon: BarChart3,
      number: "03",
      title: "Business reports",
      text: "Review useful business information to better understand day-to-day activity.",
      tone: "from-emerald-500/15 to-teal-500/5",
    },
    {
      icon: Cloud,
      number: "04",
      title: "Cloud access",
      text: "Access business information through cloud-based technology when you need it.",
      tone: "from-blue-500/15 to-indigo-500/5",
    },
    {
      icon: Lock,
      number: "05",
      title: "Security-focused platform",
      text: "Keep information protection in focus as your daily work moves forward.",
      tone: "from-violet-500/15 to-fuchsia-500/5",
    },
    {
      icon: Zap,
      number: "06",
      title: "Efficient operations",
      text: "Bring recurring tasks into clearer workflows and reduce unnecessary friction.",
      tone: "from-amber-500/15 to-orange-500/5",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Our Product"
        title="Pawn broker operations, brought into focus."
        description="A practical technology solution for organizing customer records, pledge information, transactions, and everyday business workflows."
      />

      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-8 h-80 w-80 rounded-full bg-indigo-100/70 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.65, ease: "easeOut" }}
          >
            <p className="text-xs font-black uppercase tracking-[0.24em] text-indigo-600">Designed around real workflows</p>
            <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Less scattered work.
              <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">More clarity every day.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Bring key information into a more organized experience, so your team can focus on customers and the work that matters.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-indigo-700">
                Discuss your needs <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/support" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700">
                Explore support
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-indigo-400/20 via-violet-400/10 to-cyan-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-5 text-white shadow-[0_30px_90px_rgba(15,23,42,0.25)] sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400"><Layers3 className="h-5 w-5" /></div>
                  <div><p className="text-sm font-bold">Operations overview</p><p className="mt-1 text-xs text-slate-400">A clearer business workspace</p></div>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">Organized</span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs text-slate-400">Customer records</p><div className="mt-4 flex items-center gap-2"><Users className="h-4 w-4 text-cyan-300" /><span className="text-sm font-semibold">Easy to find</span></div><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-3/4 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" /></div></div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs text-slate-400">Pledge details</p><div className="mt-4 flex items-center gap-2"><Package className="h-4 w-4 text-violet-300" /><span className="text-sm font-semibold">Structured flow</span></div><div className="mt-4 flex gap-1.5"><span className="h-1.5 flex-1 rounded-full bg-violet-400" /><span className="h-1.5 flex-1 rounded-full bg-violet-400/60" /><span className="h-1.5 flex-1 rounded-full bg-white/10" /></div></div>
              </div>
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="mb-4 flex items-center justify-between"><p className="text-sm font-bold">Daily workflow</p><span className="text-[10px] uppercase tracking-wider text-slate-500">Illustrative preview</span></div>
                <div className="grid grid-cols-3 gap-2">
                  {[{ icon: Users, label: "Customers" }, { icon: Package, label: "Pledges" }, { icon: BarChart3, label: "Reports" }].map((item, index) => { const Icon = item.icon; return <motion.div key={item.label} animate={shouldReduceMotion ? undefined : { y: [0, index === 1 ? -4 : 2, 0] }} transition={shouldReduceMotion ? undefined : { duration: 3.5 + index * 0.5, repeat: Infinity, ease: "easeInOut" }} className="rounded-xl border border-white/10 bg-slate-900/80 px-2 py-4 text-center"><Icon className="mx-auto h-5 w-5 text-cyan-300" /><p className="mt-2 text-[11px] font-semibold text-slate-200">{item.label}</p></motion.div>; })}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-400"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />Connected information. Clearer next steps.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-indigo-600">Core capabilities</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">The details that keep work moving.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">A practical set of capabilities built around the everyday needs of pawn broker operations.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, index) => { const Icon = item.icon; return (
              <motion.article key={item.title} initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: shouldReduceMotion ? 0.01 : 0.45, delay: shouldReduceMotion ? 0 : index * 0.045 }} whileHover={shouldReduceMotion ? undefined : { y: -5 }} className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-indigo-950/5 sm:p-7">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.tone}`} />
                <div className="flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300 transition duration-300 group-hover:scale-105 group-hover:bg-indigo-600"><Icon className="h-5 w-5" /></div><span className="text-xs font-black tracking-[0.18em] text-slate-300">{item.number}</span></div>
                <h3 className="mt-6 text-lg font-extrabold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                <div className="mt-5 flex items-center gap-2 text-xs font-bold text-indigo-600">Explore capability <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></div>
              </motion.article>
            ); })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
          <div aria-hidden="true" className="absolute -right-12 -top-24 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl" />
          <div aria-hidden="true" className="absolute bottom-[-7rem] left-1/3 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">Start a conversation</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Let’s find the right workflow for your business.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">Tell us what you need to organize, and our team can discuss the solution with you.</p></div>
            <Link to="/contact" className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100">Talk to our team <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
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
  const shouldReduceMotion = useReducedMotion();
  const supportOptions = [
    { icon: Headphones, number: "01", title: "Direct support", text: "Connect with our team for help with your TAGITStore solution.", action: "Call the team", href: "tel:+919843166444", accent: "text-cyan-300" },
    { icon: MessageCircle, number: "02", title: "Business guidance", text: "Talk through your requirements and get guidance on using technology in your workflow.", action: "Start on WhatsApp", href: "https://wa.me/919843166444", accent: "text-emerald-300" },
    { icon: Code2, number: "03", title: "Technical assistance", text: "Share a platform-related question or issue with the support team.", action: "Email support", href: "mailto:istorecare@tagit.store", accent: "text-violet-300" },
  ];

  return (
    <>
      <PageHero eyebrow="Customer Support" title="Good support starts with a clear next step." description="Get assistance, practical guidance, and a direct way to reach the TAGITStore team when you need help with your solution." />

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
        <div aria-hidden="true" className="absolute right-[-8rem] top-[-6rem] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div><p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">Help, without the guesswork</p><h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-5xl">Find the right way to reach us.</h2><p className="mt-5 max-w-lg text-base leading-8 text-slate-400">Choose the contact route that best fits your question. We can discuss product information, business requirements, and technical assistance.</p></div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[{ value: "Product", label: "Information" }, { value: "Technical", label: "Questions" }, { value: "Business", label: "Guidance" }].map((item, index) => <motion.div key={item.value} initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: shouldReduceMotion ? 0.01 : 0.4, delay: index * 0.08 }} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5"><p className="text-lg font-extrabold">{item.value}</p><p className="mt-1 text-xs text-slate-400">{item.label}</p><div className="mt-5 h-px bg-gradient-to-r from-cyan-300/70 to-transparent" /></motion.div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.24em] text-indigo-600">Contact options</p><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">A simple path to support.</h2><p className="mt-4 text-base leading-7 text-slate-600">Choose an option below to contact the team directly.</p></div>
          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {supportOptions.map((item, index) => { const Icon = item.icon; return <motion.article key={item.title} initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: shouldReduceMotion ? 0.01 : 0.45, delay: index * 0.07 }} whileHover={shouldReduceMotion ? undefined : { y: -5 }} className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-xl hover:shadow-slate-900/5"><div className="flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950"><Icon className={`h-5 w-5 ${item.accent}`} /></div><span className="text-xs font-black tracking-[0.2em] text-slate-300">{item.number}</span></div><h3 className="mt-6 text-xl font-extrabold text-slate-950">{item.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.text}</p><a href={item.href} target={item.href.startsWith("https://") ? "_blank" : undefined} rel={item.href.startsWith("https://") ? "noreferrer" : undefined} className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-indigo-600">{item.action}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a></motion.article>; })}
          </div>
          <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Have a specific requirement?</p><h3 className="mt-2 text-xl font-extrabold text-slate-950">Give us a little context.</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Email your question or call us to discuss product information, pricing, or support needs.</p></div><Link to="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-indigo-700">Contact details <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>
    </>
  );
}

/* =========================================================

   ABOUT PAGE

========================================================= */



function AboutPage() {
  const shouldReduceMotion = useReducedMotion();
  const values = [
    { icon: BadgeCheck, title: "Enduring commitment", text: "A long-term focus on dependable technology and customer relationships." },
    { icon: Headphones, title: "Anytime support", text: "Support that helps customers work through questions and requirements." },
    { icon: Cloud, title: "Access anywhere", text: "Cloud-based technology designed around accessibility and convenience." },
    { icon: Users, title: "Customer values", text: "Practical solutions shaped around real business needs." },
    { icon: Sparkles, title: "Affordability", text: "A focus on useful features and practical business value." },
    { icon: ShieldCheck, title: "Data security", text: "Keeping protection and responsible handling of information in focus." },
  ];

  return (
    <>
      <PageHero eyebrow="About TAGITStore" title="Technology should make business feel simpler." description="We focus on practical technology and SaaS-based solutions that help businesses organize their work, serve customers, and move forward with confidence." />

      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div aria-hidden="true" className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-indigo-100/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: shouldReduceMotion ? 0.01 : 0.6 }}>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-indigo-600">Our story</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">Experience, innovation, and a commitment to the everyday details.</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">TAGITStore is part of TAGTES Group and focuses on delivering innovative technology and SaaS-based solutions for businesses.</p>
            <p className="mt-4 text-base leading-8 text-slate-600">Our approach centers on practical business requirements, security-focused technology, accessibility, affordability, and long-term customer support.</p>
            <div className="mt-8 flex flex-wrap gap-2">{["Practical by design", "Customer focused", "Built for business"].map((item) => <span key={item} className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700">{item}</span>)}</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: shouldReduceMotion ? 0.01 : 0.7 }} className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-indigo-400/20 via-violet-400/10 to-cyan-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)] sm:p-8">
              <div className="flex items-center justify-between"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">The TAGITStore approach</p><p className="mt-2 text-lg font-extrabold">Useful technology. Clearer work.</p></div><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400"><Sparkles className="h-6 w-6" /></div></div>
              <div className="relative my-8 flex h-52 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950">
                <motion.div aria-hidden="true" animate={shouldReduceMotion ? undefined : { rotate: 360 }} transition={shouldReduceMotion ? undefined : { duration: 24, repeat: Infinity, ease: "linear" }} className="absolute h-40 w-40 rounded-full border border-cyan-300/20"><span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300" /></motion.div>
                <motion.div aria-hidden="true" animate={shouldReduceMotion ? undefined : { rotate: -360 }} transition={shouldReduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: "linear" }} className="absolute h-28 w-28 rounded-full border border-violet-300/30"><span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-violet-300" /></motion.div>
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-white/10 shadow-[0_0_55px_rgba(34,211,238,0.18)] backdrop-blur"><Layers3 className="h-8 w-8 text-cyan-300" /></div>
                <div className="absolute left-4 top-4 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200">Practical tools</div><div className="absolute bottom-4 right-4 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200">People first</div>
              </div>
              <div className="grid grid-cols-3 gap-2">{[{ icon: ShieldCheck, label: "Security" }, { icon: Cloud, label: "Access" }, { icon: Users, label: "Customers" }].map((item) => { const Icon = item.icon; return <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.045] p-3 text-center"><Icon className="mx-auto h-4 w-4 text-cyan-300" /><p className="mt-2 text-[11px] font-bold text-slate-300">{item.label}</p></div>; })}</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.24em] text-indigo-600">Experience and focus</p><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">The foundation behind our work.</h2></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[{ icon: Sparkles, value: "15+", label: "Years of overall experience" }, { icon: Users, value: "1,000+", label: "Satisfied clients" }, { icon: ShieldCheck, value: "Secure", label: "Security-focused solutions" }, { icon: Cloud, value: "SaaS", label: "Cloud-based technology" }].map((item, index) => { const Icon = item.icon; return <motion.div key={item.label} initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: shouldReduceMotion ? 0.01 : 0.4, delay: index * 0.05 }} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7"><Icon className="h-5 w-5 text-indigo-600" /><p className="mt-6 text-3xl font-black tracking-tight text-slate-950">{item.value}</p><p className="mt-2 text-sm leading-6 text-slate-500">{item.label}</p></motion.div>; })}
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">Experience and client figures reflect the information currently presented by TAGITStore.</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.24em] text-indigo-600">Our values</p><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">What guides every decision.</h2><p className="mt-4 text-base leading-7 text-slate-600">The principles behind the products we build and the support we provide.</p></div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{values.map((item, index) => { const Icon = item.icon; return <motion.article key={item.title} initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: shouldReduceMotion ? 0.01 : 0.4, delay: index * 0.04 }} className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/5"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white"><Icon className="h-5 w-5" /></div><h3 className="mt-5 text-lg font-extrabold text-slate-950">{item.title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p></motion.article>; })}</div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 p-8 text-white sm:p-10 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-white/70">Let’s build forward</p><h2 className="mt-2 text-2xl font-black sm:text-3xl">Looking for a practical technology partner?</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">Tell us about your business and what you want to make simpler.</p></div><Link to="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-extrabold text-indigo-700 transition hover:-translate-y-0.5">Contact TAGITStore <ArrowRight className="h-4 w-4" /></Link></div></section>
    </>
  );
}

/* =========================================================

   PRICING PAGE

========================================================= */



function PricingPage() {
  const shouldReduceMotion = useReducedMotion();
  const plans = [
    { id: "01", label: "Starter", title: "Essential", description: "For businesses beginning their digital transformation journey.", points: ["Discuss core business needs", "Identify priority workflows", "Explore a suitable solution"], featured: false, action: "Explore essential options" },
    { id: "02", label: "Business", title: "Professional", description: "For businesses looking for broader capabilities and ongoing support.", points: ["Review broader requirements", "Discuss workflow improvements", "Plan support needs"], featured: true, action: "Discuss your requirements" },
    { id: "03", label: "Enterprise", title: "Custom", description: "For organizations with specialized requirements or larger deployments.", points: ["Discuss specific requirements", "Review implementation scope", "Explore a tailored approach"], featured: false, action: "Request details" },
  ];

  return (
    <>
      <PageHero eyebrow="Pricing" title="A solution shaped around your business." description="Technology needs differ from one business to another. Let’s discuss your goals, requirements, and implementation scope to find a suitable approach." />

      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div aria-hidden="true" className="absolute left-1/2 top-0 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-indigo-100/60 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-black uppercase tracking-[0.24em] text-indigo-600">Flexible by design</p><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">Clarity before commitment.</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">We’ll start by understanding what you need. Pricing depends on the selected solution, requirements, and implementation scope, so contact the team for details.</p></div>
          <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
            {plans.map((plan, index) => <motion.article key={plan.id} initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: shouldReduceMotion ? 0.01 : 0.48, delay: index * 0.07 }} whileHover={shouldReduceMotion ? undefined : { y: -5 }} className={`relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border p-7 shadow-sm transition-shadow sm:p-8 ${plan.featured ? "border-indigo-500 bg-slate-950 text-white shadow-2xl shadow-indigo-950/15" : "border-slate-200 bg-white text-slate-950 hover:shadow-xl hover:shadow-slate-900/5"}`}>
              {plan.featured && <><div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-500/25 blur-3xl" /><span className="absolute right-5 top-5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.17em] text-cyan-300">Popular option</span></>}
              <div className="relative"><p className={`text-xs font-black uppercase tracking-[0.2em] ${plan.featured ? "text-cyan-300" : "text-indigo-600"}`}>{plan.id} / {plan.label}</p><h3 className="mt-4 text-3xl font-black tracking-tight">{plan.title}</h3><p className={`mt-4 min-h-[4.5rem] text-sm leading-7 ${plan.featured ? "text-slate-300" : "text-slate-600"}`}>{plan.description}</p><div className={`my-6 h-px ${plan.featured ? "bg-white/15" : "bg-slate-200"}`} /><ul className="space-y-3">{plan.points.map((point) => <li key={point} className={`flex items-start gap-2.5 text-sm ${plan.featured ? "text-slate-200" : "text-slate-700"}`}><CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-cyan-300" : "text-emerald-500"}`} />{point}</li>)}</ul><div className="mt-8 flex-1" /><Link to="/contact" className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-extrabold transition hover:-translate-y-0.5 ${plan.featured ? "bg-white text-slate-950 hover:bg-cyan-100" : "border border-slate-200 bg-white text-slate-800 hover:border-indigo-300 hover:text-indigo-700"}`}>{plan.action}<ArrowRight className="h-4 w-4" /></Link></div>
            </motion.article>)}
          </div>
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"><div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm"><MessageCircle className="h-5 w-5" /></div><div><p className="text-sm font-extrabold text-slate-950">Not sure which option fits?</p><p className="mt-1 text-sm leading-6 text-slate-600">Tell us what you are trying to achieve, and we can discuss an appropriate starting point.</p></div></div><Link to="/contact" className="inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-indigo-600">Talk to the team <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>
    </>
  );
}

/* =========================================================

   CONTACT PAGE

========================================================= */



function ContactPage() {
  const shouldReduceMotion = useReducedMotion();
  const contactMethods = [
    { icon: Mail, label: "Email", detail: "istorecare@tagit.store", hint: "For enquiries and product information", href: "mailto:istorecare@tagit.store?subject=TAGITStore%20Website%20Enquiry", tone: "bg-indigo-50 text-indigo-600", external: false },
    { icon: Phone, label: "Phone", detail: "+91 98431 66444", hint: "Speak with the team", href: "tel:+919843166444", tone: "bg-cyan-50 text-cyan-700", external: false },
    { icon: MessageCircle, label: "WhatsApp", detail: "Message TAGITStore", hint: "Start a conversation", href: "https://wa.me/919843166444", tone: "bg-emerald-50 text-emerald-700", external: true },
  ];

  return (
    <>
      <PageHero eyebrow="Contact Us" title="Every good solution starts with a conversation." description="Tell the TAGITStore team what you’re looking to improve. We can discuss product information, support, pricing, and your business requirements." />

      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-cyan-100/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <motion.div initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: shouldReduceMotion ? 0.01 : 0.55 }} className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-xl shadow-slate-950/10 sm:p-9">
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-indigo-500/25 blur-3xl" /><div aria-hidden="true" className="absolute bottom-[-5rem] left-[-3rem] h-52 w-52 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="relative"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400"><MessageCircle className="h-5 w-5" /></div><p className="mt-8 text-xs font-black uppercase tracking-[0.24em] text-cyan-300">Get in touch</p><h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl">Let’s make the next step clear.</h2><p className="mt-5 text-sm leading-7 text-slate-300">Whether you have a question about a product or a specific business requirement, choose a contact option and reach out to us.</p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.045] p-5"><div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" /><div><p className="text-sm font-extrabold">TAGITStore</p><p className="mt-1 text-sm text-slate-400">India</p></div></div><div className="mt-5 h-px bg-white/10" /><p className="mt-4 text-xs leading-6 text-slate-400">For product information, support requirements, pricing, and business solution enquiries.</p></div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            <div className="mb-1"><p className="text-xs font-black uppercase tracking-[0.24em] text-indigo-600">Choose your channel</p><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">How can we help?</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">Use the option that feels easiest. Each link opens the relevant contact method directly.</p></div>
            {contactMethods.map((item, index) => { const Icon = item.icon; return <motion.a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: shouldReduceMotion ? 0.01 : 0.4, delay: index * 0.06 }} whileHover={shouldReduceMotion ? undefined : { x: 4 }} className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-200 hover:shadow-lg hover:shadow-slate-900/5 sm:p-6"><div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.tone}`}><Icon className="h-5 w-5" /></div><div className="min-w-0 flex-1"><p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{item.label}</p><p className="mt-1 break-words text-base font-extrabold text-slate-950">{item.detail}</p><p className="mt-1 text-xs text-slate-500">{item.hint}</p></div><ArrowRight className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-indigo-600" /></motion.a>; })}
            <div className="mt-2 rounded-2xl border border-indigo-100 bg-indigo-50/80 p-5 sm:p-6"><p className="text-sm font-extrabold text-slate-950">What would you like to discuss?</p><div className="mt-4 flex flex-wrap gap-2">{["Product information", "Support", "Pricing", "Business requirements"].map((item) => <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-white px-3 py-2 text-xs font-bold text-slate-700"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />{item}</span>)}</div></div>
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
      <ScrollProgress />
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