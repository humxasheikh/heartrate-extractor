const extractHeartRates = (logString: string): number[] => {
  const heartRatePattern = /HeartRate\s*=\s*([^\s;|]+)/gi;

  return Array.from(logString.matchAll(heartRatePattern))
    .map((match) => (match[1] ? parseInt(match[1], 10) : NaN))
    .filter((value) => !isNaN(value));
};

// Test cases
console.log('=== Test Case 1: Original ===');
const input1 =
  'LOG_01: HeartRate=72bpm; STATUS=OK | LOG_02: HeartRate= 85 ; STATUS=WARN | LOG_03: HeartRate=error; STATUS=FAIL';
console.log('Input:', input1);
console.log('Output:', extractHeartRates(input1));
console.log('Expected: [72, 85]\n');

console.log('=== Test Case 2: Mixed units and formats ===');
const input2 =
  'LOG_01: HeartRate=120BPM | LOG_02: HeartRate=95 | LOG_03: HeartRate=88beats';
console.log('Input:', input2);
console.log('Output:', extractHeartRates(input2));
console.log('Expected: [120, 95, 88]\n');

console.log('=== Test Case 3: Empty and invalid values ===');
const input3 =
  'LOG_01: HeartRate=; STATUS=OK | LOG_02: HeartRate=N/A | LOG_03: HeartRate=102';
console.log('Input:', input3);
console.log('Output:', extractHeartRates(input3));
console.log('Expected: [102]\n');
