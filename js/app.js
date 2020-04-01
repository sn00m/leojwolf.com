const app = angular.module ('Portfolio', [
    'ui.router',
]);

const components = [
    require('./components/header.component'),
    require('./components/nav.component'),
    require('./components/footer.component'),
    require('./components/home.component'),
    require('./components/bio.component'),
    require('./components/connect.component'),
    require('./components/live.component'),
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
        name: 'sound',
        url: '/sound',
        // component: 'sound',
    });
    $stateProvider.state({
        name: 'sight',
        url: '/sight',
        // component: 'sight',
    });
    $stateProvider.state({
        name: 'live',
        url: '/live',
        component: 'live',
    });
    $stateProvider.state({
        name: 'connect',
        url: '/connect',
        component: 'connect',
    });
});