import "@/App.css"
import { FaPhone } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export function Contact({className=""}){
    return(
        <div className={`{contact section-padding ${className}}`} data-scroll-index='3'>
    
            <div className="grid grid-cols-7 gap-0 w-full">
                <div className="md:col-span-7 section-title text-center">
                    <h3>Te escuchamos</h3>
                    <p>Deja tu mensaje y te atenderemos pronto.</p>
                    <span className="section-title-line"></span>
                </div>

                <div className="md:col-span-3 pl-30 part-info text-left">
                    <div className="info-box">
                        <FaPhone className="h-6 icon"></FaPhone>
                        <div className="content">
                            <h4>Teléfono :</h4>
                            <p>(604) 233 6545</p>
                        </div>
                    </div>
                    <div className="info-box">
                        <FaMapMarkedAlt className="h-6 icon"></FaMapMarkedAlt>
                        <div className="content">
                            <h4>Dirección :</h4>
                            <p>Calle 4 # 45B34, Medellín</p>
                        </div>
                    </div>
                    <div className="info-box">
                        <FaEnvelope className="h-6 icon"></FaEnvelope>
                        <div className="content">
                            <h4>Correo :</h4>
                            <p><a href="#">contacto@bancodelau.com</a></p>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-4 pr-30 contact-form">
                    <form className='form' id='contact-form' method='post' data-toggle='validator'>
                        <input type='hidden' name='form-name' value='contact-form' />
                        <div className="messages"></div>
                        <div className="controls">
                        <div className="grid grid-cols-2 gap-6 w-full">
                            <div className="md:col-span-1">
                            <div className="form-group">
                                <input id="form_name" type="text" name="name" placeholder="Nombre *" required data-error="name is required."/>
                                <div className="help-block with-errors"></div>
                            </div>
                            </div>
                            <div className="md:col-span-1">
                            <div className="form-group">
                                <input id="form_email" type="email" name="email" placeholder="Email *" required data-error="Valid email is required."/>
                                <div className="help-block with-errors"></div>
                            </div>
                            </div>
                            <div className="md:col-span-2">
                            <div className="form-group">
                                <input id="form_subject" type="text" name="subject" placeholder="Asunto"/>
                            </div>
                            </div>
                            <div className="md:col-span-2 form-group">
                            <textarea id="form_message" name="message" className="form-control h-25" placeholder=" Escribe tu mensaje " required data-error="Please,leave us a message."/>
                            <div className="help-block with-errors"></div>
                            </div>
                            <div className="md:col-span-2 text-center">
                            <button className="bttn">Enviar</button>
                            </div>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

