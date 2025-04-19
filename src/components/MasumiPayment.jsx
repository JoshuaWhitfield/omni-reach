import { useState } from 'react';
import api from '../utils/api';

export default function MasumiPayment({ campaignId, onPaid }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handlePayment = async () => {
    setLoading(true);
    setStatus(null);

    try {
      const response = await api.post('/api/masumi/transaction', {
        campaign_id: campaignId
      });

      if (response.data.success) {
        setStatus('✅ Payment successful! Campaign will now launch.');
        onPaid(response.data);
      } else {
        setStatus('❌ Payment failed: ' + response.data.message);
      }
    } catch (err) {
      console.error(err);
      setStatus('❌ Payment error.');
    }

    setLoading(false);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing Payment...' : '💳 Pay & Launch Campaign'}
      </button>
      {status && <p>{status}</p>}
    </div>
  );
}
