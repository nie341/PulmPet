import { Communicator, EventSystemBuilder } from '../system-communication/export-system-communication';
import { SystemScale } from '../system-scales/export-system-scales';

/**
 * Абстрактный класс для систем животного отец систем
 * @export
 * @class System
 */
class System {
    /**
     * Коммуникатор для общения с другими системами
     * @type {Communicator}
     */
    _communicator;

    /**
     * Состояние системы в целом
     * @type {SystemScale} объект состояния
     * @memberOf System
     */
    _systemState;

    constructor(systemState) {
        this._systemState = systemState;
    }

    /**
     * Устанавливает системе коммуникатор
     * @param {Communicator} communicator 
     * @memberOf System
     */
    setCommunicator(communicator) {
        this._communicator = communicator;
    }

    /**
     * Публикация изменения в системе
     * 
     * @param {EventSystemBuilder} event
     * @param {Number} params
     * @param {Boolean} [autoComplete=false]
     * 
     * @memberOf System
     */
    trigger(event, params, autoComplete = false) {
        if (autoComplete) {
            event = Math.sign(params) ? event.increase : event.decrease;
        }
        this._communicator.publish(event, params);
    }


    /**
     * Анализирует показатели системы выводя вердикт о состоянии 
     * 
     * @memberOf System
     */
    analyzeSystem() {
    }

    onSpeedIncrease(delta) {
    }

    onSpeedDecrease(delta) {
    }

    onWeightIncrease(delta) {
    }

    onWeightDecrease(delta) {
    }

    onPressureIncrease(delta) {
    }

    onPressureDecrease(delta) {
    }

    onHeartbeatIncrease(delta) {
    }

    onHeartbeatDecrease(delta) {
    }

}

export { System };

