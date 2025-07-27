# Cubist – A Rubik’s Cube Scrambler, Timer & Visualizer

[Live site](https://kaskapa.github.io/Cubist/public/)

Cubist is a minimal Rubik’s Cube tool with scramblers, a timer, and a basic visualizer — originally intended as a **modern alternative to [cstimer.net](https://cstimer.net/)**.

The project started ambitious, but only the **core scrambling and timing features** are implemented.

## Features
* **Scramble Generator**
  Supports: 2×2 to 7×7 cubes
  Generates valid WCA-style scrambles for each cube size
* **Scramble Visualizer**
  See how each scramble looks in a 3D-style graphic
* **Timer**
  Press space to start/stop solves
  Simple history + calculation of:

  * Average of 5 (Ao5)
  * Average of 12 (Ao12)

## Planned (but not done... yet)
* **Solve Analyzer**
  I built this separately — here’s the solver engine:
  * [Rubik’s-Cube-Solver-CPP (C++)](https://github.com/Kaskapa/Rubiks-Cube-Solver-CPP)
  * [Rubik’s-cube-solver-3x3 (Python)](https://github.com/Kaskapa/Rubiks-cube-solver-3x3)

  This would analyze a solve (moves, efficiency, cross, F2L, etc.)
* Session saving, stats tracking, proper UI/UX, mobile support

## Tech Stack
* **HTML + JavaScript** — pure and simple, no frameworks
* **Tailwind CSS** — utility-first styling
* **Canvas / DOM-based visualizer**


## Why it exists

cstimer.net is great but bloated, janky, and visually outdated.
Cubist was my attempt to:

* Make it cleaner and faster
* Add features like solve analysis (via my C++/Python engines)
* Build something minimal, offline-capable, and usable

But time is short, so it’s a half-done prototype — still useful as a fast scramble/timer tool. I use it on a daily basis when practicing speedsolving.
