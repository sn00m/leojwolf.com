const app = angular.module('app', ['ui.router']);

const components = [
    require('./components/header.component'),
    require('./components/nav.component'),
    require('./components/footer.component'),
    require('./components/home.component'),
    require('./components/bio.component'),
    require('./components/links.component'),
    require('./components/discography.component'),
    require('./components/art.component'),
];

for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].object);
};

const controllers = [
    require('./controllers/discography.controller'),
    require('./controllers/art.controller')
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
        component: 'discography',
    });
    $stateProvider.state({
        name: 'art',
        url: '/art',
        component: 'art',
    })
    $stateProvider.state({
        name: 'links',
        url: '/links',
        component: 'links',
    });
});