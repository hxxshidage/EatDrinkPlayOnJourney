export default class CounterDown {

    constructor(interval = 1000, millisInFuture = 3000, onTickCallback, onFinishCallback, onStartCallback) {
        this._interval = interval;
        this._millisInFuture = millisInFuture;
        this._onTick = onTickCallback;
        this._onFinish = onFinishCallback;
        this._onStart = onStartCallback;
    }

    start = () => {
        this._cancelInterval();

        this._countIndex = Math.round(this._millisInFuture / 1000);

        this._onStart && this._onStart(this._countIndex);

        this._timerId = setInterval(() => {
            if (--this._countIndex < 1) {
                this._countIndex = 0;
                this._onFinish && this._onFinish(this._countIndex = 0);
                this._cancelInterval();
                return;
            }

            this._onTick && this._onTick(this._countIndex);

        }, this._interval);
    };

    _cancelInterval = () => {
        this._timerId && clearInterval(this._timerId);
        this._timerId = undefined;
    };

    cancel = () => {
        this._cancelInterval();
        this._onTick = null;
        this._onFinish = null;
        this._onStart = null;
    };

}