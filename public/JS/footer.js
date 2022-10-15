const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="footer logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Music Instruments</li>
                <li><a href="#" class="footer-link">Guiter</a></li>
                <li><a href="#" class="footer-link">Speakers</a></li>
                <li><a href="#" class="footer-link">Repairs Tools</a></li>
                <li><a href="#" class="footer-link">Microphones</a></li>
                <li><a href="#" class="footer-link">Recorder</a></li>
                <li><a href="#" class="footer-link">Digital drum</a></li>
                <li><a href="#" class="footer-link">Piano</a></li>
                <li><a href="#" class="footer-link">Wireless adapter</a></li>
                <li><a href="#" class="footer-link">Mixture</a></li>
                <li><a href="#" class="footer-link">E-drum</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Safety Accessories</li>
                <li><a href="#" class="footer-link">Multi-meter</a></li>
                <li><a href="#" class="footer-link">Solding-kit</a></li>
                <li><a href="#" class="footer-link">Repairs Tools</a></li>
                <li><a href="#" class="footer-link">Scrue-driver</a></li>
                <li><a href="#" class="footer-link">Covers</a></li>
                <li><a href="#" class="footer-link">3-cated wire</a></li>
                <li><a href="#" class="footer-link">Plugs</a></li>
                <li><a href="#" class="footer-link">Audio detector</a></li>
                <li><a href="#" class="footer-link">MCB</a></li>
                <li><a href="#" class="footer-link">Glubs</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Home Accessories</li>
                <li><a href="#" class="footer-link">Mobiles</a></li>
                <li><a href="#" class="footer-link">Laptops</a></li>
                <li><a href="#" class="footer-link">Coffe maker</a></li>
                <li><a href="#" class="footer-link">Bulbs</a></li>
                <li><a href="#" class="footer-link">Tubes</a></li>
                <li><a href="#" class="footer-link">Toster</a></li>
                <li><a href="#" class="footer-link">Fans</a></li>
                <li><a href="#" class="footer-link">Cooler</a></li>
                <li><a href="#" class="footer-link">AC</a></li>
                <li><a href="#" class="footer-link">Toys</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">Ohm Electric Store</p>
    <p class="info">Electric Store,serve all types of electric Instruments as better than all.Also get free service of 1 year and 30days replacement.</p>
    <p class="info">support emails - ohmelecteic@gmail.com, customersupport- serviceohm@clothing.com</p>
    <p class="info">telephone - 0322 596358</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
            <a href="#" class="social-link">order & service Track</a>
        </div>
    </div>
    <p class="footer-credit">Ohm Electric Store, Best online store</p>
    `;
}

createFooter();