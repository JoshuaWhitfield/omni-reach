import { Link } from 'react-router-dom';
import '../styles/dashboard.css';

export default function AccessDenied() {
  return (
    <div className="dashboard-container" style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>🔒 Access Denied</h1>
      <p>You must complete the Masumi transaction to proceed.</p>
      <p>If you believe this is an error, please contact support or try again.</p>
      <Link to="/">
        <button style={{ marginTop: '20px' }}>Go Back to Dashboard</button>
      </Link>
    </div>
  );
}
