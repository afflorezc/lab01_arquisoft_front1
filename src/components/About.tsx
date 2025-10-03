import "@/App.css";

export function About({className = ""}) {
    return(
        <div className={`{about-us section-padding ${className}}`} data-scroll-index='1'>
     
            <div className="grid grid-cols-2 gap-0 w-full">
                <div className="md:col-span-2 section-title text-center">
                    <h3>SOMOS EL MEJOR BANCO PARA LOS ESTUDIANTES</h3>
                    <p>
                        Sabemos lo díficil que es conseguir un crédito para un estudiante,
                        en el Gran Banco de la U, facilitamos todo para tí y con las mejores 
                        tasas.
                    </p>

                    <span className="section-title-line"></span> 
                </div>

                <div className="md:col-span-1 pt-4 pl-30">
                    <div className="sub-title-paragraph">
                        <h4>Listo para cumplir tus sueños profesionales.</h4>
                        <h5>Solo tienes que enfocarte en el triunfo. Exitos!</h5>
                        <p>Accede a productos de credito con las mejores tasas del mercado, asesoría financiera continua, plazos cómodos, 
                            cuotas bajas que podrá pagar siendo estudiante, además de incentivos de alto rendimiento académico que hacen del 
                            Gran Banco de la U su mejor opción. 
                        </p>
                        <p>Y no solo eso, en el Gran Banco de la U pensamos que la inversión es el mejor camino para el bienestar financiero. 
                            Conozca la variada oferta de cuentas de ahorro, corriente, fondos de inversión, CDTs y otros productos que lo harán
                            acercarse al cumplimiento de todos sus sueños. 
                        </p>
                        <a href="#" className="banner-btn"> Ver más <i className="fas fa-arrow-right pd-lt-10"></i></a>
                    </div>
                    
                </div>
                    <div className="md:col-span-1 pt-4 pl-15 pr-30">
                        <div className="sub-title-paragraph">
                            <div className="section-img"> <img src="/src/assets/asesoria-financiera.jpeg" alt="" className="img-responsive"/> </div>
                            <h5 className="pt-4"> Ayudando a estudiantes por más de 20 años!</h5>
                        </div>
                    </div>
         
                </div>  
        </div>
    );
}