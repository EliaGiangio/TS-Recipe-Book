export default function emoji(x: string): string {
    if (x.toLowerCase() === 'meat') {
        return String.fromCodePoint(0x1F969) + ' ' + x.toUpperCase() + ' ' + String.fromCodePoint(0x1F357);
    } else if (x.toLowerCase() === 'veg') {
        return String.fromCodePoint(0x1F96C) + ' ' + x.toUpperCase() + ' ' + String.fromCodePoint(0x1F336);
    } else if (x.toLowerCase() === 'fruit') {
        return String.fromCodePoint(0x1F349) + ' ' + x.toUpperCase() + ' ' + String.fromCodePoint(0x1F34C);
    } else {
        return String.fromCodePoint(0x1F956) + ' ' + x.toUpperCase() + ' ' + String.fromCodePoint(0x1F95A);
    }
}