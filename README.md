# ft.bookStore

An Interactive Bookstore application. Build using MERN Stack

# Features

<ul>
    <li>Used grid layout for BookListing Page </li>
    <li>BookListing Page is reponsive for all screen-sizes</li>
    <li>Use of UseSearchParams Hook for setting the URL query params</li>
    <li>Retains the filtered data amid the page reloads</li>
    <li>Hashed the password in DB using bycrypt</li>
    <li>Use of Toast over default alert for feedback</li>
</ul>

# Usage Instruction

<ol>
<li>Starting of the App</li>
<ul>
<li>We would land at Home/Landing Page</li>
<li>Consisting a Navigation-bar at the top</li>
<li>There is a Carousel component showing various books</li>
<li>Clicking on the book would redirect to BookListing Page</li>
</ul>

<li>Navigation-bar</li>
<ul>
<li>Contain a Search-bar, once search would give the detail info of that book</li>
<li>Button to Login/Signup/Logout at top-right corner</li>
<li>Cart icon would let to the CartPage only if Logged-In</li>
</ul>

<li>Filter Books</li>
<ul>
<li>Can sort and filter the books accoding to genre, edition and price</li>
<li>Respective Books are displayed in Grid format</li>
</ul>
<li>Add Books to Cart</li>
<ul>
<li>Click on the "Add to Cart" button to add the book to your shopping cart from either bookListing or bookDetails Page</li>
<li>One book can only to add only once</li>
</ul>
<li>View and Modify Cart</li>
<ul>
<li>On the Shopping Cart page, all the books added to your cart</li>
<li>Can remove the books from cart</li>
<li>Total amount is displyed on the Order summary panel</li>
</ul>
</ol>

# Tech Stacks used

<ul>
    <li>React</li>
    <li>Chakra-UI</li>
    <li>Redux</li>
    <li>Express</li>
    <li>MongoDB</li>
</ul>

# Snippets

<div><img src="./Snippets/LandingPage.png"></div>

<div><img src="./Snippets/BookListingPage.png"><img src="./Snippets/CartPage.png"/></div>

# Backend

<p>Deployed: https://dark-red-bluefish-suit.cyclic.app/<p>
<p>Repo: https://github.com/jagroshansingh/ft.bookStore_Backend</p>