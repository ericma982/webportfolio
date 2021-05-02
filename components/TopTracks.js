import useSWR from 'swr'

function fetcher(route) {

    return fetch(route)
        .then((r) => r.ok && r.json())
        .then((user) => user || null);
}


export default function Spotify() {

    const { data } = useSWR('api/top-tracks', fetcher);

    if (!data) {
        return null;
    }
    return (
        <div className="text-white">
            <h1 className="font-medium">Often Listening To:</h1>
            {data.tracks.map((track, index) => {
                return (
                    <a href={track.songUrl} target="_blank"
                        rel="noopener noreferrer">
                        <div className="">
                            {index + 1}. {track.title} - {track.artist}
                        </div>
                    </a>
                )
            })}

        </div>
    )
}
