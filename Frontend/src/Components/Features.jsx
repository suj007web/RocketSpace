

function Features() {
    return (
        <div id="features-section" className="text-center pt-20 bg-gray-900 p-10">
            <h1 className="text-5xl font-semibold  font-thinspaced tracking-widest mb-20 text-white">Prime Features</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                <div className="bg-white p-6 rounded-md shadow-md mb-10">
                    <h2 className="text-xl font-semibold mb-4">Better Visualization</h2>
                    <p>Implement AR technology that allows users to visualize products in their real-world environment using their smartphone or tablet camera.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-md mt-10">
                    <h2 className="text-xl font-semibold mb-4">Virtual Reality (VR) Shopping Experience</h2>
                    <p>Create a fully immersive VR shopping experience where users can explore a virtual store, interact with products, and even experience a virtual fitting room.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-md mb-10">
                    <h2 className="text-xl font-semibold mb-4">AI-Powered Personal Shopping Assistant</h2>
                    <p>Integrate an AI-driven personal shopping assistant that offers real-time recommendations, answers queries, and helps users navigate the store based on their preferences and shopping history.</p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-md mb-10">
                    <h2 className="text-xl font-semibold mb-4">AI-Powered Conversational Commerce</h2>
                    <p>Integrate an AI chatbot that guides users through the entire shopping journey by answering product-related questions, assisting with checkout, providing order updates, and even processing returns or exchanges through natural, conversational interactions.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-md mt-10">
                    <h2 className="text-xl font-semibold mb-4">3D Product Configurator</h2>
                    <p>Provide a 3D product configurator that allows users to customize products in real-time by choosing different colors, materials, and features, and viewing the changes in a 3D model.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-md mb-10">
                    <h2 className="text-xl font-semibold mb-4">Virtual Try-On for Fashion and Accessories</h2>
                    <p>Implement virtual try-on technology using AR for fashion items like clothes, eyewear, or jewelry, allowing users to see how these items would look on them without physically trying them on.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Features