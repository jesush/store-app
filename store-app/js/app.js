$(document).ready(function() {
	// top-level namespace being assigned an object literal
	var myApp = (function(){
        
        return console.log('Created My App');
	})();

	var getstoreItems = function(store, category) {
		var storeItems = [];
		$.each(store.menu.category[category], function() {
			storeItems.push(this);
			// #Debug JS
			//console.log(this);
		});
		return storeItems;
	};

	var getCustomer = function() {
		return customer;
	}

	var hasItems = function(customer) {
		if(customer.cart.length > 0) {
			return true;
		}
		return false;
	}

	var customerDetails = function(customer) {
		if(customer.email && customer.firstName && customer.lastName) {
			return { email: customer.email, firstName: customer.firstName, lastName: customer.lastName };
		}
		return false;

	}

	var setCustomerDetails = function(firstName, lastName, email ) {
		customer.firstName = firstName;
		customer.lastName = lastName;
		customer.email = email;
		return true;
	}

	var store = {
	    name: "Edir's Cafeteria",
	    description: "Hey student, we care about your busy schedule, so we thought we might as well put up our items online for you to order out of convenience to get to class in time. Tell us how we do.",
	    email: "iderscafeteria@gmail.com",
	    phoneNumber: "1234567890",
	    menu: {
	    	name: "Name",
	    	category: {
	    		monday: [
	    			{
	    				id: 1,
	    				name: "Item One",
	    				price: "1.00"
	    			},
	    			{
	    				id: 2,
	    				name: "Item Two",
	    				price: "2.00",
	    			},
	    			{
	    				id: 3,
	    				name: "Item Three",
	    				price: "3.00",
	    			},
	    			{
	    				id: 4,
	    				name: "Item Four",
	    				price: "4.00",
	    			},

	    		]
	    	}
	    }
	};

	var customer = {
		email: "",
		firstName: "",
		lastName: "",
		pickup: "2015-09-04 12:00:00 PST",
		cart: [
			{
				id: "monday-1"
			}
		]
	}

	var storeItems = getstoreItems(store,"monday");


	var storeTemplate = "<h3>{{ name }}</h3><h5 class='subheader'>{{ description }}</h5><h6>{{ email }}</h6><h6>{{ phoneNumber }}</h6>";
	var itemTemplate = "{{#.}}<div class='large-4 small-6 columns'><img src='http://placehold.it/1000x1000&text=Thumbnail'><div class='panel'><h5>{{ name }}</h5><h6 class='subheader'>${{price}}</h6></div></div>{{/.}}";

	var storeStash = Mustache.to_html(storeTemplate, store);
	var itemStash = Mustache.to_html(itemTemplate, storeItems);
	
	console.log(storeItems);
	$('#store-meta').html(storeStash);
	$('#store-items').html(itemStash);
	$('.title-area .name').html("<h1><a href=''>" + store.name + " </a></h1>");{{}}
	console.log(store);

	// Check Customer Details
	console.log(customerDetails(customer));
	setCustomerDetails("John", "Doe", "john@doe.com");
	console.log(customerDetails(customer));

	$('#contactDetailsForm').submit(function(e) {
		e.preventDefault();
		console.log( $( this ).serialize() );

	});



});