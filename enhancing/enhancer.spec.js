const { expect } = require('@jest/globals');
const enhancer = require('./enhancer.js');
// test away!

describe('Success Method', () => {
	it('Increases by 1', () => {
		const expectedItem = { name: 'car', durability: 100, enhancement: 12 };
		const item = enhancer.success({ name: 'car', durability: 100, enhancement: 11 });
		expect(expectedItem).toMatchObject(item);
	});
	it("Don't increase over 20", () => {
		const expectedItem = { name: 'car', durability: 100, enhancement: 20 };
		const item = enhancer.success({	name: 'car', durability: 100, enhancement: 20 });
		expect(expectedItem).toMatchObject(item);
	});
	it("Don't increase", () => {
		const expectedItem = { name: 'car', durability: 100, enhancement: 21 };
		const item = enhancer.success({ name: 'car', durability: 100, enhancement: 21 });
		expect(expectedItem).toMatchObject(item);
	});
});
