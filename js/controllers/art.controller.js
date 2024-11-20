module.exports = {
    name: 'ArtController',
    func: function ($scope) {
        $scope.load = () => {
            const night = [
                {
                    name: 'mirror',
                    image: 'assets/art/night_garden/mirror.jpg',
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'overview',
                    image: 'assets/art/night_garden/overview.jpg',
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'god wears many masks',
                    image: 'assets/art/night_garden/god wears many masks.jpg',
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'hope remaining',
                    image: 'assets/art/night_garden/hope remaining.jpg',
                    type: 'Monotype',
                    material: 'Ink on Strathmore 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'i need sleep',
                    image: 'assets/art/night_garden/i need sleep.jpg',
                    type: 'Monotype',
                    material: 'Ink on Strathmore 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'maybe my friends are right to worry',
                    image: 'assets/art/night_garden/maybe my friends are right to worry.jpg',
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'they whisper secrets to you',
                    image: 'assets/art/night_garden/they whisper secrets to you.jpg',
                    type: 'Monotype',
                    material: 'Ink on Strathmore 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'the vision fades',
                    image: 'assets/art/night_garden/the vision fades.jpg',
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'what secrets live in reflections?',
                    image: 'assets/art/night_garden/what secrets live in reflections.jpg',
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'memories are our ghosts',
                    image: 'assets/art/night_garden/memories are our ghosts.jpg',
                    type: 'Monotype',
                    material: 'Ink on Strathmore 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'can the soul exist in modern society?',
                    image: 'assets/art/night_garden/can the soul exist in modern society.jpg',
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'the deeper i search, the more endless i feel',
                    image: 'assets/art/night_garden/the deeper i search, the more endless i feel.jpg',
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
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
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
                    size: '8x10',
                },
                {
                    name: `everything's on fire and i'm on the internet`,
                    image: `assets/art/precious_metal/everything's on fire and i'm on the internet.jpg`,
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
                    size: '8x10',
                },
                {
                    name: 'glass temples of the new world',
                    image: 'assets/art/precious_metal/glass temples of the new world.jpg',
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
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
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'Smile',
                    image: 'assets/art/Smile.jpg',
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'Shadow',
                    image: 'assets/art/Shadow.jpg',
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'Vortex',
                    image: 'assets/art/Vortex.jpg',
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'You have to go out to get in',
                    image: 'assets/art/You have to go out to get in.jpg',
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'Divine Sight',
                    image: 'assets/art/Divine Sight.jpg',
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
                    size: '8x8',
                },
                {
                    name: 'Refractions',
                    image: 'assets/art/Refractions.jpg',
                    type: 'Monotype',
                    material: 'Ink on Canson 300g watercolor paper',
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