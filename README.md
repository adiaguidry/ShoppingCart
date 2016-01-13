# ShoppingCart

One Page E-Commerce Site built with React and Firebase

## Node Packages/Set-Up

> Make sure package.json file is located in project directory.

> Navigate to your project directory and run the following commands. 

> install node modules with npm

> `npm install`

> run gulp to start live reload and debugger tools

> `gulp`

> project file should be running on local host port 8000

## Components
####Catalogue: Immutable (for now) list of items set as Firebase Object

> a. Ability to select items for add into cart
    
> b. sort by Brand (2.0)

> c. sort by Category (2.0)

> d. sort by Size (2.0)

> e. sort by Color (2.0)

####Catalogue Item (props):

> a. Price

> b. Availability
    
> c. Estimated Shipping Date (2.0)

> d. Brand (2.0)

> e. Category: Clothes/Electronics...etc. (2.0)

> f. Product Image (2.0)

> g. Product Size Options (2.0)

> h. Color/Styles

#####Catalogue Item: Sub components: Add to Cart Button

####Shopping Cart: List of items chosen from Catalogue

    a. Checkout ability: auto-calculates total price of all items in cart
    
####Order Confirmation Page

    a. A receipt of all items purchased with total cost etc.
    
    b. Estimated Shipping Date Calculator (2.0)
