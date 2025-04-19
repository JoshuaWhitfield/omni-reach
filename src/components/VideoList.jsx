import '../styles/dashboard.css';

export default function VideoList({ videos }) {
  if (!videos?.length) return <p>No videos selected.</p>;

  return (
    <div className="video-list">
      <h2>Selected Videos</h2>
      {videos.map((v, i) => (
        <div className="video-card" key={i}>
          <a href={v.video_url} target="_blank" rel="noopener noreferrer">{v.video_url}</a>
          <p>Score: {v.score}</p>
          <p>Matched Hashtags: {v.matched_hashtags?.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}
