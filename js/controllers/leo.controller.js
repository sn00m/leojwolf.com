module.exports = {
    name: 'LeoController',
    func: function ($scope) {
        $scope.load = () => {
            const leoProjects = [
                {
                    link: 'https://leowolf.bandcamp.com/album/spirit-language',
                    name: 'spirit language',
                    image: 'assets/spirit language album cover.jpg',
                },
                {
                    link: 'https://leowolf.bandcamp.com/album/our-time-as-ghosts',
                    name: 'our time as ghosts',
                    image: 'assets/our time as ghosts album cover.jpg',
                },
            ];

            const parent = document.querySelector('#leo-projects-list');
                for (let i = 0; i < leoProjects.length; i++) {
                    const leoProject = document.createElement('li');
                    leoProject.innerHTML = Mustache.render (
                        document.querySelector('#project-template').innerHTML,
                        {
                            projectLink: leoProjects[i].link,
                            projectName: leoProjects[i].name,
                            projectImage: leoProjects[i].image,
                        }
                    );
                    parent.appendChild(leoProject);
                }
        };
    }
}