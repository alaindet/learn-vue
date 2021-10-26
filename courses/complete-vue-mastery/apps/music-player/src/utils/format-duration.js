/**
 * Formats time durations. Accepts milliseconds by default, can accept seconds
 * or microseconds as lengthOfSecond
 *
 * Ex.:
 * formatDuration(3785, 'hh:mm:ss', 1), // 01:03:05
 * formatDuration(3785, 'hh:mm:ss', 1000), // 00:00:04
 * formatDuration(3785, 'hhH mmM ssS', 1), // 01H 03M 05S
 *
 * @param duration
 * @param oneSecond
 * @returns
 */
export default (totalDuration, format = 'hh:mm:ss', lengthOfSecond = 1000) => {
  const durations = {};
  let temp = totalDuration / lengthOfSecond;
  durations.h = Math.floor(temp / 3600);
  temp -= durations.h * 3600;
  durations.m = Math.floor(temp / 60);
  temp -= durations.m * 60;
  durations.s = temp;

  let result = format;

  ['h', 'm', 's'].forEach((unit) => {
    const regex = new RegExp(`${unit}{1,}`, 'g');
    const matched = result.match(regex);
    if (matched) {
      const [replaceThis] = matched;
      const unitDuration = durations[unit].toFixed(0).toString();
      const withThis = unitDuration.padStart(replaceThis.length, '0');
      result = result.replace(replaceThis, withThis);
    }
  });

  return result;
};
