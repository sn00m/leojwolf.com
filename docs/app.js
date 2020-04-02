(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    require('./components/sound.component'),
];

for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].object);
};

const controllers = [
    require('./controllers/sound.controller'),
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
        component: 'sound',
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
},{"./components/bio.component":2,"./components/connect.component":3,"./components/footer.component":4,"./components/header.component":5,"./components/home.component":6,"./components/live.component":7,"./components/nav.component":8,"./components/sound.component":9,"./controllers/sound.controller":10}],2:[function(require,module,exports){
module.exports = {
    name: 'bio',
    object: {
        templateUrl: 'templates/bio.html',
    }
}
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'connect',
    object: {
        templateUrl: 'templates/connect.html',
    }
}
},{}],4:[function(require,module,exports){
module.exports = {
    name: 'footerSection',
    object: {
        templateUrl: 'templates/footer.html',
    }
}
},{}],5:[function(require,module,exports){
module.exports = {
    name: 'headerSection',
    object: {
        templateUrl: 'templates/header.html',
    }
}
},{}],6:[function(require,module,exports){
module.exports = {
    name: 'home',
    object: {
        templateUrl: 'templates/home.html',
    }
}
},{}],7:[function(require,module,exports){
module.exports = {
    name: 'live',
    object: {
        templateUrl: 'templates/live.html',
    }
}
},{}],8:[function(require,module,exports){
module.exports = {
    name: 'navSection',
    object: {
        templateUrl: 'templates/nav.html',
    }
}
},{}],9:[function(require,module,exports){
module.exports = {
    name: 'sound',
    object: {
        controller: 'DiscogController',
        templateUrl: 'templates/sound.html',
    }
}
},{}],10:[function(require,module,exports){
module.exports = {
    name: 'DiscogController',
    func: function ($scope) {
        $scope.load = () => {
            const albums = [
                {
                    name: 'Magnolia',
                    image: 'assets/Magnolia Album Cover w filter.jpg',
                    link: 'https://sinetology.bandcamp.com/album/magnolia',
                },
                {
                    name: 'Dragon',
                    image: 'assets/Dragon-Album-Art-3750x3750.jpg',
                    link: 'https://sinetology.bandcamp.com/album/dragon',
                },
                {
                    name: 'live 2',
                    image: 'assets/live 2 cover.jpg',
                    link: 'https://leowolf.bandcamp.com/album/live-2-2',
                },
                {
                    name: 'live 1',
                    image: 'assets/live 1 cover.jpg',
                    link: 'https://leowolf.bandcamp.com/album/live-1',
                },
            ];

            const parent = document.querySelector('#albums-list');
                for (let i = 0; i < albums.length; i++) {
                    let album = document.createElement('li');
                    album.innerHTML = Mustache.render (
                        document.querySelector('#album-template').innerHTML,
                        {
                            albumName: albums[i].name,
                            albumImage: albums[i].image,
                            albumLink: albums[i].link,
                        }
                    );
                    parent.appendChild(album);
                }
        };
    }
}
},{}]},{},[1]);
