const app = angular.module ('ConsciousPool', [
    'ui.router',
]);

const components = [
    require('./components/header.component'),
    require('./components/home.component'),
    require('./components/artists.component'),
];

for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].object);
};

const controllers = [
    require('./controllers/artists.controller'),
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
        name: 'artists',
        url: '/artists',
        component: 'artists',
    });
});