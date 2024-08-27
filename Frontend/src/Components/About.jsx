

function About() {
    return (
        <section id='about-section' className="bg-white">
            <div className="gap-16 items-center p-10 mx-auto max-w-screen-xl grid md:grid-cols-2 grid-cols-1">
                <div className="font-normal text-black ">
                    <h2 className="text-2xl md:text-5xl font-semibold font-thinspaced tracking-widest text-gray-900 mb-5 md:mb-20">What We Do!</h2>
                    <p className="mb-6 text-sm md:text-2xl text-left"> We revolutionize the online shopping experience by combining cutting-edge technology with personalized service. Our platform empowers customers to confidently shop for clothing, accessories, and furniture through AI-powered virtual try-ons and smart recommendations. We enable you to see exactly how products will fit and look on you or in your home, offering a truly immersive and customized shopping journey. By leveraging Augmented Reality (AR) and Artificial Intelligence (AI), we not only bring products to life but also ensure that every recommendation, deal, and service is tailored just for you. Whether you&apos;re looking for the perfect outfit or the ideal piece of furniture, we make your shopping experience seamless, interactive, and uniquely yours.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-5 md:mt-20">
                    <img className="w-full rounded-lg " src="/ar.jpg" alt="1" />
                    <img className="w-full mt-10 rounded-lg " src="/ar2.webp" alt="2" />
                    <img className="w-full mt-10 rounded-lg " src="/ar3.jpg" alt="2" />
                    <img className="w-full rounded-lg " src="/ar4.png" alt="1" />
                </div>
            </div>
        </section>
    )
}

export default About