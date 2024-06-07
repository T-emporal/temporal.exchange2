'use client'

import '@dotlottie/react-player/dist/index.css';


import Board from '@/components/tetris/Board';
import { useTetris } from '@/hooks/useTetris';


const TetrisBoard = () => {

    const { board, startGame, isPlaying, score } = useTetris();
 
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="h-full mx-5 relative text-lg rounded-xl p-10 bg-stone-950/50 border border-temporal/20">
                <h2 className="text-center text-xl text-temporal mb-4">Score: <span className="text-white">{score}</span></h2>

                <Board currentBoard={board} />
                <div className="flex flex-col items-center">
                    {isPlaying ? (
                        <button className="mt-8 rounded-md border border-temporal text-base px-8 py-2 text-temporal hover:bg-temporal hover:text-white transition-colors" onClick={startGame}>RESTART</button>
                    ) : (
                        <button className="mt-8 rounded-md border border-temporal text-base px-8 py-2 text-temporal hover:bg-temporal hover:text-white transition-colors" onClick={startGame}>NEW GAME</button>
                    )}
                </div>
            </div>

        </div>
    )
}

export default TetrisBoard;