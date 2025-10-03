import "@/App.css";
import { Card } from "@/components/ui/card";
import { FaPiggyBank } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { HandCoins } from 'lucide-react';

export function Services({className=""}){
    return(
        <div className={`{services section-padding bg-grey ${className}}`} data-scroll-index='2'>
            
            <div className="grid grid-cols-3 gap-10 pl-30 pr-30 w-full">
                <div className="md:col-span-3 section-title text-center">
                    <h3>Conoce nuestros servicios</h3>
                    <p>Explore las diferentes opciones de inversión y haga posible sus sueños.</p>
                    <span className="section-title-line"></span> 
                </div>
                
                <Card className="md:col-span-1 service-box bg-white text-center">
                    <FaChartLine className="w-full h-14 icon"></FaChartLine>
                    <div className="icon-text">
                        <h4 className="title-box">Inversiones</h4>
                        <p>Haga que su dinero crezca y logre una buena salud financiera.</p>
                    <a href="#" data-scroll-nav="2">Explorar</a>	
                    </div>
                </Card>

                <Card className="md:col-span-1 service-box bg-white text-center">
                     <FaPiggyBank className="w-full h-14 icon"></FaPiggyBank> 
                        <div className="icon-text">
                            <h4>Ahorro</h4>
                            <p>Maneja tu dinero, paga, transfiere y recibe tus pagos de manera eficiente.</p>
                            <a href="#" data-scroll-nav="2">Explorar</a>
                        </div>
                </Card>

                <Card className="md:col-span-1 service-box bg-white text-center">
                        <HandCoins className="icon w-full h-14"></HandCoins>
                        <div className="icon-text">
                            <h4 className="title-box">Crédito</h4>
                            <p>Acercate a tus sueños con los créditos más baratos y con beneficios académicos.</p>
                        <a href="#" data-scroll-nav="2">Explorar</a>
                        </div>
                </Card>
                
            </div>
        </div>
    );
}