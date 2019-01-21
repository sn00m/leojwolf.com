(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
];

for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].object);
};

const controllers = [
    require('./controllers/music.controller'),
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
});
},{"./components/art.component":2,"./components/cv.component":3,"./components/footer.component":4,"./components/header.component":5,"./components/home.component":6,"./components/music.component":7,"./controllers/music.controller":8}],2:[function(require,module,exports){
module.exports = {
    name: 'art',
    object: {
        templateUrl: 'templates/art.html',
    }
}
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'cv',
    object: {
        templateUrl: 'templates/cv.html',
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
    name: 'music',
    object: {
        controller: 'MusicController',
        templateUrl: 'templates/music.html',
    }
}
},{}],8:[function(require,module,exports){
module.exports = {
    name: 'MusicController',
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
