import React, { useState, useEffect } from 'react';

function PodcastInfo({ podcastIds, episodeIds }) {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [podcastData, setPodcastData] = useState(null);
    const [episodeData, setEpisodeData] = useState(null);

    useEffect(() => {
        const fetchPodcastData = async () => {
            const podcastPromises = podcastIds.map(podcastId => 
                fetch(`https://api.listennotes.com/v2/podcasts/${podcastIds}`, {
                    headers: {
                        'X-ListenAPI-Key': API_KEY
                    }
                })
                .then(response => response.json())
            );

            const podcastResponses = await Promise.all(podcastPromises);

            setPodcastData(podcastResponses);
        };

        const fetchEpisodeData = async () => {
            const episodePromises = podcastIds.map(episodeId => 
                fetch(`https://api.listennotes.com/v2/podcasts/${episodeIds}`, {
                    headers: {
                        'X-ListenAPI-Key': API_KEY
                    }
                })
                .then(response => response.json())
            );

            const episodeResponses = await Promise.all(episodePromises);

            setEpisodeData(episodeResponses);
        };

        fetchPodcastData();
        fetchEpisodeData();
    }, [podcastIds, episodeIds]);

    return (
        <div>
            {podcastData.map((podcast, index) => (
                <div key={index}>
                    <h2>Podcast: {podcast.title}</h2>   
                    <p>Website: {podcast.website}</p>
                    <img src={podcast.thumbnail} alt={podcast.title} />
                    <p>Description: {podcast.description}</p> 
                </div>
            ))}
            {episodeData.map((episode, index) => (
                <div key={index}>
                    <h2>Podcast: {episode.title}</h2>   
                    <p>Episode Link: 
                        <a href={episode.website}> Here</a>
                    </p>
                    <img src={episode.thumbnail} alt={episode.title} />
                    <p>Description: {episode.description}</p> 
                </div>
            ))}
        </div>
    );
}

export default PodcastInfo;