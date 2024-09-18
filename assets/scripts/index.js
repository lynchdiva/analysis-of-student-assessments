'use strict';

const amountStudents = 12;

const grades = createGrades(amountStudents);
const averageGrade = calcAverageGrade(grades);
const maxGrade = calcMaxGrade(grades);
const minGrade = calcMinGrade(grades);
const amountStudentsHighGrades = calcStudentsWithHighGrades(grades);
const amountStudentsLowGrades = calcStudentsWithLowGrades(grades);
const letterGrades = reformedGradesToLetters(grades);

document.querySelector('#grades').textContent = `Оценки: ${grades.join(', ')}`;

document.querySelector(
  '#averageGrade'
).textContent = `Средний балл студентов: ${averageGrade}`;

document.querySelector(
  '#maxGrade'
).textContent = `Максимальный балл: ${maxGrade}`;

document.querySelector(
  '#minGrade'
).textContent = `Минимальный балл: ${minGrade}`;

document.querySelector(
  '#amountStudentsHighGrades'
).textContent = `Количество студентов, получивших положительную оценку: ${amountStudentsHighGrades}`;

document.querySelector(
  '#amountStudentsLowGrades'
).textContent = `Количество студентов, получивших отрицательную оценку: ${amountStudentsLowGrades}`;

document.querySelector(
  '#letterGrades'
).textContent = `Буквенные оценки: ${letterGrades.join(', ')}`;

function createGrades(amountOfStudents) {
  const grades = [];
  const getRandomGrade = () => Math.floor(Math.random() * 100) + 1;

  for (let i = 0; i < amountOfStudents; i++) {
    grades.push(getRandomGrade());
  }

  return grades;
}

function calcAverageGrade(grades) {
  if (grades.length === 0) return 0;

  const sum = grades.reduce((sum, current) => sum + current, 0);

  return Math.trunc(sum / grades.length);
}

function calcMaxGrade(grades) {
  if (grades.length === 0) return 0;

  return grades.reduce(
    (max, current) => (max = max > current ? max : current),
    grades[0]
  );
}

function calcMinGrade(grades) {
  if (grades.length === 0) return 0;

  return grades.reduce(
    (min, current) => (min = min < current ? min : current),
    grades[0]
  );
}

function calcStudentsWithHighGrades(grades) {
  const highGrades = grades.filter(grade => grade >= 60);

  return highGrades.length;
}

function calcStudentsWithLowGrades(grades) {
  const lowGrades = grades.filter(grade => grade < 60);

  return lowGrades.length;
}

function reformedGradesToLetters(grades) {
  return grades.map(grade => {
    if (grade >= 80) {
      return 'A';
    } else if (grade >= 60) {
      return 'B';
    } else if (grade >= 40) {
      return 'C';
    } else if (grade >= 20) {
      return 'D';
    } else {
      return 'E';
    }
  });
}
