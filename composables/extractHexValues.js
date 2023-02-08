export function extractHexValues(output) {
    let hexValues = output.split(", ").filter(item => item.includes("#")).map(item => item.trim().match(/#[A-Fa-f0-9]{6}/g)).flat();
    return hexValues;
}