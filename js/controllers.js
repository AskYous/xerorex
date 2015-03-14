var xerorexApp = angular.module('xerorexApp', []);

// Navbar Controller
xerorexApp.controller('navbarCtrl', function($scope){
	$scope.menuItems = [
	{
		title: 'Discover',
		href: '#/Discover'
	},{
		title: 'Products',
		href: '#/Products',
		menuItems: [{
			title: 'Phones',
			href: '#/Products/Phones'
		}, {
			title: 'Televisions',
			href: '#/Products/Televisions'
		}, {
			title: 'Wearables',
			href: '#/Products/Wearables'
		}
		]
	}, {
		title: 'Apps',
		href: '#/Apps'
	}, {
		title: 'Support',
		href: '#/Support'
	}]
});

// Carousel controller
xerorexApp.controller('carouselCtrl', function ($scope) {
	$scope.carouselItems = [{
			header: 'First Item',
			description: 'This is a description',
			href: '#/Learn More',
			img: 'http://placehold.it/500x500',
			buttonText: 'Learn more'			
		},{
			header: 'First Item',
			description: 'This is a description',
			href: '#/Learn More',
			img: 'http://placehold.it/500x500',			
			buttonText: 'Learn more'			
		},{
			header: 'First Item',
			description: 'This is a description',
			href: '#/Learn More',
			img: 'http://placehold.it/500x500',			
			buttonText: 'Learn more'			
		}]
})