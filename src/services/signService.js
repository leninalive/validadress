import { keyPair, address } from 'waves-crypto';
import { data, signTx } from 'waves-transactions';


class WavesController {
    constructor(seed) {
        this.seed = seed;
        this.keyPairs = keyPair(seed);
        this.address = address(this.keyPairs, 'T')
    }

    getDataTransaction(keysAndValues) {
        const tx =  data({
            data: keysAndValues,
            senderPublicKey: this.keyPairs.public
        });

        return signTx(tx, this.seed)
    }
}

export default WavesController;
