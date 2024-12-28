import Link from 'next/link';

export default function Page() {
    return (
        <div className='bg-blue-950 h-screen'> 
            <h1 className='text-center text-white text-6xl'>Coisas ✨animadas✨</h1>
            <div className='mt-12 mx-auto w-4/12 flex flex-col gap-4 text-center'>

                <Link
                    className="inline-block border-2 border-gray-900 bg-red-800 text-white text-3xl py-2 px-4 "
                    href={'/animateless'}
                    >
                    Animateless
                </Link>
                    </div>
        </div>
    );
}
