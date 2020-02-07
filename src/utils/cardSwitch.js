var redux = require('.././images/Redux.png');
var react = require('.././images/React.png');
var css = require('.././images/Css.png');
var javascript = require('.././images/Javascript.png');
var node = require('.././images/NodeJs.png');
var python = require('.././images/python.png');
var git = require('.././images/Git.png');
var json = require('.././images/json.png');
var yarn = require('.././images/Yarn.png');
var heroku = require('.././images/Heroku.png');
var npm = require('.././images/Npm.png');

export const cardSwitch = ticket => {

    switch (ticket.request_category) {
        case 1:
            return {
                topic : "JavaScript",
                // font : "#f0db4f",
                picture : javascript,
            }
        case 2:
            return {
                topic : "CSS",
                font : "#264de4",
                // color : "#FFFFFF",
                picture : css,
            }
        case 3:
            return {
                topic : "Node",
                color : "#3C873A",
                picture : node,
                
            }
        case 4:
            return {
                topic : "React",
                font : "#61DBFB",
                picture : react,
            }
        case 5:
            return {
                topic : "Redux",
                font : "#764abc",
                picture : redux,
            }
        case 6:
            return {
                topic : "{JSON}",
                picture : json,
            }
        case 7:
            return {
                topic : "Python",
                font : "#306998",
                // font : "#FFD43B",
                picture : python,
            }
        case 8:
            return {
                topic : "Git",
                font : "#F1502F",
                // color : "3E2C00",
                picture : git,
            }
        case 9:
            return {
                topic : "Postman",
                color : "#FFFFFF",
                font : "#EF5B25"
            }
        case 10:
            return {
                topic : "Yarn",
                font : "#1F88B6",
                // color : "#FFFFFF",
                picture : yarn,
            }
        case 11:
            return {
                topic : "Library Installation",
                font : "#CC0000",
                // color : "#FFFFFF",
                picture : npm,
            }
        case 12:
            return {
                topic : "App Deployment",
                font : "black",
                // color : "#FFFFFF",
                picture : heroku
            }
    }
}