export function formatBytes(bytes: number): string {
	if (bytes < 0) {
		throw new Error("Size in bytes cannot be negative");
	}
	let newBytes = bytes;
	const units = ["B", "KB", "MB", "GB", "TB", "PB"];
	let index = 0;
	while (newBytes >= 1024 && index < units.length - 1) {
		newBytes /= 1024;
		index++;
	}
	return `${newBytes.toFixed(2)} ${units[index]}`;
}
