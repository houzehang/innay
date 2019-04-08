import { EventEmitter } from 'events';

const emitter = new EventEmitter;

export const register = (event, handler) => {
    emitter.on(event, handler);

    return {
        unregister: () => {
            emitter.removeListener(event, handler);
        }
    };
};

export const trigger = (event, message) => {
    emitter.emit(event, message);
};