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
        <div className="min-h-screen md:grid md:grid-cols-1 bg-gradient-to-br from-indigo-100 via-white to-cyan-100">

            {/* Titulo */}
            <div
                className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white text-center justify-center overflow-hidden shadow-2xl z-50 min-h-[150px] w-full"
            >
                <h1
                    ref={tituloRef}
                    className="select-none font-extrabold py-12 text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg"
                >
                    Animateless
                </h1>
            </div>

            {/* Botões */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 pt-40 flex flex-col items-center justify-center">

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl">
                    {effects.map((effect, index) => {
                        // Array de cores vibrantes para os botões
                        const colors = [
                            'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600',
                            'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600',
                            'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
                            'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600',
                            'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600',
                            'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600',
                            'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600',
                            'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600',
                            'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600',
                            'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
                        ];

                        return (
                            <button
                                key={index}
                                className={`${colors[index % colors.length]} 
                                    text-white font-semibold py-3 px-4 rounded-lg 
                                    transform transition-all duration-200 
                                    hover:scale-105 hover:shadow-lg 
                                    active:scale-95 border-0
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
