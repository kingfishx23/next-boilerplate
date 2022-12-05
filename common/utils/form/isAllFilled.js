export function isAllFilled(initialValues, formik) {
	return Object.keys(initialValues).every(
		(v) =>
			formik.values[v] !== '' && formik.values[v] !== false && !formik.errors[v]
	);
}
