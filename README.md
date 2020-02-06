This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Set Up
 Create a forked copy of this project.

 Clone your OWN version of the repository in your terminal
 
 Download project dependencies by running yarn install

 Start up the app using yarn start

## Project Description

Students at lambda school need a place where they can escalate their concerns and receive help. This app allows an admin to manage help desk tickets that come in from Lambda School Students. It also allows students (A 2nd user type) to submit a help desk ticket, categorize it and post it to the help channel.

## MVP

Two user types: Student and Helper

- As a student I want to log in and have the ability to see tickets that are currently open for help. 
- As a student I want to be able to create a new help ticket with a title, description, what I've tried and a category (i.e. React).
- As a helper I want to be able to login and see a list of open tickets. - As a helper I want to be able to assign a ticket to myself by clicking a "help student" button. 
- As a helper I want to be able to mark the ticket as "resolved", or re-assign the ticket back to the queue if I cannot resolve the ticket.

## Stretch

Build an integrated slack-bot that allows students to submit help tickets through slack. Allow the ability to subscribe to the Queue in slack to be notified if someone opens a ticket. 

Make it so a user can be both a student and a helper.