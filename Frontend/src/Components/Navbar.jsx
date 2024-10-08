/* eslint-disable react/prop-types */
// import React from 'react'

// function Navbar() {
//     return (
//         <nav className="bg-[url('/gradient-bg.jpg')] p-1 sticky top-0 z-50">
//             <div className="container mx-auto flex items-center justify-between">
//                 <div className="logo text-white text-2xl font-bold">RocketSpace🚀</div>
//                 {/* <div class="text-4xl font-extrabold">
//                     <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-600">
//                         Logo
//                     </span>
//                 </div> */}

//                 <div className="flex space-x-4">
                    // <a href="/" className="text-white font-semibold m-2 p-3 text-lg duration-200 hover:opacity-80">Home</a>
//                     <a href="#features-section" className="text-white font-semibold m-2 p-3 text-lg duration-200 hover:opacity-80">Features</a>
//                     <a href="/totalizer" className="text-white font-semibold m-2 p-3 text-lg duration-200 hover:opacity-80">Totalizer</a>
//                     <a href="/marketplace" className="text-white font-semibold m-2 p-3 text-lg duration-200 hover:opacity-80">Marketplace</a>
//                     <a href="/visualization" className="text-white font-semibold m-2 p-3 text-lg duration-200 hover:opacity-80">Visualization</a>
//                     <a href="/chatbot" className="text-white font-semibold m-2 p-3 text-lg duration-200 hover:opacity-80">Chatbot</a>
//                     <a href="#" className="text-white border-solid rounded-full border-2 border-black font-semibold m-2 p-3 text-lg duration-200 hover:bg-black">Download</a>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar



import { useEffect, useRef, useState } from "react";
import { useAnimate, motion } from "framer-motion";
import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { BiCart } from "react-icons/bi";

const Example = () => {
  return (
  
      <GlassNavigation />

    
  );
};

const GlassNavigation = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [scope, animate] = useAnimate();
  const navRef = useRef(null);

  const handleMouseMove = ({ offsetX, offsetY, target }) => {
    // @ts-ignore
    const isNavElement = [...target.classList].includes("glass-nav");

    if (isNavElement) {
      setHovered(true);

      const top = offsetY + "px";
      const left = offsetX + "px";

      animate(scope.current, { top, left }, { duration: 0 });
    } else {
      setHovered(false);
    }
  };

  useEffect(() => {
    navRef.current?.addEventListener("mousemove", handleMouseMove);

    return () =>
      navRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <nav
      ref={navRef}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: hovered ? "none" : "auto",
      }}
      className="z-30 glass-nav fixed left-0 right-0 top-0  mx-auto max-w-6xl overflow-hidden border-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-2xl"
    >
      <div className="glass-nav flex items-center justify-between px-5 py-5">
        <Cursor hovered={hovered} scope={scope} />

        <Links />

        <Logo />

        <Buttons setMenuOpen={setMenuOpen} />
      </div>

      <MobileMenu menuOpen={menuOpen} />
    </nav>
  );
};

const Cursor = ({ hovered, scope }) => {
  return (
    <motion.span
      initial={false}
      animate={{
        opacity: hovered ? 1 : 0,
        transform: `scale(${
          hovered ? 1 : 0
        }) translateX(-50%) translateY(-50%)`,
      }}
      transition={{ duration: 0.15 }}
      ref={scope}
      className="pointer-events-none absolute z-0 grid h-[50px] w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 text-2xl"
    >
      <FiArrowUpRight className="text-white" />
    </motion.span>
  );
};

const Logo = () => (
  <span className="pointer-events-none relative left-0 top-[50%] z-10 text-xl md:text-4xl font-black text-white mix-blend-overlay md:absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]">
    RocketSpace🚀
  </span>
);

const Links = () => (
  <div className="hidden items-center gap-2 md:flex">
    <GlassLink text="Home" href={"/"} />
    <GlassLink text="Products" href="/marketplace" />
    <GlassLink text="ChatBot" href={"/chatbot"} />
    <GlassLink text="VR" href={"/vr"}/>
  </div>
);

const GlassLink = ({ text, href }) => {
  return (
    

    <a
      href={href}
      className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
        {text}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
};

const TextLink = ({ text, href }) => {
  return (
    <a href={href} className="text-white/90 transition-colors hover:text-white">
      {text}
    </a>
  );
};

const Buttons = ({ setMenuOpen }) => (
  <div className="flex items-center gap-4">
    <div className="hidden md:block">
      <SignInButton />
    </div>

    <button className="relative scale-100 overflow-hidden rounded-lg bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 px-4 py-2 font-medium text-white transition-transform hover:scale-105 active:scale-95 flex justify-center place-items-center gap-2">
      <BiCart className="text-lg"/> Cart
    </button>

    <button
      onClick={() => setMenuOpen((pv) => !pv)}
      className="ml-2 block scale-100 text-3xl text-white/90 transition-all hover:scale-105 hover:text-white active:scale-95 md:hidden"
    >
      <FiMenu />
    </button>
  </div>
);

const SignInButton = () => {
  return (
    <a href="/signin">
    <button className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
        Sign in
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
    </a>
  );
};

const MobileMenu = ({ menuOpen }) => {
  const [ref, { height }] = useMeasure();
  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? height : "0px",
      }}
      className="block overflow-hidden md:hidden"
    >
      <div ref={ref} className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center gap-4">
          <TextLink text="Home" href={"/"}/>
          <TextLink text="Products" href={"/marketplace"}/>
          <TextLink text="ChatBot" href={"/chatbot"} />
        </div>
        <SignInButton />
      </div>
    </motion.div>
  );
};

export default Example;