module.exports = {
    name: 'DiscogController',
    func: function ($scope) {
        $scope.load = () => {
            const albums = [
                {
                    name: 'Magnolia',
                    image: 'assets/Magnolia Album Cover w filter.jpg',
                    link: 'https://sinetology.bandcamp.com/album/magnolia',
                },
                {
                    name: 'Dragon',
                    image: 'assets/Dragon-Album-Art-3750x3750.jpg',
                    link: 'https://sinetology.bandcamp.com/album/dragon',
                },
                {
                    name: 'live 2',
                    image: 'assets/live 2 cover.jpg',
                    link: 'https://leowolf.bandcamp.com/album/live-2-2',
                },
                {
                    name: 'live 1',
                    image: 'assets/live 1 cover.jpg',
                    link: 'https://leowolf.bandcamp.com/album/live-1',
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