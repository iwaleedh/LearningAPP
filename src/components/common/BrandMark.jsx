import { BookOpen } from 'lucide-react';

// The Study Smart mark: a burgundy tile with an open book (same as the app header).
export default function BrandMark({ size = 36 }) {
    return (
        <span className="brand-mark" style={{ width: size, height: size }} aria-hidden="true">
            <BookOpen size={Math.round(size * 0.55)} />
        </span>
    );
}
