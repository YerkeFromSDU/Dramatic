function Footer(){
    return(

        <footer>
            <div class="footer-container">
                <div class="language-dropdown">
                    <select>
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                    </select>
                </div>
                <div class="footer-column">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Invertor Relations</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Cookie Preferences</a></li>
                        <li><a href="#">Corporate Information</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Talk to Us</h4>
                    <a>support@ercom.com</a><br></br>
                    <a>+66 2399 1145</a>
                </div>
                <div class="footer-column">
                    <h4>Follow Us</h4>
                    <div className="social">
                        <img src="/facebook.svg" alt="" />
                        <img src="/linkedin.svg" alt="" />
                        <img src="/twitter.svg" alt="" />
                    </div>
                    
                </div>
            </div>
        </footer>


    )
}
export default Footer