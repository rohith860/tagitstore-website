import { useRef, useState } from "react";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import {

  BrowserRouter,

  Link,

  NavLink,

  Navigate,

  Route,

  Routes,

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
