module.exports = {
    name: 'ArtistsController',
    func: function ($scope) {
        $scope.load = () => {
            const artists = [
                {
                    name: 'snoom',
                    image: 'assets/guangzhou set.jpg',
                },
            ];

            const parent = document.querySelector('#artists-list');
                for (let i = 0; i < artists.length; i++) {
                    let artist = document.createElement('li');
                    artist.innerHTML = Mustache.render (
                        document.querySelector('#artist-template').innerHTML,
                        {
                            artistName: artists[i].name,
                            artistImage: artists[i].image,
                        }
                    );
                    parent.appendChild(artist);
                }
        };
    }
}