'use client';

import { useRef } from 'react';
import 'animate.css';

export default function Page() {

    const tituloRef = useRef<HTMLHeadingElement>(null);

    const effects = [
        'bounce',
        'flash',
        'pulse',
        'rubberBand',
        'shakeX',
        'shakeY',
        'headShake',
        'swing',
        'tada',
        'wobble',
        'jello',
        'heartBeat',
        'backInDown',
        'backInLeft',
        'backInRight',
        'backInUp',
        'backOutDown',
        'backOutLeft',
        'backOutRight',
        'backOutUp',
        'bounceIn',
        'bounceInDown',
        'bounceInLeft',
        'bounceInRight',
        'bounceInUp',
        'bounceOut',
        'bounceOutDown',
        'bounceOutLeft',
        'bounceOutRight',
        'bounceOutUp',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeInTopLeft',
        'fadeInTopRight',
        'fadeInBottomLeft',
        'fadeInBottomRight',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'fadeOutTopLeft',
        'fadeOutTopRight',
        'fadeOutBottomRight',
        'fadeOutBottomLeft',
        'flip',
        'flipInX',
        'flipInY',
        'flipOutX',
        'flipOutY',
        'lightSpeedInRight',
        'lightSpeedInLeft',
        'lightSpeedOutRight',
        'lightSpeedOutLeft',
        'rotateIn',
        'rotateInDownLeft',
        'rotateInDownRight',
        'rotateInUpLeft',
        'rotateInUpRight',
        'rotateOut',
        'rotateOutDownLeft',
        'rotateOutDownRight',
        'rotateOutUpLeft',
        'rotateOutUpRight',
        'hinge',
        'jackInTheBox',
        'rollIn',
        'rollOut',
        'zoomIn',
        'zoomInDown',
        'zoomInLeft',
        'zoomInRight',
        'zoomInUp',
        'zoomOut',
        'zoomOutDown',
        'zoomOutLeft',
        'zoomOutRight',
        'zoomOutUp',
        'slideInDown',
        'slideInLeft',
        'slideInRight',
        'slideInUp',
        'slideOutDown',
        'slideOutLeft',
        'slideOutRight',
        'slideOutUp',
    ];

    // adicionar classes de animação, esperar a animação terminar e remover a classe
    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement>,
        classe: string[]
    ) => {

        // Anima o título usando useRef
        if (tituloRef.current) {
            const element = tituloRef.current;

            // Remove classes anteriores se existirem
            element.classList.remove('animate__animated');
            classe.forEach(cls => element.classList.remove(cls));

            // Adiciona novas classes
            element.classList.add(...classe);

            // Função para limpar as classes após a animação
            const handleAnimationEnd = () => {
                element.classList.remove(...classe);
                element.removeEventListener('animationend', handleAnimationEnd);
            };

            element.addEventListener('animationend', handleAnimationEnd);
        }

    };

    return (
        // Background ultra escuro
        <div className="min-h-screen md:grid md:grid-cols-1 bg-gradient-to-br from-gray-900 via-slate-900 to-black">

            {/* Titulo - mantém vibrante para contraste */}
            {/* <div
                className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white text-center justify-center overflow-hidden shadow-2xl z-50 min-h-[150px] w-full"
            > */}

            <div
                className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-slate-700 via-gray-800 to-slate-900 text-white text-center justify-center overflow-hidden shadow-2xl z-50 min-h-[150px] w-full"
            >
                <h1
                    ref={tituloRef}
                    className="select-none font-extrabold py-12 text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg"
                >
                    Animateless
                </h1>
            </div>

            {/* Botões */}
            <div className="bg-transparent p-8 pt-44 flex flex-col items-center justify-center">

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl">
                    {effects.map((effect, index) => {
                        // Botões muito escuros com bordas sutis
                        const colors = [
                            'bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700',
                            'bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700',
                            'bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700',
                            'bg-gradient-to-r from-green-700 to-green-800 hover:from-green-600 hover:to-green-700',
                            'bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-600 hover:to-purple-700',
                            'bg-gradient-to-r from-orange-700 to-orange-800 hover:from-orange-600 hover:to-orange-700',
                            'bg-gradient-to-r from-indigo-700 to-indigo-800 hover:from-indigo-600 hover:to-indigo-700',
                            'bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-600 hover:to-cyan-700',
                            'bg-gradient-to-r from-pink-700 to-pink-800 hover:from-pink-600 hover:to-pink-700',
                            'bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-600 hover:to-emerald-700',
                        ];

                        return (
                            <button
                                key={index}
                                className={`${colors[index % colors.length]} 
                                    text-white font-semibold py-3 px-4 rounded-lg 
                                    transform transition-all duration-200 
                                    hover:scale-105 hover:shadow-lg hover:shadow-gray-800/50
                                    active:scale-95
                                    shadow-md text-xs lg:text-sm min-w-[140px]`}
                                onClick={(event) =>
                                    handleClick(event, [
                                        'animate__animated',
                                        `animate__${effect}`,
                                    ])
                                }
                            >
                                {effect}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>

    );

}
