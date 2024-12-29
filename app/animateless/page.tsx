'use client';
import React, { useState } from 'react';
import 'animate.css';

const buttonStyle =
    'text-white text-2xl border overflow-hidden border-indigo-950 rounded bg-slate-600 py-2  w-full';

const divButtons =
    'flex flex-col items-center gap-4 w-[80%] md:w-[30%] xl:w-[20%] ';

const Page = () => {
    const [isHovered, setIsHovered] = useState(false);

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
        const botaoClicado = e.currentTarget;
        botaoClicado.classList.add(...classe);

        botaoClicado.addEventListener('animationend', () => {
            botaoClicado.classList.remove(...classe);
        });
    };

    const randomIndex = Math.floor(Math.random() * effects.length);

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
        <div className="bg-stone-400 h-screen w-full">
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-amber-400 mb-4 text-white text-center justify-center max-w-full overflow-hidden"
            >
                <h1
                    className={`text-center select-none font-extrabold py-12 text-5xl sm:text-6xl text-red-600 ${
                        isHovered
                            ? `animate__animated animate__${effects[randomIndex]} animate__infinite infinite`
                            : ''
                    }`}
                >
                    Animate.css
                </h1>
            </div>
            <div className="flex flex-wrap justify-around gap-4">
                <div className={divButtons}>{botoes(...primeiroQuarto)}</div>
                <div className={divButtons}>{botoes(...segundoQuarto)}</div>
                <div className={divButtons}>{botoes(...terceiroQuarto)}</div>
                <div className={divButtons}>{botoes(...quartoQuarto)}</div>
            </div>
        </div>
    );
};

export default Page;
