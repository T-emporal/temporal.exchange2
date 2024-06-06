'use client'

import '@dotlottie/react-player/dist/index.css';


import Board from '@/components/tetris/Board';
import { useTetris } from '@/hooks/useTetris';


const TetrisBoard = () => {

    const { board, startGame, isPlaying, score } = useTetris();
 
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="h-full mx-5 relative backdrop-blur-[6px] text-xl rounded-xl p-10"
                style={{
                    background: 'radial-gradient(ellipse at center top, rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0.2) 100%)',
                    boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
                }}>
                <h2 className="text-center text-xl text-temporal mb-4">Score: <span className="text-white">{score}</span></h2>

                <Board currentBoard={board} />
                <div className="flex flex-col items-center">
                    {isPlaying ? (
                        <button className="mt-8 rounded-full border-2 border-temporal text-base px-12 py-4 text-temporal hover:bg-temporal hover:text-white transition-colors" onClick={startGame}>RESTART</button>
                    ) : (
                        <button className="mt-8 rounded-full border-2 border-temporal text-base px-12 py-4 text-temporal hover:bg-temporal hover:text-white transition-colors" onClick={startGame}>NEW GAME</button>
                    )}
                </div>
            </div>

        </div>
    )
}

export default TetrisBoard;