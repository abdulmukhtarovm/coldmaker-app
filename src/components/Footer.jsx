import React from 'react'
import { getText } from '../locales'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="titles text-center">
                <h2>{getText("clientsreviews")}</h2>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3">
                        <div className="blok">
                            <h6>{getText("grafik")}</h6>
                            <p>{getText("duju")} 10:00-19:00</p>
                            <p>{getText("sbvs")} 11:00-18:00</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="blok">
                            <h6>{getText("numbers")}</h6>
                          <a href="tel:+998999992727">+998 99 999 27 27</a>
                          <a href="tel:+998999992727">+998 99 999 27 27</a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="blok">
                            <h6>{getText("address")}</h6>
                         <a href="/">{getText("addres")}</a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5991.649538114135!2d69.24518472774619!3d41.33442362302332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7b7a5f035f%3A0x7cc7435cfdab32d0!2z0KHQtdCx0LfQsNGALCDQotCw0YjQutC10L3Rgiwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1658495501623!5m2!1sru!2s"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer