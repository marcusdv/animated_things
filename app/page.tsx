import Link from 'next/link';

export default function Page() {
    return (
        <div className='bg-blue-950 h-screen w-full'> 
            <h1 className='text-center text-white text-5xl sm:text-6xl w-full'>Coisas ✨animadas✨</h1>
            <div className='mt-12 mx-auto w-full sm:w-4/12 flex flex-col items-center gap-4 text-center'>

                <Link
                    className="inline-block border-2 border-gray-900 bg-red-800 text-white text-3xl py-2 px-4 w-80"
                    href={'/animateless'}
                    >
                    Animateless
                </Link>
                    </div>
        </div>
    );
}
