(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
    name: 'art',
    object: {
        templateUrl: 'templates/art.html',
    }
}
},{}],2:[function(require,module,exports){
module.exports = {
    name: 'bio',
    object: {
        templateUrl: 'templates/bio.html',
    }
}
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'discography',
    object: {
        controller: 'DiscogController',
        templateUrl: 'templates/discography.html',
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
    name: 'links',
    object: {
        templateUrl: 'templates/links.html',
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
    name: 'DiscogController',
    func: function ($scope) {
        $scope.load = () => {
            const albums = [
                {
                    name: 'Leo Wolf & Teroscu',
                    image: 'assets/discog/Leo Wolf & Teroscu small.JPG',
                    link: 'https://deadlettersarchive.bandcamp.com/album/leo-wolf-teroscu',
                    label: 'Dead Letters Archive',
                    catalog: 'DLA002',
                    year: '2024'
                },
                {
                    name: 'Shapeshifter',
                    image: 'assets/discog/Shapeshifter Cover.JPG',
                    link: 'https://leowolf.bandcamp.com/album/shapeshifter',
                    label: 'Dead Letters Archive',
                    catalog: 'DLA001',
                    year: '2023'
                },
                {
                    name: 'Magnolia',
                    image: 'assets/discog/Magnolia Album Cover w filter.jpg',
                    link: 'https://leowolf.bandcamp.com/album/magnolia',
                    label: 'Sinetology',
                    catalog: 'SINE003',
                    year: '2020'
                },
                {
                    name: 'Dragon',
                    image: 'assets/discog/Dragon-Album-Art-3750x3750.jpg',
                    link: 'https://leowolf.bandcamp.com/album/dragon',
                    label: 'Sinetology',
                    catalog: 'SINE002',
                    year: '2020'
                },
            ];

            const liveAlbums = [
                {
                    name: 'A Ritual At Dusk; Light Breaks Down',
                    image: 'assets/discog/a ritual.jpg',
                    link: 'https://leowolf.bandcamp.com/album/a-ritual-at-dusk-light-breaks-down',
                    year: '2022'
                },
                {
                    name: 'Recursion',
                    image: 'assets/discog/recursion cover.jpg',
                    link: 'https://leowolf.bandcamp.com/track/recursion',
                    year: '2021'
                },
                {
                    name: 'III',
                    image: 'assets/discog/iii cover.jpg',
                    link: 'https://leowolf.bandcamp.com/album/iii',
                    year: '2021'
                },
                {
                    name: 'II',
                    image: 'assets/discog/live 2 cover.jpg',
                    link: 'https://leowolf.bandcamp.com/album/ii',
                    year: '2020'
                },
                {
                    name: 'I',
                    image: 'assets/discog/live 1 cover.jpg',
                    link: 'https://leowolf.bandcamp.com/album/i',
                    year: '2019'
                },
            ];

            const studioAlbumsParent = document.querySelector('#albums-list');
                for (let i = 0; i < albums.length; i++) {
                    let album = document.createElement('li');
                    album.innerHTML = Mustache.render (
                        document.querySelector('#studio-album-template').innerHTML,
                        {
                            albumName: albums[i].name,
                            albumYear: albums[i].year,
                            albumImage: albums[i].image,
                            albumLink: albums[i].link,
                            labelName: albums[i].label,
                            catNum: albums[i].catalog,
                        }
                    );
                    studioAlbumsParent.appendChild(album);
                }

            const liveAlbumsParent = document.querySelector('#live-albums');
                for (let i = 0; i < liveAlbums.length; i++) {
                    let album = document.createElement('li');
                    album.innerHTML = Mustache.render (
                        document.querySelector('#live-album-template').innerHTML,
                        {
                            albumName: liveAlbums[i].name,
                            albumYear: liveAlbums[i].year,
                            albumImage: liveAlbums[i].image,
                            albumLink: liveAlbums[i].link,
                        }
                    );
                    liveAlbumsParent.appendChild(album);
                }
        };
    }
}
},{}],10:[function(require,module,exports){
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
    require('./controllers/discography.controller')
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
},{"./components/art.component":1,"./components/bio.component":2,"./components/discography.component":3,"./components/footer.component":4,"./components/header.component":5,"./components/home.component":6,"./components/links.component":7,"./components/nav.component":8,"./controllers/discography.controller":9}]},{},[10])