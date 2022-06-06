import React from 'react';

function ContactUs (){

    return <address>
        <link rel="stylesheet" href="style.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>

        <div className="container">
            <div className="content">
                <div className="left-side">
                    <div className="address details">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="topic">Address</div>
                        <div className="text-one">Surkhet, NP12</div>
                        <div className="text-two">Birendranagar 06</div>
                    </div>
                    <div className="phone details">
                        <i className="fas fa-phone-alt"></i>
                        <div className="topic">Phone</div>
                        <div className="text-one">+0098 9893 5647</div>
                        <div className="text-two">+0096 3434 5678</div>
                    </div>
                    <div className="email details">
                        <i className="fas fa-envelope"></i>
                        <div className="topic">Email</div>
                        <div className="text-one">codinglab@gmail.com</div>
                        <div className="text-two">info.codinglab@gmail.com</div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="topic-text">Send us a message</div>
                    <p>If you have any work from me or any types of quries related to my tutorial, you can send me
                        message from here. It's my pleasure to help you.</p>
                </div>
            </div>
        </div>
    </address>
}

export default ContactUs;
