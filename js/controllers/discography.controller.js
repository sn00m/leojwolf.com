module.exports = {
    name: 'DiscogController',
    func: function ($scope) {
        $scope.load = () => {
            const albums = [
                {
                    name: 'Leo Wolf & Teroscu',
                    image: 'assets/discog/Leo Wolf & Teroscu small.JPG',
                    link: 'https://deadlettersarchive.bandcamp.com/album/leo-wolf-teroscu',
                },
                {
                    name: 'Shapeshifter',
                    image: 'assets/discog/Shapeshifter Cover.JPG',
                    link: 'https://leowolf.bandcamp.com/album/shapeshifter',
                },
                {
                    name: 'Magnolia',
                    image: 'assets/discog/Magnolia Album Cover w filter.jpg',
                    link: 'https://leowolf.bandcamp.com/album/magnolia',
                },
                {
                    name: 'Dragon',
                    image: 'assets/discog/Dragon-Album-Art-3750x3750.jpg',
                    link: 'https://leowolf.bandcamp.com/album/dragon',
                },
            ];

            const liveAlbums = [
                {
                    name: 'A Ritual At Dusk; Light Breaks Down',
                    image: 'assets/discog/a ritual.jpg',
                    link: 'https://leowolf.bandcamp.com/album/a-ritual-at-dusk-light-breaks-down',
                },
                {
                    name: 'Recursion',
                    image: 'assets/discog/recursion cover.jpg',
                    link: 'https://leowolf.bandcamp.com/track/recursion',
                },
                {
                    name: 'III',
                    image: 'assets/discog/iii cover.jpg',
                    link: 'https://leowolf.bandcamp.com/album/iii',
                },
                {
                    name: 'II',
                    image: 'assets/discog/live 2 cover.jpg',
                    link: 'https://leowolf.bandcamp.com/album/ii',
                },
                {
                    name: 'I',
                    image: 'assets/discog/live 1 cover.jpg',
                    link: 'https://leowolf.bandcamp.com/album/i',
                },
            ];

            const studioAlbumsParent = document.querySelector('#albums-list');
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
                    studioAlbumsParent.appendChild(album);
                }

            const liveAlbumsParent = document.querySelector('#live-albums');
                for (let i = 0; i < liveAlbums.length; i++) {
                    let album = document.createElement('li');
                    album.innerHTML = Mustache.render (
                        document.querySelector('#album-template').innerHTML,
                        {
                            albumName: liveAlbums[i].name,
                            albumImage: liveAlbums[i].image,
                            albumLink: liveAlbums[i].link,
                        }
                    );
                    liveAlbumsParent.appendChild(album);
                }
        };
    }
}