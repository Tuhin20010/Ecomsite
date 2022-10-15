const  createNav = () =>  {
    let Nav = document.querySelector('.navbar');
    Nav.innerHTML = `
    <div class="nav">
    <img src="logo.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search,brand,product">
            <button class="search-btn">search</button>
        </div>
        <a href="#"><img src="user.jpeg" alt=""></a>
        <a href="#"><img src="cart.jpeg" alt=""></a>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">Home</a></li>
        <li class="link-item"><a href="#" class="link">WishList</a></li>
        <li class="link-item"><a href="#" class="link">Payment</a></li>
        <li class="link-item"><a href="#" class="link">Offers</a></li>
        
    </ul>
    `;
}
createNav ();