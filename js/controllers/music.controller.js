module.exports = {
    name: 'MusicController',
    func: function ($scope) {
        $scope.load = () => {
            const musicProjects = [
                {
                    link: 'leo-wolf',
                    name: 'leo wolf',
                    image: 'assets/guangzhou-set.jpg',
                },
                {
                    link: 'snoom',
                    name: 'SNOOM',
                    image: 'assets/guangzhou-set.jpg',
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