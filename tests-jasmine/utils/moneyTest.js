import {formatCurrency} from '../../scripts/utils/money.js';

describe('test suite: format currency', () => {
    it('Converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('Works with zero', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('Rounds upto nearest cents', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});