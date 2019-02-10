module.exports = {
    name: 'MusicController',
    func: function ($scope) {
        $scope.load = () => {
            const musicProjects = [
                {
                    link: '/#!/leo-wolf',
                    name: 'leo wolf',
                    image: 'assets/conscious pool shell logo.png',
                },
                {
                    link: '/#!/snoom',
                    name: 'SNOOM',
                    image: 'assets/conscious pool ripple logo.png',
                },
            ];

            const parent = document.querySelector('#music-projects-list');
                for (let i = 0; i < musicProjects.length; i++) {
                    const musicProject = document.createElement('li');
                    musicProject.innerHTML = Mustache.render (
                        document.querySelector('#project-template').innerHTML,
                        {
                            projectLink: musicProjects[i].link,
                            projectName: musicProjects[i].name,
                            projectImage: musicProjects[i].image,
                        }
                    );
                    parent.appendChild(musicProject);
                }
        };
    }
}