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
    name: 'cv',
    object: {
        templateUrl: 'templates/cv.html',
    }
}
},{}],4:[function(require,module,exports){
module.exports = {
    name: 'discography',
    object: {
        templateUrl: 'templates/discography.html',
    }
}
},{}],5:[function(require,module,exports){
module.exports = {
    name: 'footerSection',
    object: {
        templateUrl: 'templates/footer.html',
    }
}
},{}],6:[function(require,module,exports){
module.exports = {
    name: 'headerSection',
    object: {
        templateUrl: 'templates/header.html',
    }
}
},{}],7:[function(require,module,exports){
module.exports = {
    name: 'home',
    object: {
        templateUrl: 'templates/home.html',
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
    name: 'dragon',
    object: {
        templateUrl: 'templates/releases/dragon.html',
    }
}
},{}],10:[function(require,module,exports){
module.exports = {
    name: 'isysotw',
    object: {
        templateUrl: 'templates/releases/isysotw.html',
    }
}
},{}],11:[function(require,module,exports){
module.exports = {
    name: 'leotero',
    object: {
        templateUrl: 'templates/releases/leotero.html',
    }
}
},{}],12:[function(require,module,exports){
module.exports = {
    name: 'magnolia',
    object: {
        templateUrl: 'templates/releases/magnolia.html',
    }
}
},{}],13:[function(require,module,exports){
module.exports = {
    name: 'shapeshifter',
    object: {
        templateUrl: 'templates/releases/shapeshift.html',
    }
}
},{}],14:[function(require,module,exports){
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
},{}],15:[function(require,module,exports){
const app = angular.module('app', ['ui.router']);

const components = [
    require('./components/header.component'),
    require('./components/nav.component'),
    require('./components/footer.component'),
    require('./components/home.component'),
    require('./components/bio.component'),
    require('./components/cv.component'),
    require('./components/discography.component'),
    require('./components/releases/isysotw.component'),
    require('./components/releases/leotero.component'),
    require('./components/releases/shapeshift.component'),
    require('./components/releases/magnolia.component'),
    require('./components/releases/dragon.component'),
    require('./components/art.component'),
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
    })
});
},{"./components/art.component":1,"./components/bio.component":2,"./components/cv.component":3,"./components/discography.component":4,"./components/footer.component":5,"./components/header.component":6,"./components/home.component":7,"./components/nav.component":8,"./components/releases/dragon.component":9,"./components/releases/isysotw.component":10,"./components/releases/leotero.component":11,"./components/releases/magnolia.component":12,"./components/releases/shapeshift.component":13,"./controllers/art.controller":14}]},{},[15])