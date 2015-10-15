var $ = require('jquery');

class Popup{
    constructor(name){
        this.name = name;
        console.log('body: ', $('body'));
    }
}

export default Popup;