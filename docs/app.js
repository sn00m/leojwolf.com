(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const app = angular.module ('Portfolio', [
    'ui.router',
]);

const components = [
    require('./components/header.component'),
    require('./components/footer.component'),
    require('./components/home.component'),
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
    });
    $stateProvider.state({
        name: 'discography',
        url: '/discography',
    });
    $stateProvider.state({
        name: 'gallery',
        url: '/gallery',
    });
    $stateProvider.state({
        name: 'shop',
        url: '/shop',
    });
    $stateProvider.state({
        name: 'faq',
        url: '/faq',
    });
});
},{"./components/footer.component":2,"./components/header.component":3,"./components/home.component":4}],2:[function(require,module,exports){
module.exports = {
    name: 'footerSection',
    object: {
        templateUrl: 'templates/footer.html',
    }
}
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'headerSection',
    object: {
        templateUrl: 'templates/header.html',
    }
}
},{}],4:[function(require,module,exports){
module.exports = {
    name: 'home',
    object: {
        templateUrl: 'templates/home.html',
    }
}
},{}]},{},[1]);
