/* eslint-disable react/prop-types */


import { motion } from "framer-motion";
function Marketplace() {
  return (
    <>
      <h1 className="mt-40 text-center font-bold text-xl md:text-7xl text-white ">
        Rocket Mart
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 p-20 gap-5">
        <Product title="Laptop" price="80000" image="LAPTOP.glb" />
        <Product title="Gaming Chair" price="8000" image="gamingchair.glb" />
        <Product title="Gaming PC" price="60000" image="cabinet.glb" />
        <Product title="Mouse" price="1000" image="mouse.glb" />
        <Product title="Bagpack" price="2000" image="backpack.glb" />
        <Product title="Monitor" price="10000" image="ultrawide_monitor.glb" />
      </div>
    </>
  );
}

export default Marketplace;

function Product(props) {
  return (
    <>
     

      <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50">
        <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
          <model-viewer
            src={props.image}
            style={{
              width: "80%",
              margin: "20px auto 20px auto",
              height: "150px",
              backgroundColor: "#ffff",
              borderRadius : "10px",
              "--poster-color": "#ffffff00",
            }}
         
            poster="logo.png"
            alt="mgcms"
            shadow-intensity="1"
            camera-controls
            auto-rotate
            ar
          />

          <h5 className="text-md md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
            {props.title}
          </h5>
          
            <div className="grid grid-cols-1 items-center justify-between ">
              <span className="text-sm md:text-xl text-center font-bold text-gray-900 dark:text-white my-2">
                Price: Rs.{" "}
                <span className="text-sm md:text-2xl">{props.price}</span>
              </span>
              <a
                href="#"
                className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center my-2"
              >
                Buy Now
              </a>
            
          </div>
        </div>

        <motion.div
          initial={{ rotate: "0deg" }}
          animate={{ rotate: "360deg" }}
          style={{ scale: 1.75 }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "linear",
          }}
          className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
    </>
  );
}
