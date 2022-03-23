import { FPSRecorder } from "./FPSRecorder";
import { GameLoop } from "./GameLoop";
import { Scene } from "./Scene";
import { loadAndCompileShaders } from "./ShaderUtils";

export class Game {
    private onScoreChanged: (newScore: number) => void;
    private onGameDone: (finalScore: number) => void;
    private loop: GameLoop;
    private shaderProgram: any;
    private fpsRecorder: FPSRecorder;

    constructor(readonly context: any, readonly canvas: any) {
        this.shaderProgram = loadAndCompileShaders(this.context);
    }

    start() {
        this.init();
        this.loop.start();
    }

    stop() {
        this.loop.stop();
        //this.snakeGame.cleanup();
    }

    private init() {
        /*this.fpsRecorder = new FPSRecorder();
        this.fpsRecorder.registerOnLowFPSDetected(this.onLowFPSDetected);
        const scene = new Scene();
        scene.add(this.snakeGame);
        this.loop = new GameLoop(this.context, scene, this.fpsRecorder);
        this.snakeGame.registerOnScoreChanged((newScore: number) => {
            if (!this.onScoreChanged) {
                return;
            }
            this.onScoreChanged(newScore);
        });
        this.snakeGame.registerOnGameDone((finalScore: number) => {
            this.loop.stop();
            if (!this.onGameDone) {
                return;
            }
            this.onGameDone(finalScore);
        });
        this.loop.init();*/
    }

    onLowFPSDetected = () => {
        //this.snakeGame.switchToLowerQuality();
    };

    registerOnScoreChanged(callback: (newScore: number) => void) {
        this.onScoreChanged = callback;
    }

    registerOnGameDone(callback: (finalScore: number) => void) {
        this.onGameDone = callback;
    }
}
