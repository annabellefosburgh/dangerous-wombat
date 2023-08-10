import React from 'react';
import PodcastInfo from '../components/Podcasts/PodcastInfo';

function Podcasts() {
    const podcastIds = ['39a489e847f14d17b96d76acf7ad2351', '0087e50929614250aac999207c1d33aa', '3c03b47b265647a5b6ad271eb55130a4'];
    const episodeIds = ['ae38028f459b481cb3cd5ec44abf81ec', 'aa3811e9af194804af1ef4f936242efa', '2f79e96152c1456fb639f48d9e1a584e'];

    return (
        <div>
            <h1>Podcasts and Episodes to Become a Better Developer</h1>
            <PodcastInfo podcastIds={podcastIds} episodeIds={episodeIds} />
        </div>
    )
}