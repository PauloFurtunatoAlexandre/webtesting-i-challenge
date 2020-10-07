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
		enhancement: item.enhancement >= 20 ? item.enhancement : item.enhancement++,
	};
}

function fail(item) {
	return { ...item };
}

function repair(item) {
	return { ...item, durability: 20 };
}

function get(item) {
	return { ...item };
}
