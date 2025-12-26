import Link from 'next/link';

export default function Vibes() {
    return (
        <section id="app">
            <div id="bg" />
            <div id="details">
                <div className="title">
                    <p id="name">Vibes</p>
                    <p id="profile" className="light-font">Chill Apps</p>
                </div>
                <div className="social light-font">
                    <Link href="/vibes/tic-tac-toe">Tic-Tac-Toe</Link>
                </div>
                <Link href="/" style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                    zIndex: 100
                }}>
                    Back to Home
                </Link>
            </div>
        </section>
    );
}
