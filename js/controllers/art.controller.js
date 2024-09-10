module.exports = {
    name: 'ArtController',
    func: function ($scope) {
        $scope.load = () => {
            const monotype = [
                {
                    name: 'Watcher',
                    image: 'assets/art/Watcher.jpg',
                    material: 'Ink on watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'Smile',
                    image: 'assets/art/Smile.jpg',
                    material: 'Ink on watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'Shadow',
                    image: 'assets/art/Shadow.jpg',
                    material: 'Ink on watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'Vortex',
                    image: 'assets/art/Vortex.jpg',
                    material: 'Ink on watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'You have to go out to get in',
                    image: 'assets/art/You have to go out to get in.jpg',
                    material: 'Ink on watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'Divine Sight',
                    image: 'assets/art/Divine Sight.jpg',
                    material: 'Ink on watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'MF001',
                    image: 'assets/art/MF001.jpg',
                    material: 'Ink on watercolor paper',
                    size: '9x12',
                },
                {
                    name: 'MF002',
                    image: 'assets/art/MF002.jpg',
                    material: 'Ink on watercolor paper',
                    size: '9x12',
                },
                {
                    name: 'MF003',
                    image: 'assets/art/MF003.jpg',
                    material: 'Ink on watercolor paper',
                    size: '9x12',
                },
                {
                    name: 'Refractions',
                    image: 'assets/art/Refractions.jpg',
                    material: 'Ink on watercolor paper',
                    size: '9x12',
                }
            ];

            const monotypeParent = document.querySelector('#monotypes');
                for (let i = 0; i < monotype.length; i++) {
                    let art = document.createElement('li');
                    art.innerHTML = Mustache.render (
                        document.querySelector('#art-template').innerHTML,
                        {
                            artName: monotype[i].name,
                            artImage: monotype[i].image,
                            artMaterial: monotype[i].material,
                            artSize: monotype[i].size,
                        }
                    );
                    monotypeParent.appendChild(art);
                }
        };
    }
}