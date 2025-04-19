import '../styles/footer.css';

export default function Footer() {
  const linkedInArr = [
    ['https://www.linkedin.com/in/roshan-sanjeev/', 'Roshan Sanjeev'],
    ['https://www.linkedin.com/in/joshua-whitfield-b10837264/', "Myunghwan Lee"],
    ['https://www.linkedin.com/in/joshua-whitfield-b10837264/', "Joshua Whitfield"],
    ['https://www.linkedin.com/in/mohd-sarfaraz-ali/', 'Ali Sarfaraz'],
    ['https://www.linkedin.com/in/nikhil-koganti', 'Nick Koganti'],
    ['', 'Jawad']
  ];

  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} OmniReach. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://omni-reach.io/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>
        <a href="https://omni-reach.io/terms" target="_blank" rel="noopener noreferrer">Terms</a>
        <a href="mailto:support@omni-reach.io">Contact</a>

        <ul className="footer-list">
          {linkedInArr.map(([url, author], index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">{author}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
