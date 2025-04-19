import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../utils/api';
import '../../styles/video.css';

export default function VideoPage() {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/api/videos/${videoId}`)
      .then(res => {
        setVideo(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [videoId]);

  if (loading) return <p>Loading video...</p>;
  if (!video) return <p>Video not found.</p>;

  return (
    <div className="video-detail">
      <h2>🎥 Video Detail</h2>

      <p><strong>Platform:</strong> {video.platform}</p>
      <p><strong>Video URL:</strong> <a href={video.video_url} target="_blank" rel="noreferrer">{video.video_url}</a></p>
      <p><strong>Caption:</strong> {video.caption}</p>
      <p><strong>Score:</strong> {video.score}</p>
      <p><strong>Campaign ID:</strong> {video.campaign_id}</p>
    </div>
  );
}
