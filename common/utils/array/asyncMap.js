export const asyncMap = async (arr, asyncFn) => {
	return Promise.all(arr.map((item, i) => asyncFn(item, i)));
};
