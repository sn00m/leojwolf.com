const app = angular.module ('Portfolio', [
    'ui.router',
]);

const components = [
    require('./components/header.component'),
    require('./components/footer.component'),
    require('./components/home.component'),
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
    });
    $stateProvider.state({
        name: 'discography',
        url: '/discography',
    });
    $stateProvider.state({
        name: 'photos',
        url: '/photos',
    });
    $stateProvider.state({
        name: 'store',
        url: '/store',
    });
    $stateProvider.state({
        name: 'faq',
        url: '/faq',
    });
});