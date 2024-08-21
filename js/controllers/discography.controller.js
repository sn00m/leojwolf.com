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