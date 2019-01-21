(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./components/about.component":2,"./components/artists.component":3,"./components/footer.component":4,"./components/header.component":5,"./components/home.component":6,"./components/media.component":7,"./controllers/artists.controller":8}],2:[function(require,module,exports){
module.exports = {
    name: 'about',
    object: {
        templateUrl: 'templates/about.html',
    }
}
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'artists',
    object: {
        controller: 'ArtistsController',
        templateUrl: 'templates/artists.html',
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
    name: 'media',
    object: {
        templateUrl: 'templates/media.html',
    }
}
},{}],8:[function(require,module,exports){
module.exports = {
    name: 'ArtistsController',
    func: function ($scope) {
        $scope.load = () => {
            const artists = [
                {
                    name: 'snoom',
                    image: 'assets/guangzhou set.jpg',
                },
            ];

            const parent = document.querySelector('#artists-list');
                for (let i = 0; i < artists.length; i++) {
                    let artist = document.createElement('li');
                    artist.innerHTML = Mustache.render (
                        document.querySelector('#artist-template').innerHTML,
                        {
                            artistName: artists[i].name,
                            artistImage: artists[i].image,
                        }
                    );
                    parent.appendChild(artist);
                }
        };
    }
}
},{}]},{},[1]);
