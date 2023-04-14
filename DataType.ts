// Array & Tuple

let student: [number, string, boolean][] = [
  [1, 'Mister P', true],
  [2, 'Mister A', false]
]
console.log(student)
student.push([3, 'Mister B', true])
console.log(student)

// Enum

enum WorkStatus {
  Task = 1,
  Working,
  Done
}

console.log(WorkStatus.Done)
