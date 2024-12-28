(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
    name: 'art',
    object: {
        controller: 'ArtController',
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
    name: 'ArtController',
    func: function ($scope) {
        $scope.load = () => {
            const night = [
                {
                    name: 'wake up sweetheart',
                    image: 'assets/art/night_garden/wake up sweetheart 1.JPG',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '18x24',
                },
                {
                    name: 'a garden of forking paths',
                    image: 'assets/art/night_garden/a garden of forking paths 1.JPG',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '18x24',
                },
                {
                    name: 'queen of cordyceps',
                    image: 'assets/art/night_garden/queen of cordyceps 1.JPG',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '18x24',
                },
                {
                    name: 'mirror',
                    image: 'assets/art/night_garden/mirror.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'overview',
                    image: 'assets/art/night_garden/overview.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'god wears many masks',
                    image: 'assets/art/night_garden/god wears many masks.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'hope remaining',
                    image: 'assets/art/night_garden/hope remaining.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'i need sleep',
                    image: 'assets/art/night_garden/i need sleep.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'maybe my friends are right to worry',
                    image: 'assets/art/night_garden/maybe my friends are right to worry.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'they whisper secrets to you',
                    image: 'assets/art/night_garden/they whisper secrets to you.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'the vision fades',
                    image: 'assets/art/night_garden/the vision fades.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'what secrets live in reflections?',
                    image: 'assets/art/night_garden/what secrets live in reflections.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'memories are our ghosts',
                    image: 'assets/art/night_garden/memories are our ghosts.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'can the soul exist in modern society?',
                    image: 'assets/art/night_garden/can the soul exist in modern society.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'the deeper i search, the more endless i feel',
                    image: 'assets/art/night_garden/the deeper i search, the more endless i feel.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                }
            ];

            const nightParent = document.querySelector('#night');
            for (let i = 0; i < night.length; i++) {
                let art = document.createElement('li');
                art.innerHTML = Mustache.render (
                    document.querySelector('#art-template').innerHTML,
                    {
                        artName: night[i].name,
                        artImage: night[i].image,
                        artType: night[i].type,
                        artMaterial: night[i].material,
                        artSize: night[i].size,
                    }
                );
                nightParent.appendChild(art);
            }

            const precious = [
                {
                    name: 'precious metal',
                    image: 'assets/art/precious_metal/precious metal.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x10',
                },
                {
                    name: `everything's on fire and i'm on the internet`,
                    image: `assets/art/precious_metal/everything's on fire and i'm on the internet.jpg`,
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x10',
                },
                {
                    name: 'glass temples of the new world',
                    image: 'assets/art/precious_metal/glass temples of the new world.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x10',
                }
            ];

            const preciousParent = document.querySelector('#precious');
            for (let i = 0; i < precious.length; i++) {
                let art = document.createElement('li');
                art.innerHTML = Mustache.render (
                    document.querySelector('#art-template').innerHTML,
                    {
                        artName: precious[i].name,
                        artImage: precious[i].image,
                        artType: precious[i].type,
                        artMaterial: precious[i].material,
                        artSize: precious[i].size,
                    }
                );
                preciousParent.appendChild(art);
            }

            const early = [
                {
                    name: 'Watcher',
                    image: 'assets/art/Watcher.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'Smile',
                    image: 'assets/art/Smile.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'Shadow',
                    image: 'assets/art/Shadow.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'Vortex',
                    image: 'assets/art/Vortex.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'You have to go out to get in',
                    image: 'assets/art/You have to go out to get in.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'Divine Sight',
                    image: 'assets/art/Divine Sight.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'Refractions',
                    image: 'assets/art/Refractions.jpg',
                    type: 'monotype print',
                    material: 'ink on 300g watercolor paper',
                    size: '8x10',
                }
            ];

            const earlyParent = document.querySelector('#early');
            for (let i = 0; i < early.length; i++) {
                let art = document.createElement('li');
                art.innerHTML = Mustache.render (
                    document.querySelector('#art-template').innerHTML,
                    {
                        artName: early[i].name,
                        artImage: early[i].image,
                        artType: early[i].type,
                        artMaterial: early[i].material,
                        artSize: early[i].size,
                    }
                );
                earlyParent.appendChild(art);
            }
        };
    }
}
},{}],10:[function(require,module,exports){
module.exports = {
    name: 'DiscogController',
    func: function ($scope) {
        $scope.load = () => {
            const albums = [
                {
                    name: 'Leo Wolf & Teroscu',
                    image: 'assets/discog/Leo Wolf & Teroscu small.JPG',
                    link: 'https://blindreading.bandcamp.com/album/leo-wolf-teroscu',
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
},{}],11:[function(require,module,exports){
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
},{"./components/art.component":1,"./components/bio.component":2,"./components/discography.component":3,"./components/footer.component":4,"./components/header.component":5,"./components/home.component":6,"./components/links.component":7,"./components/nav.component":8,"./controllers/art.controller":9,"./controllers/discography.controller":10}]},{},[11])