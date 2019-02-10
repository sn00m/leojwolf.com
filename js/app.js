const app = angular.module ('Portfolio', [
    'ui.router',
]);

const components = [
    require('./components/header.component'),
    require('./components/footer.component'),
    require('./components/home.component'),
    require('./components/music.component'),
    require('./components/art.component'),
    require('./components/cv.component'),
    require('./components/leo.component'),
    require('./components/snoom.component'),
];

for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].object);
};

const controllers = [
    require('./controllers/music.controller'),
    require('./controllers/leo.controller'),
    require('./controllers/snoom.controller'),
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
        name: 'music',
        url: '/music',
        component: 'music',
    });
    $stateProvider.state({
        name: 'art',
        url: '/art',
        component: 'art',
    });
    $stateProvider.state({
        name: 'cv',
        url: '/cv',
        component: 'cv',
    });
    $stateProvider.state({
        name: 'leo',
        url: '/leo-wolf',
        component: 'leo',
    })
    $stateProvider.state({
        name: 'snoom',
        url: '/snoom',
        component: 'snoom',
    })
});