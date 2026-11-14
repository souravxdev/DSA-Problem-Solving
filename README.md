<div align="center">

# DSA & Problem Solving

My daily journey of learning **Data Structures, Algorithms and Problem Solving** with TypeScript and JavaScript.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

![Problems Solved](https://img.shields.io/badge/Problems%20Solved-33-blue?style=flat-square)
![Days](https://img.shields.io/badge/Day-12-orange?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/souravxdev/DSA-Problem-Solving?style=flat-square)

</div>

---

## About

I practise problem solving every day and document each problem with its statement, approach, complexity and solution. This repository tracks that progress, from the basics up to advanced data structures and algorithms.

## Progress

| Topic | Solved |
|-------|:------:|
| [Basics](problems/basics/README.md) | 6 |
| [Arrays](problems/arrays/README.md) | 6 |
| [Math](problems/math/README.md) | 3 |
| [Two Pointers](problems/two-pointers/README.md) | 3 |
| [LeetCode](leetcode/README.md) | 15 |
| **Total** | **33** |

Each topic links to its own list of problems with solutions. See the day-by-day log in [PROGRESS.md](PROGRESS.md).

## Notes

Concept notes from what I learn along the way.

| # | Note | Topic |
|---|------|-------|
| 01 | [Time and Space Complexity](notes/fundamentals/01-time-and-space-complexity) | Fundamentals |

## Repository Structure

```
.
├── problems/            # Solutions grouped by topic
│   └── basics/
│       └── 01-sum-of-two-integers/
│           ├── README.md     # Problem, approach, complexity
│           ├── problem.png   # Problem statement
│           ├── solution.ts   # TypeScript solution
│           └── solution.js   # JavaScript solution
├── leetcode/            # LeetCode problems grouped by topic
│   └── arrays/
│       └── 0414-third-maximum-number/
│           ├── README.md     # Link, summary, approach, complexity
│           ├── solution.ts
│           └── solution.js
├── notes/               # Concepts and learnings, grouped by topic
│   └── fundamentals/
│       └── 01-time-and-space-complexity/
│           ├── README.md     # Concept, patterns, quiz recap
│           ├── lesson/       # Lesson screenshots
│           └── quiz/         # Quiz screenshots
├── PROGRESS.md          # Daily log
├── package.json
└── tsconfig.json        # Strict TypeScript config
```

## Running a Solution

Requires [Node.js](https://nodejs.org).

```bash
git clone https://github.com/souravxdev/DSA-Problem-Solving.git
cd DSA-Problem-Solving
npm install

# TypeScript
npm run solve problems/basics/01-sum-of-two-integers/solution.ts

# JavaScript
node problems/basics/01-sum-of-two-integers/solution.js

# Type-check every solution
npm run typecheck
```

## Connect

If you find this repository useful, consider giving it a ⭐

[![GitHub](https://img.shields.io/badge/GitHub-souravxdev-181717?style=flat-square&logo=github)](https://github.com/souravxdev)
