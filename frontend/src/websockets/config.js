export default {
	// TODO: make configurable
	url: `${getProtocol()}://${window.location.hostname}:${window.location.port}`
	// url: 'ws://192.168.178.52:8088'
};

function getProtocol() {
	if (window.location.protocol === 'https') {
		return 'wss';
	} else {
		return 'ws';
	}
}
