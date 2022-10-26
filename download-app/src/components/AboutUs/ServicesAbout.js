import React from 'react';

function ServicesAbout() {
    return (
        <>
            <section className="appie-services-2-area pt-90 pb-55" id="service">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-8">
                            <div className="appie-section-title">
                                <h3 className="appie-title">We’re driven by our values</h3>
                                <p>The app provides financial services</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <i className="fal fa-tv"></i>
                                </div>
                                <h4 className="title">Earn High Interest</h4>
                                <p>
                                    Earn Fix interest on your amount. Beat the inflation and achieve
                                    your financial freedom with us.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-2 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                    <i className="fal fa-code"></i>
                                </div>
                                <h4 className="title">Expense Tracker</h4>
                                <p>
                                    Track all your spending in one app and always set a budget so
                                    that you don&apos;t over spend.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-3 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon">
                                    <i className="fal fa-user-friends"></i>
                                </div>
                                <h4 className="title">Financial Literacy</h4>
                                <p>
                                    Having problems in managing money and don&apos;t understand the
                                    financial concepts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesAbout;
