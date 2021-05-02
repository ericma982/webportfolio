import useSWR from 'swr'

function fetcher(route) {

    return fetch(route)
        .then((r) => r.ok && r.json())
        .then((user) => user || null);
}


export default function Spotify() {

    const { data } = useSWR('api/top-tracks', fetcher);

    console.log(data)
    return (
        <div className="text-white">
            {data.tracks.map((track) => {
                return (
                    <a href={track.songUrl} target="_blank"
                        rel="noopener noreferrer">
                        <div className="text-white">
                            {track.title}
                        </div>
                        <div className="text-white">
                            {track.artist}
                        </div>
                    </a>
                )

            }
            )}


        </div>
    )
}
