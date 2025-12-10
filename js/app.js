const app = angular.module('app', ['ui.router']);

const components = [
    require('./components/header.component'),
    require('./components/nav.component'),
    require('./components/footer.component'),
    require('./components/home.component'),
    require('./components/bio.component'),
    require('./components/cv.component'),
    require('./components/discography.component'),
    require('./components/releases/veiled.component'),
    require('./components/releases/isysotw.component'),
    require('./components/releases/leotero.component'),
    require('./components/releases/shapeshift.component'),
    require('./components/releases/magnolia.component'),
    require('./components/releases/dragon.component'),
    require('./components/art.component'),
    require('./components/private.component'),
];

for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].object);
};

const controllers = [
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
        name: 'cv',
        url: '/cv',
        component: 'cv',
    });
    $stateProvider.state({
        name: 'discography',
        url: '/discography',
        component: 'discography',
    });
    $stateProvider.state({
        name: 'veiled',
        url: '/releases/veiled-in-light',
        component: 'veiled',
    });
    $stateProvider.state({
        name: 'isysotw',
        url: '/releases/i-saw-your-shadow-on-the-wall',
        component: 'isysotw',
    });
    $stateProvider.state({
        name: 'leotero',
        url: '/releases/leo-wolf-&-teroscu',
        component: 'leotero',
    });
    $stateProvider.state({
        name: 'shapeshifter',
        url: '/releases/shapeshifter',
        component: 'shapeshifter',
    });
    $stateProvider.state({
        name: 'magnolia',
        url: '/releases/magnolia',
        component: 'magnolia',
    });
    $stateProvider.state({
        name: 'dragon',
        url: '/releases/dragon',
        component: 'dragon',
    });
    $stateProvider.state({
        name: 'art',
        url: '/art',
        component: 'art',
    });
        $stateProvider.state({
        name: 'private',
        url: '/private',
        component: 'private',
    })
});