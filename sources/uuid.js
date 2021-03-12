
/**
 *
 */

function salt () {
	return Math.random().toString(36).substring(2, 18)
}

/**
 *
 */

function uuid () {
	const now = Date.now().toString(36)
	const salt1 = salt()
	const salt2 = salt()
	const uuid64 = `X${salt1}Y${now}Z${salt2}X`
	const uuid32 = uuid64.substr(0, 32).toUpperCase()
	return uuid32
}

/**
 *
 */

module.exports = uuid
