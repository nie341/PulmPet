import { PrimitiveState } from '../../../../state-machine/states/export-states';
import { Animal } from '../../animal';

export class LionDrink extends PrimitiveState {
    /**
     * @type {Animal}
     * @memberOf Drink
     */
    _model;

    constructor(name, model, isEndPoint = false, routeEngine = null) {
        super(name, model, isEndPoint, routeEngine);

    }
    /**
     * @returns {Promise}
     * 
     * @memberOf LionDrink
     */
    run() {
        let resolveFn, rejectFn;
        let promise = new Promise((resolve, reject) => {
            resolveFn = resolve;
            rejectFn = reject;
        });

        cc.log('Пью воду');
        this._model._circulatory.changeHeartbeat(0.001);
        this._model._circulatory.changePressure(0.001);
        this._model._muscular.changeSpeed(0.001);
        this._model._muscular.changeWeight(0.001);


        setTimeout(() => { resolveFn(); }, 4000);
        return promise;

    }

}