/**
 * SkeletonCard renders a placeholder card with a loading animation.
 * Useful for indicating loading state while content is being fetched.
 *
 * @returns {JSX.Element} The skeleton card component.
 */
export default function SkeletonCard() {
    return (
        <div className="animate-pulse overflow-hidden bg-white/60 rounded-xl shadow-md">
            <div className="w-full h-48 bg-white" />
            <div className="p-4">
                <div className="w-3/4 h-6 mb-2 bg-white rounded" />
                <div className="w-1/2 h-4 bg-white rounded" />
            </div>
        </div>
    );
}