const app = angular.module ('Portfolio', [
    'ui.router',
]);

const components = [
    require('./components/header.component'),
    require('./components/nav.component'),
    require('./components/footer.component'),
    require('./components/home.component'),
    require('./components/bio.component'),
];

for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].object);
};

const controllers = [

];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};

app.config(function ($stateProvider){
    $stateProvider.state({
        name: 'home',
        url: '/',
    });
    $stateProvider.state({
        name: 'bio',
        url: '/bio',
        component: 'bio',
    });
    $stateProvider.state({
        name: 'discography',
        url: '/discography',
        // component: 'discography',
    });
    $stateProvider.state({
        name: 'gallery',
        url: '/gallery',
        // component: 'gallery',
    });
    $stateProvider.state({
        name: 'shop',
        url: '/shop',
        // component: 'shop',
    });
    $stateProvider.state({
        name: 'faq',
        url: '/faq',
        // component: 'faq',
    });
});