import "./Experience.css";
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'


export default function Experience(){
    const [visibleA, setVisibleA] = useState(false);
    const hideA = () => setVisibleA(false)
    const showA = () => setVisibleA(true)

    const [visibleB, setVisibleB] = useState(false);
    const hideB = () => setVisibleB(false)
    const showB = () => setVisibleB(true)

    const [visibleC, setVisibleC] = useState(false);
    const hideC = () => setVisibleC(false)
    const showC = () => setVisibleC(true)

    const [visibleD, setVisibleD] = useState(false);
    const hideD = () => setVisibleD(false)
    const showD = () => setVisibleD(true)
    
    const [visibleE, setVisibleE] = useState(false);
    const hideE = () => setVisibleE(false)
    const showE = () => setVisibleE(true)
    
    const [visibleF, setVisibleF] = useState(false);
    const hideF = () => setVisibleF(false)
    const showF = () => setVisibleF(true)
    
    const [visibleG, setVisibleG] = useState(false);
    const hideG = () => setVisibleG(false)
    const showG = () => setVisibleG(true)
    
    const [visibleH, setVisibleH] = useState(false);
    const hideH = () => setVisibleH(false)
    const showH = () => setVisibleH(true)
    
    const [visibleI, setVisibleI] = useState(false);
    const hideI = () => setVisibleI(false)
    const showI = () => setVisibleI(true)
    
    const [visibleJ, setVisibleJ] = useState(false);
    const hideJ = () => setVisibleJ(false)
    const showJ = () => setVisibleJ(true)

    return(
        <>  
            <main className="experience-main">
                <div className="title1">
                    <h1>Experiencia Laboral</h1>
                </div>
                <div>
                    <section className="work">
                        <h2 className="position">ATENCIÓN AL CLIENTE</h2>
                        <div className="display">
                            <h3 className="company">Malvon | 12/2021 - Actualidad</h3>
                            <button className={visibleA? "hideButton": "showButton"} onClick={showA}><FontAwesomeIcon className="fontDisplay" icon={faAngleDown}/></button>
                            <button className={visibleA? "showButton": "hideButton"} onClick={hideA}><FontAwesomeIcon icon={faAngleUp}/></button>
                        </div>
                        <ul className={visibleA? "activities-display": "activities-no-display"}>
                            <li className="activities-item">Atención al cliente.</li>
                            <li className="activities-item">Manejo de caja.</li>
                            <li className="activities-item">Responsable de la tienda en turno noche.</li>
                        </ul>
                    </section>
                    <section className="work">
                        <h2 className="position">PROYECTO INTEGRADOR REALIZADO EN DIGITAL HOUSE</h2>
                        <div className="display">
                            <h3 className="company">Digital House | 2021</h3>
                            <button className={visibleB? "hideButton": "showButton"} onClick={showB}><FontAwesomeIcon className="fontDisplay" icon={faAngleDown}/></button>
                            <button className={visibleB? "showButton": "hideButton"} onClick={hideB}><FontAwesomeIcon icon={faAngleUp}/></button>
                        </div>
                        <ul className={visibleB? "activities-display": "activities-no-display"}>
                            <li className="activities-item">Desarrollo de un sitio web e-commerce durante el curso de desarrollo full stack.</li>
                            <li className="activities-item">Responsable del desarrollo front-end utlizando HTML, CSS y Javascript.</li>
                            <li className="activities-item">Responsable del back-end como parte de un equipo, especialmente middlewares y CRUD.</li>
                        </ul>
                    </section>
                    <section className="work">
                        <h2 className="position">OSP PARA SUDAMERICA HISPANA - ANALISTA SENIOR</h2>
                        <div className="display">
                            <h3 className="company">Accenture Service Center SRL | 2020 - 2021</h3>
                            <button className={visibleC? "hideButton": "showButton"} onClick={showC}><FontAwesomeIcon className="fontDisplay" icon={faAngleDown}/></button>
                            <button className={visibleC? "showButton": "hideButton"} onClick={hideC}><FontAwesomeIcon icon={faAngleUp}/></button>
                        </div>
                        <ul className={visibleC? "activities-display": "activities-no-display"}>
                            <li className="activities-item">Responsable de las reuniones de nuevos negocios y realización de reportes para Sudamérica Hispana.</li>
                            <li className="activities-item">Trabajo junto con los equipos de venta y managers. Solicitud de aprobaciones a managers.</li>
                            <li className="activities-item">Actualización de información en las oportunidades de venta y documentación de aprobaciones.</li>
                            <li className="activities-item">Seguimiento de las oportunidades de negocios para mantenerlas actualizadas conforme a las políticas de la empresa.</li>
                        </ul>
                    </section>
                    <section className="work">
                        <h2 className="position">OSP PARA H&PS ICEG Y SUDAMERICA HISPANA - ANALISTA SENIOR</h2>
                        <div className="display">
                            <h3 className="company">Accenture Service Center SRL | 2016 - 2020</h3>
                            <button className={visibleD? "hideButton": "showButton"} onClick={showD}><FontAwesomeIcon className="fontDisplay" icon={faAngleDown}/></button>
                            <button className={visibleD? "showButton": "hideButton"} onClick={hideD}><FontAwesomeIcon icon={faAngleUp}/></button>
                        </div>
                        <ul className={visibleD? "activities-display": "activities-no-display"}>
                            <li className="activities-item">Responsable de las reuniones de nuevos negocios y realización de reportes para H&PS ICEG y Sudamérica.</li>
                            <li className="activities-item">Trabajo junto con los equipos de venta y managers. Solicitud de aprobaciones a managers.</li>
                            <li className="activities-item">Actualización de información en las oportunidades de venta y documentación de aprobaciones.</li>
                            <li className="activities-item">Seguimiento de las oportunidades de negocios para mantenerlas actualizadas conforme a las políticas de la empresa.</li>
                            <li className="activities-item">QA tester.</li>
                        </ul>
                    </section>
                    <section className="work">
                        <h2 className="position">OSP PARA CMT NORTEAMERICA PACIFICO – ANALISTA.</h2>
                        <div className="display">
                            <h3 className="company">Accenture Service Center SRL | 2014 - 2016</h3>
                            <button className={visibleE? "hideButton": "showButton"} onClick={showE}><FontAwesomeIcon className="fontDisplay" icon={faAngleDown}/></button>
                            <button className={visibleE? "showButton": "hideButton"} onClick={hideE}><FontAwesomeIcon icon={faAngleUp}/></button>
                        </div>
                        <ul className={visibleE? "activities-display": "activities-no-display"}>
                            <li className="activities-item">Actualización de información en las oportunidades de venta y documentación de aprobaciones.</li>
                            <li className="activities-item">Preparación de la agenda de las reuniones de nuevos negocios.</li>
                            <li className="activities-item">Solicitud de aprobaciones a managers.</li>
                            <li className="activities-item">Actualización de información y estados de oportunidades.</li>
                        </ul>
                    </section>
                    <section className="work">
                        <h2 className="position">ASISTENTE DE TESORERÍA</h2>
                        <div className="display">
                            <h3 className="company">Radio Victoria Fueguina | 2013 - 2014</h3>
                            <button className={visibleF? "hideButton": "showButton"} onClick={showF}><FontAwesomeIcon className="fontDisplay" icon={faAngleDown}/></button>
                            <button className={visibleF? "showButton": "hideButton"} onClick={hideF}><FontAwesomeIcon icon={faAngleUp}/></button>
                        </div>
                        <ul className={visibleF? "activities-display": "activities-no-display"}>
                            <li className="activities-item">Atención y pago a proveedores.</li>
                            <li className="activities-item">Confección de cheques.</li>
                            <li className="activities-item">Control de las cobranzas y cheques recibidos.</li>
                            <li className="activities-item">Manejo de caja chica.</li>
                            <li className="activities-item">Realización de trámites ante entidades bancarias y organismos oficiales.</li>
                        </ul>
                    </section>
                    <section className="work">
                        <h2 className="position">JEFE DE LA DIVISIÓN LOGÍSTICA</h2>
                        <div className="display">
                            <h3 className="company">Furlong Incoming | 2011 - 2013</h3>
                            <button className={visibleG? "hideButton": "showButton"} onClick={showG}><FontAwesomeIcon className="fontDisplay" icon={faAngleDown}/></button>
                            <button className={visibleG? "showButton": "hideButton"} onClick={hideG}><FontAwesomeIcon icon={faAngleUp}/></button>
                        </div>
                        <ul className={visibleG? "activities-display": "activities-no-display"}>
                            <li className="activities-item">Coordinación de tours y transfers para pasajeros individuales, VIP, grupos y cruceros en Buenos Aires (hasta 1400 pasajeros).</li>
                            <li className="activities-item">Asignación de servicios a los transportistas y guías de la agencia. Coordinación con choferes y transportistas en servicios en puerto o aeropuertos.</li>
                            <li className="activities-item">Atención telefónica a pasajeros y agencias de viaje del exterior.</li>
                            <li className="activities-item">Control y pago a proveedores del sector.</li>
                            <li className="activities-item">Manejo de caja chica.</li>
                        </ul>
                    </section>
                    <section className="work">
                        <h2 className="position">ANALISTA SENIOR DE LOGÍSTICA</h2>
                        <div className="display">
                            <h3 className="company">Quality Travel | 2010 - 2011</h3>
                            <button className={visibleH? "hideButton": "showButton"} onClick={showH}><FontAwesomeIcon className="fontDisplay" icon={faAngleDown}/></button>
                            <button className={visibleH? "showButton": "hideButton"} onClick={hideH}><FontAwesomeIcon icon={faAngleUp}/></button>
                        </div>
                        <ul className={visibleH? "activities-display": "activities-no-display"}>
                            <li className="activities-item">Coordinación de tours y transfers para pasajeros individuales, VIP y grupos en Buenos Aires.</li>
                            <li className="activities-item">Asignación de servicios al plantel de guías turísticos y transportistas de la agencia.</li>
                            <li className="activities-item">Atención telefónica a pasajeros y agencias de viaje del exterior.</li>
                            <li className="activities-item">Control y pago a proveedores del sector de tráfico.</li>
                            <li className="activities-item">Manejo de caja chica.</li>
                        </ul>
                    </section>
                    <section className="work">
                        <h2 className="position">ANALISTA SENIOR DE LOGÍSTICA</h2>
                        <div className="display">
                            <h3 className="company">Eurotur S.R.L. | 2007 - 2010</h3>
                            <button className={visibleI? "hideButton": "showButton"} onClick={showI}><FontAwesomeIcon className="fontDisplay" icon={faAngleDown}/></button>
                            <button className={visibleI? "showButton": "hideButton"} onClick={hideI}><FontAwesomeIcon icon={faAngleUp}/></button>
                        </div>
                        <ul className={visibleI? "activities-display": "activities-no-display"}>
                            <li className="activities-item">Coordinación de tours y transfers para pasajeros individuales, VIP y grupos en Buenos Aires.</li>
                            <li className="activities-item">Asignación de servicios al plantel de guías turísticos y transportistas de la agencia.</li>
                            <li className="activities-item">Atención telefónica a pasajeros y agencias de viaje del exterior.</li>
                        </ul>
                    </section>
                    <section className="work">
                        <h2 className="position">ASISTENTE ADMINISTRATIVO</h2>
                        <div className="display">
                            <h3 className="company">Estudio Contable Echagüe | 2003 - 2006</h3>
                            <button className={visibleJ? "hideButton": "showButton"} onClick={showJ}><FontAwesomeIcon className="fontDisplay" icon={faAngleDown}/></button>
                            <button className={visibleJ? "showButton": "hideButton"} onClick={hideJ}><FontAwesomeIcon icon={faAngleUp}/></button>
                        </div>
                        <ul className={visibleJ? "activities-display": "activities-no-display"}>
                            <li className="activities-item">Liquidación de Impuestos.</li>
                            <li className="activities-item">Realización de trámites ante oficinas públicas.</li>
                            <li className="activities-item">Manejo de caja chica.</li>
                        </ul>
                    </section>

                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </main>
        </>
    )
}