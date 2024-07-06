import React from 'react';
import Cards from './Cards';

function Portfolio() {
    return (
        <section className={`Portfolio py-5`}>
            <div className={`container`}>
                <div className={`row align-items-center justify-content-center py-5`}>
                    <div className={`col-md-12 col-sm-12 d-flex flex-column align-items-center`}>
                        <div className={`row`}>
                            <div className="col-md-6 col-sm-9">
                                <Cards 
                                    cardInfo="محمد خالد"
                                    avatar="/imges/step1.png"
                                    cardLinks={[
                                        { url: 'https://www.linkedin.com/in/tasneem-mohamed-1b781825b', text: 'LinkedIn' },
                                        { url: 'https://www.facebook.com/Nemaaa.Mohamed?mibextid=ZbWKwL', text: 'Facebook' },
                                    ]}
                                />
                            </div>
                            <div className="col-md-6 col-sm-9">
                                <Cards 
                                    cardInfo="تسنيم محمد"
                                    avatar="/imges/step1.png"
                                    cardLinks={[
                                        { url: 'https://www.linkedin.com/in/tasneem-mohamed-1b781825b', text: 'LinkedIn' },
                                        { url: 'https://www.facebook.com/Nemaaa.Mohamed?mibextid=ZbWKwL', text: 'Facebook' },
                                    ]}
                                />
                            </div>
                        </div>
                        <div className={`row`}>
                            <div className="col-md-6 col-sm-9">
                                <Cards 
                                    cardInfo="ابراهيم سالمان"
                                    avatar="/imges/step1.png"
                                    cardLinks={[
                                        { url: 'https://www.linkedin.com/in/tasneem-mohamed-1b781825b', text: 'LinkedIn' },
                                        { url: 'https://www.facebook.com/Nemaaa.Mohamed?mibextid=ZbWKwL', text: 'Facebook' },
                                    ]}
                                />
                            </div>
                            <div className="col-md-6 col-sm-9">
                                <Cards 
                                    cardInfo="اية ابراهيم"
                                    avatar="/imges/step1.png"
                                    cardLinks={[
                                        { url: 'https://www.linkedin.com/in/tasneem-mohamed-1b781825b', text: 'LinkedIn' },
                                        { url: 'https://www.facebook.com/Nemaaa.Mohamed?mibextid=ZbWKwL', text: 'Facebook' },
                                    ]}
                                />
                            </div>
                        </div>
                        <div className={`row`}>
                            <div className="col-md-6 col-sm-9">
                                <Cards 
                                    cardInfo="امينة احمد"
                                    avatar="/imges/step1.png"
                                    cardLinks={[
                                        { url: 'https://www.linkedin.com/in/tasneem-mohamed-1b781825b', text: 'LinkedIn' },
                                        { url: 'https://www.facebook.com/Nemaaa.Mohamed?mibextid=ZbWKwL', text: 'Facebook' },
                                    ]}
                                />
                            </div>
                            <div className="col-md-6 col-sm-9">
                                <Cards 
                                    cardInfo="جيهان جمال"
                                    avatar="/imges/step1.png"
                                    cardLinks={[
                                        { url: 'https://www.linkedin.com/in/tasneem-mohamed-1b781825b', text: 'LinkedIn' },
                                        { url: 'https://www.facebook.com/Nemaaa.Mohamed?mibextid=ZbWKwL', text: 'Facebook' },
                                    ]}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;