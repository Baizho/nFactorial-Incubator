import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{overflow:"visible"}}>
        {children}
      </body>
    </html>
  );
}
