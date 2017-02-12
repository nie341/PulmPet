/**
 * Created by shaba on 13.02.2017.
 */
import { PrimitiveState } from '../states/export-states';

export class StateRun extends PrimitiveState {


    constructor(model, isEndPoint = false, routeEngine = null) {
        super("Run", model, isEndPoint, routeEngine);

    }
    /**
     * @returns {Promise}
     *
     * @memberOf LionRun
     */
    run() {
        let resolveFn, rejectFn;
        let promise = new Promise((resolve, reject) => {
            resolveFn = resolve;
            rejectFn = reject;
        });
        cc.log('бегу');
        this._model._circulatory.changeHeartbeat(0.5);
        this._model._circulatory.changePressure(0.2);
        this._model._muscular.changeSpeed(-0.4);
        this._model._muscular.changeWeight(-0.5);
        setTimeout(() => { resolveFn(); }, 2000);
        return promise;

    }

}