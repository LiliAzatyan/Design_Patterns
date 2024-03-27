class SortStrategy {
  sort(data) {
    throw new Error('This method should be overridden');
  }
}

class BubbleSort extends SortStrategy {
  sort(data) {
    console.log('Sorting using Bubble Sort');
  }
}

class QuickSort extends SortStrategy {
  sort(data) {
    console.log('Sorting using Quick Sort');
  }
}

class InsertionSort extends SortStrategy {
  sort(data) {
    console.log('Sorting using Insertion Sort');
  }
}

class SelectionSort extends SortStrategy {
  sort(data) {
    console.log('Sorting using Selection Sort');
  }
}

class SortContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  sort(data) {
    return this.strategy.sort(data);
  }
}

const data = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const context = new SortContext(new BubbleSort());
context.sort(data.slice()); 
context.setStrategy(new SelectionSort());
context.sort(data.slice());
