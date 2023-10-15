import fetchPonyfill from 'fetch-ponyfill';
import { CheckBase } from './CheckBase';
import { Log } from './Log';
import { HASH_TO_TEST, TRUSTLESS_RESPONSE_TYPES } from './constants';
const { fetch } = fetchPonyfill();
const log = new Log('Trustless');
class Trustless extends CheckBase {
    parent;
    _className = 'Trustless';
    _tagName = 'div';
    constructor(parent) {
        super(parent, 'div', 'Trustless');
        this.parent = parent;
    }
    async check() {
        const now = Date.now();
        const gatewayAndHash = `${this.parent.gateway}/ipfs/${HASH_TO_TEST}`;
        this.parent.tag.classList.add('trustless');
        try {
            const trustlessResponseTypesTests = await Promise.all(TRUSTLESS_RESPONSE_TYPES.map(async (trustlessTypes) => {
                const testUrl = `${gatewayAndHash}?format=${trustlessTypes}&now=${now}#x-ipfs-companion-no-redirect`;
                const response = await fetch(testUrl);
                return Boolean(response.headers.get('Content-Type')?.includes(`application/vnd.ipld.${trustlessTypes}`));
            }));
            const failedTests = TRUSTLESS_RESPONSE_TYPES.filter((_result, idx) => !trustlessResponseTypesTests[idx]);
            if (failedTests.length === 0) {
                this.tag.win();
            }
            else {
                const errorMsg = `URL '${gatewayAndHash} does not support the following Trustless response types: [` +
                    `${failedTests.join(', ')}]`;
                log.debug(errorMsg);
                throw new Error(errorMsg);
            }
        }
        catch (err) {
            log.error(err);
            this.onerror();
            throw err;
        }
    }
    checked() {
        log.warn('Not implemented yet');
    }
    onerror() {
        this.tag.err();
    }
}
export { Trustless };
//# sourceMappingURL=Trustless.js.map