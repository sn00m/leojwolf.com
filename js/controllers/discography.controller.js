module.exports = {
    name: 'DiscogController',
    func: function ($scope) {
        $scope.load = () => {
            const albums = [
                {
                    name: 'A Ritual At Dusk; Light Breaks Down',
                    image: 'assets/a ritual.jpg',
                    link: 'https://leowolf.bandcamp.com/album/a-ritual-at-dusk-light-breaks-down',
                },
                {
                    name: 'Recursion',
                    image: 'assets/recursion cover.jpg',
                    link: 'https://leowolf.bandcamp.com/track/recursion',
                },
                {
                    name: 'Magnolia',
                    image: 'assets/Magnolia Album Cover w filter.jpg',
                    link: 'https://leowolf.bandcamp.com/album/magnolia',
                },
                {
                    name: 'Dragon',
                    image: 'assets/Dragon-Album-Art-3750x3750.jpg',
                    link: 'https://leowolf.bandcamp.com/album/dragon',
                },
                {
                    name: 'III',
                    image: 'assets/iii cover.jpg',
                    link: 'https://leowolf.bandcamp.com/album/iii',
                },
                {
                    name: 'II',
                    image: 'assets/live 2 cover.jpg',
                    link: 'https://leowolf.bandcamp.com/album/ii',
                },
                {
                    name: 'I',
                    image: 'assets/live 1 cover.jpg',
                    link: 'https://leowolf.bandcamp.com/album/i',
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