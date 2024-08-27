
function Hero() {
    return (
        <>
            <div className="h-[25vh] md:h-[50vh] bg-no-repeat bg-local">
                <h1 className='text-3xl md:text-7xl text-center font-boldhead text-white tracking-wider mt-40'>
                    RocketSpace🚀
                </h1>
                <h2 className='text-xl md:text-5xl text-center text-white my-5 font-thinspaced tracking-wider'>
                Delivering experiences at speed of ⚡
                </h2>
                <p className='text-sm md:text-xl text-center md:my-5 md:pt-10 md:px-40 text-white'>
                Experience Shopping Like Never Before – Try, See, and Personalize Your Perfect Fit!              </p>
                <div className="flex space-x-4 justify-center">
                    <a href="#about-section" className="text-black duration-300 bg-white rounded-full font-semibold m-3 p-2 px-4 hover:bg-gray-400 hover:text-white ">View Our Services</a>
                </div>
            </div>
            <div className="container mx-auto mt-8 text-center scroll-smooth">
                <a href="#about-section">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-6 h-6 m-auto my-10 animate-bounce">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                </a>
            </div>
        </>
    )
}

export default Hero