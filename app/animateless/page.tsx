'use client';
import React from 'react';
import 'animate.css';

const buttonStyle =
    'text-white text-2xl border border-indigo-950 rounded bg-slate-600 py-2 px-8 w-full';

const page = () => {
    // adicionar classes de animação, esperar a animação terminar e remover a classe
    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement>,
        classe: string[]
    ) => {
        const botaoClicado = e.currentTarget;
        botaoClicado.classList.add(...classe);

        botaoClicado.addEventListener('animationend', () => {
            botaoClicado.classList.remove(...classe);
        });
    };

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

    // Para dividir a array em quatro partes (primeiro 1/4, segundo 1/4, terceiro 1/4 e quarto 1/4)
    const tamanho = effects.length;
    const quartoQuarto: [number, number] = [
        Math.floor((3 * tamanho) / 4),
        tamanho,
    ];
    const terceiroQuarto: [number, number] = [
        Math.floor(tamanho / 2),
        Math.floor((3 * tamanho) / 4),
    ];
    const segundoQuarto: [number, number] = [
        Math.floor(tamanho / 4),
        Math.floor(tamanho / 2),
    ];
    const primeiroQuarto: [number, number] = [0, Math.floor(tamanho / 4)];

    const botoes = (indexStart: number, indexEnd: number) =>
        effects.slice(indexStart, indexEnd).map((effect, index) => {
            return (
                <button
                    key={index}
                    className={`${buttonStyle} `}
                    onClick={(event) =>
                        handleClick(event, [
                            'animate__animated',
                            `animate__${effect}`,
                        ])
                    }
                >
                    {effect}
                </button>
            );
        });

    return (
        <div className="bg-stone-400 ">
            <div className="bg-amber-400 mb-4 text-white text-3xl text-center justify-center">
                <h1 className="text-center font-extrabold py-12 text-6xl text-red-600">
                    Animate.css
                </h1>
            </div>
            <div className="flex flex-wrap w-full justify-around gap-4">
                <div className="flex flex-col items-center gap-4 w-[80%] sm:w-[20%]">
                    {botoes(...primeiroQuarto)}
                </div>
                <div className="flex flex-col items-center gap-4 w-[80%] sm:w-[20%]">
                    {botoes(...segundoQuarto)}
                </div>
                <div className="flex flex-col items-center gap-4 w-[80%] sm:w-[20%]">
                    {botoes(...terceiroQuarto)}
                </div>
                <div className="flex flex-col items-center gap-4 w-[80%] sm:w-[20%]">
                    {botoes(...quartoQuarto)}
                </div>
            </div>
        </div>
    );
};

export default page;
