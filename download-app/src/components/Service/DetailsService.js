import React from 'react';
import thumb from '../../assets/images/service-details-thumb.jpg';

function DetailsService() {
    return (
        <>
            <section className="appie-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="service-details-sidebar mr-50">
                                <div className="service-category-widget">
                                    <ul>
                                        <li>
                                            <i className="fal fa-envelope"></i>email
                                        </li>
                                        <li>
                                            <i className="fal fa-phone"></i>Call
                                        </li>
                                        <li>
                                            <i className="fal fa-user-friends"></i>Employees
                                        </li>
                                        <li>
                                            <i className="fal fa-map-marker"></i>Loaction
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="service-details-content">
                                <div className="thumb">
                                    <img src={thumb} alt="" />
                                </div>
                                <div className="content">
                                    <h3 className="title">What we're Building</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Doloribus ad, error aperiam eveniet pariatur velit,ipsa hic
                                        non deleniti necessitatibus sapiente sequi aboriosam. Natus
                                        lautem, doloremque veniam voluptatibus
                                    </p>
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        officia eos accusantium. Ratione, recusandae ducimus!
                                    </span>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Dicta amet eaque, delectus natus aut quae doloribus quam
                                        explicabo nulla quis dolorum obcaecati saepe iure itaqu at
                                        autem perferendis fugiat mollitia unde tenetur soluta
                                        expedita minima distinctio? Quo soluta at enim, porro aut
                                        dolore expedita accusantium accusamus ab, iste sequi
                                        exercitationem nam, saepe culpa in? Voluptate voluptas
                                        laborum sunt tempora repellendus vitae nostrum facere
                                        eveniet nam beatae, nemo reiciendis earum sequi, impedit
                                        labore odio quibusdam explicabo hic nesciunt porro ex soluta
                                        voluptatibus quam. Voluptate deserunt quam dignissimos minus
                                        facere, aut, est vero sequi soluta quasi excepturi
                                        reiciendis, repudiandae rem odit assumenda!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailsService;
