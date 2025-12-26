import Game from './components/Game';
import Link from 'next/link';

export const metadata = {
    title: 'Tic-Tac-Toe - Vibes',
    description: 'A voice-controlled Tic-Tac-Toe game.',
};

export default function TicTacToePage() {
    return (
        <section id="app">
            <div id="bg" />
            <div className="centered-content" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflowY: 'auto'
            }}>
                <Link href="/vibes" className="light-font" style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '2rem',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                    zIndex: 100
                }}>
                    ← Back to Vibes
                </Link>

                <div className="title" style={{ textAlign: 'center' }}>
                    <p id="name">Tic Tac Toe</p>
                </div>

                <Game />
            </div>
        </section>
    );
}
