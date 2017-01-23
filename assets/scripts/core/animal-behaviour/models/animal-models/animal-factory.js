import { LionFactory, MouseFactory } from './animal-factories/export-animal-factory';
/**
 * enum типов фабрик животных
 */
const AnimalTypes = {
    lion: 0,
    mouse: 1
}

/**
 * Фабрика животных для расчетов
 * 
 * @class AnimalFactory
 */
class AnimalFactory {
    
    _factories;

    static _instance;

    constructor() { 
        this._factories = {};
        this._factories[AnimalTypes.lion] = LionFactory;
        this._factories[AnimalTypes.mouse] = MouseFactory;
    }

    /**
     * @returns {AnimalFactory}
     */
    static instance() { 
        if (!this._instance) { 
            this._instance = new AnimalFactory();
        }
        return this._instance;
    }

    create(animalType, params) { 
        return new this._factories[animalType](params).create();
    }
}

export { AnimalFactory, AnimalTypes };