// sortAlgorithms.js

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// -------------------- Selection Sort --------------------
async function selectionSortWithSteps(arr, setDataConverted, delay = 100) {
  const arrayCopy = [...arr];
  const n = arrayCopy.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arrayCopy[j] < arrayCopy[minIndex]) minIndex = j;
    }

    if (minIndex !== i) {
      [arrayCopy[i], arrayCopy[minIndex]] = [arrayCopy[minIndex], arrayCopy[i]];
    }

    setDataConverted([...arrayCopy]);
    await sleep(delay);
  }
}

// -------------------- Bubble Sort --------------------
async function bubbleSortWithSteps(arr, setDataConverted, delay = 100) {
  const arrayCopy = [...arr];
  const n = arrayCopy.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arrayCopy[j] > arrayCopy[j + 1]) {
        [arrayCopy[j], arrayCopy[j + 1]] = [arrayCopy[j + 1], arrayCopy[j]];
        setDataConverted([...arrayCopy]);
        await sleep(delay);
      }
    }
  }
}

// -------------------- Insertion Sort --------------------
async function insertionSortWithSteps(arr, setDataConverted, delay = 100) {
  const arrayCopy = [...arr];
  const n = arrayCopy.length;

  for (let i = 1; i < n; i++) {
    let key = arrayCopy[i];
    let j = i - 1;

    while (j >= 0 && arrayCopy[j] > key) {
      arrayCopy[j + 1] = arrayCopy[j];
      j--;
      setDataConverted([...arrayCopy]);
      await sleep(delay);
    }

    arrayCopy[j + 1] = key;
    setDataConverted([...arrayCopy]);
    await sleep(delay);
  }
}

// -------------------- Merge Sort --------------------
async function mergeSortWithSteps(arr, setDataConverted, delay = 100) {
  const arrayCopy = [...arr];

  async function mergeSort(array, start = 0) {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = await mergeSort(array.slice(0, mid), start);
    const right = await mergeSort(array.slice(mid), start + mid);

    let merged = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) merged.push(left[i++]);
      else merged.push(right[j++]);
    }
    while (i < left.length) merged.push(left[i++]);
    while (j < right.length) merged.push(right[j++]);

    for (let k = 0; k < merged.length; k++) {
      arrayCopy[start + k] = merged[k];
    }
    setDataConverted([...arrayCopy]);
    await sleep(delay);

    return merged;
  }

  await mergeSort(arrayCopy);
}

// -------------------- Quick Sort --------------------
async function quickSortWithSteps(arr, setDataConverted, delay = 100) {
  const arrayCopy = [...arr];

  async function quickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
      const pi = await partition(array, low, high);
      await quickSort(array, low, pi - 1);
      await quickSort(array, pi + 1, high);
    }
  }

  async function partition(array, low, high) {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
        setDataConverted([...arrayCopy]);
        await sleep(delay);
      }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    setDataConverted([...arrayCopy]);
    await sleep(delay);

    return i + 1;
  }

  await quickSort(arrayCopy);
}

// -------------------- Heap Sort --------------------
async function heapSortWithSteps(arr, setDataConverted, delay = 100) {
  const arrayCopy = [...arr];
  const n = arrayCopy.length;

  async function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      setDataConverted([...arrayCopy]);
      await sleep(delay);
      await heapify(arr, n, largest);
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(arrayCopy, n, i);
  }

  for (let i = n - 1; i >= 0; i--) {
    [arrayCopy[0], arrayCopy[i]] = [arrayCopy[i], arrayCopy[0]];
    setDataConverted([...arrayCopy]);
    await sleep(delay);
    await heapify(arrayCopy, i, 0);
  }
}

// -------------------- Export All --------------------
export {
  selectionSortWithSteps,
  bubbleSortWithSteps,
  insertionSortWithSteps,
  mergeSortWithSteps,
  quickSortWithSteps,
  heapSortWithSteps
};
