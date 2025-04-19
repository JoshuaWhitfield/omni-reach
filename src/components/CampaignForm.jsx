import { useState } from 'react';
import api from '../utils/api';

export default function CampaignForm({ onSubmit }) {
  const [brand, setBrand] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [keywords, setKeywords] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      brand,
      hashtags: hashtags.split(',').map(s => s.trim()),
      keywords: keywords.split(',').map(s => s.trim())
    };
    const response = await api.post('/api/campaign/config', config);
    onSubmit(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Start a Campaign</h2>
      <label>Brand: <input value={brand} onChange={e => setBrand(e.target.value)} /></label>
      <label>Hashtags (comma-separated): <input value={hashtags} onChange={e => setHashtags(e.target.value)} /></label>
      <label>Keywords (comma-separated): <input value={keywords} onChange={e => setKeywords(e.target.value)} /></label>
      <button type="submit">Submit</button>
    </form>
  );
}
