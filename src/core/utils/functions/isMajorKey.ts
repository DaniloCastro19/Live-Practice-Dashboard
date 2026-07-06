export default function isMajorKey(key: string): boolean {
  const majorKeys = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
];
  return majorKeys.includes(key);
}