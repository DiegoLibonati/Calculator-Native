# Calculator-Native-App

## Getting Started

1. Clone the repository on your computer using: `git clone URL`.
2. Go to the APP directory.
3. Install dependencies using `npm install`.
4. If you have expo and an Android simulator installed, you can run the app with the command `npm start` and select the desired option.

- If you don't have expo and an Android simulator installed, search for a tutorial on YouTube.

## Description

This application is made with react native. It is a calculator that allows to:

- Change the theme from light to dark
- Add
- Subtract
- Multiply
- Divide
- Change from positive to negative and vice versa
- Return to 0
- Get the percentage

It is my first native application. The first of hopefully many :D

## Technologies used

1. React Native
2. Typescript
3. CSS
4. Expo

## Libraries used

1. Expo

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/15`](https://www.diegolibonati.com.ar/#/project/15)

## Video

https://user-images.githubusercontent.com/99032604/231316735-6d3a4f64-2b06-47e5-8cea-b51ba245bb0e.mp4

## Documentation

### Theme

- If you want to change any style or the entire styles of the application, you can do it through: `calculator-native-app\src\theme\theme.ts`.

### Contexts - Logic

- The UI logic is changed in the following path: `src\contexts\UIContext.tsx`.

- The Calculator logic is changed in the following path: `src\contexts\CalculatorContext.tsx`. All the mathematical operation logic is inside this context.

### General views

In general terms, the application is composed of a main component called `Main`. This component is encompassed by the context providers `UI` and `Calculator`. Inside `Main`, we will find the different `views`. The available `Views` are 3:

1. `Switch View`: It is where the Switch to change the theme is rendered.
2. `Screen View`: It is where the results of the mathematical calculations are rendered.
3. `Buttons View`: It is where the buttons to use the application are rendered.
