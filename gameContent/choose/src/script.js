import {game} from '../../../src/Game.js';
import * as OuterModule from '../../../src/function.js';
import * as MyModule from './function.js';

window.addEventListener("DOMContentLoaded", () => {
    $(".character *").on("click", (character) => {
        sessionStorage.setItem("Character", character.target.className);

        $(".character").css("display", "none");
        $(".chooseCharacter").attr("src", "../../asset/imgs/" + character.target.className + ".png");
        $(".chooseMessageScreen").css("display", "flex");

        $(".chooseClose").on('click', () => {        
            $(".character").css("display", "flex");
            $(".chooseMessageScreen").css("display", "none");
        })

        $(".chooseCheck").on('click', () => {
            
        })
    })
})