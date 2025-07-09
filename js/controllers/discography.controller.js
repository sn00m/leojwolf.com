module.exports = {
    name: 'DiscogController',
    func: function ($scope) {
        $scope.load = () => {
            const albums = [
                {
                    name: 'I saw your shadow on the wall',
                    image: 'assets/discog/isysotw album cover.png',
                    link: 'https://leowolf.bandcamp.com/album/i-saw-your-shadow-on-the-wall',
                    format: 'Cassette',
                    label: 'Blind Reading',
                    year: '2025'
                },
                {
                    name: 'Leo Wolf & Teroscu',
                    image: 'assets/discog/Leo Wolf & Teroscu small.JPG',
                    link: 'https://blindreading.bandcamp.com/album/leo-wolf-teroscu',
                    format: 'Cassette/CD',
                    label: 'Dead Letters Archive',
                    year: '2024'
                },
                {
                    name: 'Shapeshifter',
                    image: 'assets/discog/Shapeshifter Cover.JPG',
                    link: 'https://leowolf.bandcamp.com/album/shapeshifter',
                    format: 'LP',
                    label: 'Dead Letters Archive',
                    year: '2023'
                },
                {
                    name: 'Magnolia',
                    image: 'assets/discog/Magnolia Album Cover w filter.jpg',
                    link: 'https://leowolf.bandcamp.com/album/magnolia',
                    format: 'Cassette',
                    label: 'Sinetology',
                    year: '2020'
                },
                {
                    name: 'Dragon',
                    image: 'assets/discog/Dragon-Album-Art-3750x3750.jpg',
                    link: 'https://leowolf.bandcamp.com/album/dragon',
                    format: 'Cassette',
                    label: 'Sinetology',
                    year: '2020'
                },
            ];

            const discogParent = document.querySelector('#albums-list');
                for (let i = 0; i < albums.length; i++) {
                    let album = document.createElement('li');
                    album.innerHTML = Mustache.render (
                        document.querySelector('#discography-template').innerHTML,
                        {
                            albumName: albums[i].name,
                            albumYear: albums[i].year,
                            albumImage: albums[i].image,
                            albumLink: albums[i].link,
                            format: albums[i].format,
                            labelName: albums[i].label,
                        }
                    );
                    discogParent.appendChild(album);
                }
        };
    }
}