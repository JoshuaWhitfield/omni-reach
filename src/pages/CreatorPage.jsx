import { useState } from 'react';
import CreatorDashboard from './CreatorTabs/CreatorDashboard';
import CreatorVideosTab from './CreatorTabs/CreatorVideosTab';
import EarningsTab from './CreatorTabs/EarningsTab';
import '../styles/campaign.css';

export default function CreatorPage() {
  const [tab, setTab] = useState('dashboard');

  const renderTab = () => {
    switch (tab) {
      case 'videos': return <CreatorVideosTab />;
      case 'earnings': return <EarningsTab />;
      default: return <CreatorDashboard />;
    }
  };

  return (
    <div className="campaign-page">
      <aside className="sidebar">
        <h2>Creator</h2>
        <ul>
          <li onClick={() => setTab('dashboard')}>Dashboard</li>
          <li onClick={() => setTab('videos')}>Videos</li>
          <li onClick={() => setTab('earnings')}>Earnings</li>
        </ul>
      </aside>
      <main className="main-content">
        {renderTab()}
      </main>
    </div>
  );
}
