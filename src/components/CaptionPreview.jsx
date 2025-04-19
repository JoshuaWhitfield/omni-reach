import { useState } from 'react';
import api from '../utils/api';

export default function MasumiPayment({ campaignId, onPaid }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const response = await api.post('/api/masumi/pay', { campaign_id: campaignId });
    setLoading(false);
    if (response.data.success) onPaid(response.data);
  };

  return (
    <div>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Pay & Launch Campaign'}
      </button>
    </div>
  );
}
