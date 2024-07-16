

import user1 from './Pictures/user1.jpg';
import user2 from './Pictures/user2.jpg';
import { useState } from 'react';
import SearchBar from './search/SearchBar';

function Front(){
    
    return(
        <>
<body>
    <div className="frontpage">
    <section className = "first-sec">        
        <div className="search">
        <SearchBar/>
        </div>

        
        <div className = "tagline">
            <h1>"Your Path To The Perfect Fit"</h1>
        </div>

        
         {/* <div className = "side_by_side_photo">
            <section className = "left-img">
                <img src = {confuse}/>
            </section>

            <section className = "right-img">
                <img src = {college}/>
            </section>
        </div>  */}

    </section>
    </div>

    <section className = "second-section">
    
        <section className = "testimonials">
        <h1>What Our User's Says</h1>
        <p>Our students, featured on our college website, express their genuine experiences, showcasing a vibrant community of learners who thrive in a supportive and enriching academic environment.</p>
        <div className="row">
            <div className = "testimonial-col">
                <img src ={user1}/>
                <div>
                    <p> I acquired a remarkable platform for furthering my educational and career objectives and life goals.</p>
                    <h3>Christine Berkley</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
            </div>

            <div className = "testimonial-col">
                <img src = {user2}/>
                <div>
                    <p> The well-managed College has the teaching expertise which played a crucial role in transforming me into a first-rate medical student.</p>
                    <h3>David Byer</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>

                </div>
            </div>

        </div>

    </section>
    </section>

    <section className = "footer">
        <h4>About Us</h4>
        <p> Explore our rich history, values, and dedication to cultivating a community where innovation, diversity, and academic excellence thrive.</p>
        <div className = "icons">
            <i className = "fa fa-facebook"></i>
            <i className = "fa fa-twitter"></i>
            <i className = "fa fa-instagram"></i>
            <i className = "fa fa-linkedin"></i>
        </div>
    </section>


</body>

        
        </>
    )
}
export default Front;