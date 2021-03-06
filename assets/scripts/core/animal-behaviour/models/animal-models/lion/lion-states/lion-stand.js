import { PrimitiveState } from '../../../../state-machine/states/export-states';
import { Animal } from '../../animal';

export class LionStand extends PrimitiveState {
    /**
     * @type {Animal}
     * @memberOf Stand
     */
    _model;

    constructor(name, model, isEndPoint = false, routeEngine = null) {
        super(name, model, isEndPoint, routeEngine);

    }
    /**
     * @returns {Promise}
     * 
     * @memberOf LionStand
     */
    run() {
        let resolveFn, rejectFn;
        let promise = new Promise((resolve, reject) => {
            resolveFn = resolve;
            rejectFn = reject;
        });
        cc.log('стою');
        this._model._circulatory.changeHeartbeat(-0.7);
        this._model._circulatory.changePressure(-0.2);
        this._model._muscular.changeSpeed(0.5);
        this._model._muscular.changeWeight(0.7);
        setTimeout(() => { resolveFn(); }, 4000);
        return promise;

    }

}