import React from 'react'
import "./qualification.css"

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    
                    <div className="quaalification__content quaalification__content-active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">Turkey - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>

                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>

                            <div>
                                <h3 className="qualification__title"> Art Director</h3>
                                <span className="qualification__subtitle">Turkey - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Turkey - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2020 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>

                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>

                            <div>
                                <h3 className="qualification__title"> UX Expert</h3>
                                <span className="qualification__subtitle">Turkey - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2021 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                        </div>
                    </div>

                    <div className="quaalification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">Turkey - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>

                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>

                            <div>
                                <h3 className="qualification__title"> UX Designer</h3>
                                <span className="qualification__subtitle">Turkey - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">Turkey - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2020 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </section>
    )
}

export default Qualification