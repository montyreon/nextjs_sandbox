import Link from "next/link";

// app/not-found.tsx
export default function NotFound() {
    return (
        <div className="h-screen flex flex-col">
            <div className="sticky top-0 z-50 flex justify-start w-full p-6">
                <Link
                    href="/"
                    className="px-4 py-2 text-black font-serif transition-colors duration-200 rounded shadow bg-white/80 hover:bg-white"
                >
                    Return
                </Link>
            </div>
            <div className="flex-1 flex flex-col gap-4 items-center justify-center">
                <h1 className="text-[3rem] font-bold text-white drop-shadow-lg text-center">Teka lang, nasira &apos;nak</h1>
                <p className="font-serif text-white drop-shadow-lg text-center">Error 500</p>
            </div>
        </div>
    );}