module.exports = {
	success,
	fail,
	repair,
	get,
};

//first commit

function success(item) {
	return {
		...item,
		enhancement: item.enhancement >= 20 ? item.enhancement : ++item.enhancement,
	};
}

function fail(item) {
	return {
		...item,
		durability: item.enhancement < 15 ? (item.durability -= 5) : (item.durability -= 10),
		enhancement: item.enhancement >= 16 ? item.enhancement-- : item.enhancement,
	};
}

function repair(item) {
	return { ...item, durability: 20 };
}

function get(item) {
	return { ...item };
}
