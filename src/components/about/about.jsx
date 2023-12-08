import React from 'react';
import "./about.scss";
import Carousel from './carousel/carousel';

const About = () => {
    return (
        <>
            <section className="bg-gray-100">
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Sobre Nosotros</h2>
                            <p className="mt-4 text-gray-600 text-lg">Cooperativa Tatá Pariri es una institución localizada en Puerto Ana, Provincia de Misiones,
                                República Argentina, que se fundó en el año 2023, con la intención de impulsar el desarrollo económico local, tener un impacto
                                positivo en la creación de empleo y en el bienestar económico de la comunidad en general.</p>
                            <div className="mt-8">
                            </div>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;