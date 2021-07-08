// const { expect } = require('@jest/globals');
// const { describe } = require('yargs');
const enhancer = require('./enhancer.js');
// test away!

describe('Repair Method', () => {
	it('repair the item', () => {
		const expectedItem = { name: 'car', durability: 100, enhancement: 10 };
		const item = enhancer.repair({ name: 'car', durability: 20, enhancement: 10 });
		expect(expectedItem).toMatchObject(item);
	});
});

describe('Success Method', () => {
	it('Increases by 1', () => {
		const expectedItem = { name: 'car', durability: 100, enhancement: 12 };
		const item = enhancer.success({ name: 'car', durability: 100, enhancement: 11 });
		expect(expectedItem).toMatchObject(item);
	});
	it("Don't increase over 20", () => {
		const expectedItem = { name: 'car', durability: 100, enhancement: 20 };
		const item = enhancer.success({ name: 'car', durability: 100, enhancement: 20 });
		expect(expectedItem).toMatchObject(item);
	});
	it("Don't increase", () => {
		const expectedItem = { name: 'car', durability: 100, enhancement: 21 };
		const item = enhancer.success({ name: 'car', durability: 100, enhancement: 21 });
		expect(expectedItem).toMatchObject(item);
	});
});

describe('Fail Method', () => {
	it('enhancement is less than 15', () => {
		const expectedItem = { name: 'car', durability: 95, enhancement: 14 };
		const item = enhancer.fail({ name: 'car', durability: 100, enhancement: 14 });
		expect(expectedItem).toMatchObject(item);
	});
	it('durability is 15 or more', () => {
        const expectedItem = { name: 'car', durability: 90, enhancement: 15 };
		const item = enhancer.fail({ name: 'car', durability: 100, enhancement: 15 });
		expect(expectedItem).toMatchObject(item);
	});
	it('enhancement level is greater than 16', () => {
		const expectedItem = { name: 'car', durability: 90, enhancement: 19 };
		const item = enhancer.fail({ name: 'car', durability: 100, enhancement: 20 });
		expect(expectedItem).toMatchObject(item);
	});
});
