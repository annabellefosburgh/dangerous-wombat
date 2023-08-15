import React, { useState, useEffect } from 'react';

function PodcastInfo({ podcastIds, episodeIds }) {
    const API_KEY = '1c9247616fa64c7083f70675522e1fee';
    const [podcastData, setPodcastData] = useState(null);
    const [episodeData, setEpisodeData] = useState(null);

    useEffect(() => {
        const fetchPodcastData = async () => {
            const podcastResponses = [];
            for (const podcastId of podcastIds) {
                const response = await fetch(`https://listen-api.listennotes.com/api/v2/podcasts/${podcastId}`, {
                    headers: {
                        'X-ListenAPI-Key': API_KEY
                    }
                })
            const data = await response.json();

            podcastResponses.push(data)
            }

            setPodcastData(podcastResponses);
        };

        const fetchEpisodeData = async () => {
            const episodeResponses = [];
            for (const episodeId of episodeIds) {
                const response = await fetch(`https://listen-api.listennotes.com/api/v2/episodes/${episodeId}`, {
                    headers: {
                        'X-ListenAPI-Key': API_KEY
                    }
                })
            const data = await response.json();

            episodeResponses.push(data)
            }

            setEpisodeData(episodeResponses);
        };

        fetchPodcastData();
        fetchEpisodeData();
    }, [podcastIds, episodeIds]);

    const extractTextFromHtml = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }

    return (
        <div>
            {podcastData?.map((podcast, index) => (
                <div key={index}>
                    <h2>Podcast: {podcast.title}</h2>   
                    <p>Website: <a href={podcast.website}>Link to the podcast website</a></p>
                    <img src={podcast.thumbnail} alt={podcast.title} />
                    <p>Description: {extractTextFromHtml(podcast.description)}</p> 
                </div>
            ))}
            {episodeData?.map((episode, index) => (
                <div key={index}>
                    <h2>Podcast: {episode.title}</h2>   
                    <p>Episode Link: 
                        <a href={episode.link}> Link to this episode</a>
                    </p>
                    <img src={episode.thumbnail} alt={episode.title} />
                    <p>Description: {extractTextFromHtml(episode.description)}</p> 
                </div>
            ))}
        </div>
    );
}

export default PodcastInfo;