import { Trophy } from 'lucide-react';
import './Gamification.css';

export default function Leaderboard() {
    return (
        <div className="leaderboard">
            <div className="leaderboard-header">
                <Trophy size={20} />
                <h3>Hall of Fame</h3>
            </div>
            <div className="leaderboard-coming-soon">
                <Trophy size={36} className="lb-coming-icon" />
                <p>Leaderboard coming soon</p>
                <span>Compete with classmates once live class features are enabled.</span>
            </div>
        </div>
    );
}
