function findMinimumPlatforms(arr, dep) {
  const convertTime = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 100 + minutes;
  };

  const arrival = arr.map(convertTime).sort((a, b) => a - b);
  const departure = dep.map(convertTime).sort((a, b) => a - b);

  let platformNeeded = 0;
  let maxPlatforms = 0;

  let i = 0;
  let j = 0;

  while (i < arrival.length && j < departure.length) {
    if (arrival[i] <= departure[j]) {
      platformNeeded++;
      i++;
    } else {
      platformNeeded--;
      j++;
    }
    maxPlatforms = Math.max(maxPlatforms, platformNeeded);
  }

  return maxPlatforms;
}

const arr = ["9:00", "9:40"];
const dep = ["9:10", "12:00"];

console.log(`Minimum platforms required: ${findMinimumPlatforms(arr, dep)}`);
