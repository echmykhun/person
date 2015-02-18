/**
 * Created by Евгений on 18.02.2015.
 */
var
    PERSON_IS_CONSTRUCTOR_EXEPTION = 'Person is constructor, not a function';

function Person(name, gender) {

    if (!(this instanceof Person)) {
        throw PERSON_IS_CONSTRUCTOR_EXEPTION
    }

    this.name = name;
    this.gender = gender;

}

Person.prototype = {

    constructor: Person,
    get firstName(){
        var nameArr = this.name.toString().split(' ');
        return nameArr[0];
    },
    set firstName(firstName){
        var nameArr = this.name.toString().split(' ');
        nameArr[0] = firstName;
        this.name = nameArr.join(' ');
    },
    get firstName(){
        var nameArr = this.name.toString().split(' ');
        return nameArr[0];
    },
    set firstName(firstName){
        var nameArr = this.name.toString().split(' ');
        nameArr[0] = firstName;
        this.name = nameArr.join(' ');
    }


};