module.exports = {
    name: 'SnoomController',
    func: function ($scope) {
        $scope.load = () => {
            const snoomProjects = [
                {
                    link: 'https://leowolf.bandcamp.com/album/g-a-r-d-e-n-s',
                    name: 'g a r d e n s',
                    image: 'assets/gardens album cover.jpg',
                },
                {
                    link: 'https://leowolf.bandcamp.com/album/lost',
                    name: 'lost',
                    image: 'assets/lost album cover.jpg',
                },
                {
                    link: 'https://leowolf.bandcamp.com/album/sleepwalkers',
                    name: 'sleepwalkers',
                    image: 'assets/sleepwalkers album cover.jpg',
                },
            ];

            const parent = document.querySelector('#snoom-projects-list');
                for (let i = 0; i < snoomProjects.length; i++) {
                    const snoomProject = document.createElement('li');
                    snoomProject.innerHTML = Mustache.render (
                        document.querySelector('#project-template').innerHTML,
                        {
                            projectLink: snoomProjects[i].link,
                            projectName: snoomProjects[i].name,
                            projectImage: snoomProjects[i].image,
                        }
                    );
                    parent.appendChild(snoomProject);
                }
        };
    }
}