import React from "react";
import "./Main.css"
import Nav from "./Nav"


const Main = () => {
    return (
        <>
        <Nav 
            txt="Login"
        />
            <section className="banner">
                <div className="b-left">
                    <div className="b-left-row">
                        <h1 className="b-title">Hone your english speaking skills over <span className="b-title-green">one-on-one video</span> call</h1>
                        <h4 className="b-subtitle">Practice english conversation with excellent communuicators
                            across the country and speak like a PRO 😎.</h4>
                    </div>
                    <div className="b-left-col">
                        <div className="inner-b-left-col">
                            <button className="btn-b-filled">
                                Book a trial
                            </button>
                            <button className="btn-b-bord">
                                Download our app
                            </button>
                        </div>
                    </div>
                </div>
                <div className="b-right">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/b7/b3/eb/caption.jpg?w=1200&h=-1&s=1" alt="" className="b-right-image" />
                </div>
            </section>



            <section className="jnow">
                <div className="jn-left">
                    <div className="jn-left-up">
                        <div className="jn-left-up-card1">
                            <h1>50K <span className="green">+</span></h1>
                            <p>Mobile downloads</p>
                        </div>
                        <div className="jn-left-up-card2">
                            <h1>80K <span className="green">+</span></h1>
                            <p>Happy Learners</p>
                        </div>
                    </div>
                    <div className="jn-left-down">
                        <div className="jn-left-down-card1">
                            <h1>53K <span className="green">+</span></h1>
                            <p>Sessions per month</p>
                        </div>
                        <div className="jn-left-down-card2">
                            <h1>200K <span className="green">+</span></h1>
                            <p>Speakers around the globe</p>
                        </div>
                    </div>

                </div>

                <div className="jn-right">
                    {/* IDEA::: All should be aligned left */}
                    <p className="jn-p-green green">Book a trial</p>
                    <h3 className="jn-right-heading">Start your English speaking journey today!</h3>
                    <p className="jn-right-randtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pellentesque praesent vitae sit sagittis venenatis.</p>
                    <button className="jn-right-btn">
                        Book a trial
                    </button>
                </div>
            </section>

            <section className="services">
                <h1 className="offer">What we offer ?</h1>
                <div className="sv-cardcont">
                    <div className="sv-card1 brd50">

                        <div className="contserv">
                            <div className="backserv">

                                <h4>Customised Curriculum</h4>
                                <p>Customised sessions and module for Basic, Intermediate and Advanced learners.</p>
                            </div>
                        </div>
                    </div>
                    <div className="sv-card2 brd50">
                        <div className="contserv">
                            <div className="backserv">

                                <h4>Experimental Learning</h4>
                                <p>Do not study English, rather consume and use it.</p>
                            </div>
                        </div>
                    </div>
                    <div className="sv-card3 brd50">
                        <div className="contserv">
                            <div className="backserv">

                                <h4>Shadowing Method</h4>
                                <p>Think and speak in English rather than translating it from mother tongue.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="working">
                <h1 className="workhead">How it Works ?</h1>
                <div className="contwork">


                    <div className="w-left">
                        <div className="w-left-card1">
                            <h4>1. Create Account</h4>
                            <p>Create your account using phone number or email and take a free trial at ₹1.</p>
                        </div>
                        <div className="w-left-card2">
                            <h4>3. Select time slot</h4>
                            <p>Subscribe & select any time slot between
                                10 AM to 12 midnight.
                            </p>
                        </div>
                    </div>

                    <div className="w-mid">
                    <div className="phom">
                    <div className="burk">
                        
                    </div>
                    </div>
                    </div>

                    <div className="w-right">
                        <div className="w-right-card1">
                            <h4>2. Subscribe</h4>
                            <p>Choose your preferred duration and
                                select subscription package for your
                                sessions. </p>
                        </div>
                        <div className="w-right-card2">
                            <h4>4. You are done</h4>
                            <p>That’s it! Start practicing and reach
                                your learning goal in speaking.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main