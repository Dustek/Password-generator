# Password - Generator

## Overview

The purpose of this project is to create a javascript code that generates a random password, with customisable length and character types included based on user specification

## Background

The project builds upon previous Javascript knowledge and incorporates concepts such as objects, object key pairs and functions to create an interactive and practical tool

## Usage

To use the project, simply open the HTML file and press the "generate password button", then follow the prompts to complete password generation

## Creation Process

The project code consists of several functions which were provided in the starter code. I used these functions to structure my work:

Firstly, The getPasswordOptions function prompts user for length and which character types to include using prompt and confirm functions. It also validates for data input and gives user feedback if unaceptable data is inputted, such as password length smaller than 8 or selecting no character types. It then stores the answers as keys inside an object.

Secondly, the function getRandom is simply used to get a random selection from an array

Thirdly, the function generatePassword creates the password based on user input earlier in the code. Firstly, it combines all the character type arrays selected into one array. It then creates an empty string, and runs a for loop, which adds characters based on length selected, selecting them from the combined array randomly.

Finally, the writePassword function displays the password to the user,

## Acknowledgements

I would like to give credit to my instructor, Abdul, as well as all the TA's and fellow students who have helped me learn how to complete this project.

## Link to website:

https://dustek.github.io/Password-generator/
