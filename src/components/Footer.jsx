const Footer = () => {
    return (
    <div>
    <section className="row mt-4 footer-background-color">
    <div className="col-md-4 text-left text-light">
    <h5 className="p-2 text-center text-primary">About Us</h5>
    <p>Welcome to Surreal Jersey, your go-to online store for high-quality jerseys! We are passionate about sports and understand the thrill of representing your favorite teams with pride. That’s why we offer a wide selection of authentic, stylish, and durable jerseys for football, basketball, and more, ensuring that every fan finds the perfect fit.
At Surreal Jersey, we believe that jerseys are more than just clothing—they're a statement of loyalty and passion. Whether you're cheering from the stands, playing on the field, or adding to your collection, we've got you covered with the latest designs and timeless classics. Our commitment to quality, affordability, and excellent customer service makes shopping with us a seamless and enjoyable experience.
Join the movement and wear your team’s colors with pride. Shop with us today and be part of the winning squad!
</p>
    <br/>
    </div>
    <div className="col-md-4 text-light">
    <h5 className="p-2 text-center text-primary">Reach Us Out</h5>
    <input className="form-control" type="email" placeholder="Enter your email"/>
    <br/>
    <textarea className="form-control" rows="7" placeholder="Leave a comment"></textarea>
    <br/>
    <input type="submit" value="Send Message" className="btn btn-primary"/>
    </div>
    <div className="col-md-4 ">
    <h4 className="text-center text-primary">Connect With Us</h4>
    <br/>
    <a href="https://facebook.com">
    <img src="images/fb.png" alt="" className="socialspictures"/>
    </a>
    <a href="https://instagram.com">
    <img src="images/ig.png" alt="" className="socialspictures"/>
    </a>
    <a href="https://x.com">
    <img src="images/x.png" alt="" className="socialspictures"/>
    </a>
    <p className="text-dark"> Jerseys are more than just sportswear—they are symbols of passion, loyalty, and identity. Whether representing your favorite club, national team, or player, jerseys allow fans to showcase their love for the game in style. Made from high-quality, breathable materials, they are designed for comfort and durability, perfect for both casual wear and intense matches. From classic designs to the latest releases, jerseys evolve with the game, capturing unforgettable moments in sports history. Whether you're collecting them, wearing them on game days, or gifting them to a fellow fan, a jersey is a timeless piece of sports culture that brings people together</p>
    </div>
    </section>
    <footer className="text-white text-center p-2 mt-2 bootom-footer">
    <h5>Masterminded and choreographed by Carly &copy; 2025.All rights reserved</h5>
    </footer>
    </div>
    );
    }
     
    
     
    
    export default Footer;
    