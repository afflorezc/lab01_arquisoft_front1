import "@/App.css";

export function Banner({className = ""}) {
    return(
    <div className={`banner text-center ${className}`} data-scroll-index="0">
    <div className="banner-overlay">
        <h1 className="text-capitalize">El mejor Banco para sus inversiones seguras</h1>
        <p>Las mejores tasas del mercado. Invierte ahora en el Gran Banco de la U.</p>
        <div className="flex intems-center justify-center p-4">
            <div className="grid grid-cols-2 gap-6 place-items-center">
            <div> <a href="/" className="banner-btn">Registrarse</a> </div> 
            <div className="colo-span-3"> <a href="/" className="banner-btn">Iniciar sesión</a> </div>
        </div>
        </div>
    </div>
    </div>
    );
}