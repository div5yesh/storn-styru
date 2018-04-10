import { h, render, Component } from 'preact';

class Styru{
    constructor(){
        console.log("Styru Init");
    }
}

global._styru = new Styru;