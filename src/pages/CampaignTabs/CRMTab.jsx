import { useEffect, useState } from 'react';
import api from '../../utils/api';
import '../../styles/crm.css';

export default function CRMTab() {
  const [events, setEvents] = useState([]);
  const [summary, setSummary] = useState({ clicks: 0, conversions: 0 });

  useEffect(() => {
    api.get('/api/crm/events').then(res => setEvents(res.data));
    api.get('/api/crm/summary').then(res => setSummary(res.data));
  }, []);

  return (
    
    <>
    <div className="crm-tab">
      <h2>📊 CRM Overview</h2>

      <div className="crm-summary">
        <p><strong>Total Clicks:</strong> {summary.clicks}</p>
        <p><strong>Total Conversions:</strong> {summary.conversions}</p>
      </div>

      <table className="crm-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
            <th>Campaign</th>
            <th>Video</th>
            <th>Persona</th>
            <th>GA Sync</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e, i) => (
            <tr key={i}>
              <td>{new Date(e.created_at).toLocaleString()}</td>
              <td>{e.event_type}</td>
              <td>{e.campaign_id}</td>
              <td>{e.video_id}</td>
              <td>{e.persona_id}</td>
              <td>{e.sent_to_ga ? '✅' : '❌'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
