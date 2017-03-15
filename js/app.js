const app = angular.module ('ConsciousPool', [
    'ui.router',
]);

const components = [
    require('components/header.component'),
];

for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].object);
};