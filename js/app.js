const app = angular.module ('ConsciousPool', [
    'ui.router',
]);

const components = [
    require('./components/header.component'),
    require('./components/footer.component'),
    require('./components/home.component'),
    require('./components/artists.component'),
    require('./components/media.component'),
    require('./components/about.component'),
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
    $stateProvider.state({
        name: 'media',
        url: '/media',
        component: 'media',
    });
    $stateProvider.state({
        name: 'about',
        url: '/about',
        component: 'about',
    });
    $stateProvider.state({
        name: 'contact',
        url: '/contact',
        component: 'contact',
    });
});