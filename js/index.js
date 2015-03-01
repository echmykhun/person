/**
 * Created by Евгений on 18.02.2015.
 */
var
    PERSON_IS_CONSTRUCTOR_EXEPTION = 'Person is constructor, not a function',
    SAY_NO_TO_TRANSSEXUALS = 'No transes here!';

function Person(name, gender) {

    var personSecret = 'top secret information';

    this.getInfo = function () {
        var personInfo = this.name + ' ';
        if (personSecret) personInfo += personSecret;
        return personInfo;
    };

    this.name = name;
    Object.defineProperty(this, 'gender', {
        value: gender
    });

}

Person.prototype = {

    name: null,
    gender: null,
    constructor: Person,
    getFirstName: function () {
        if (this.name) {
            var nameArr = this.name.toString().split(' ');
            return nameArr[0];
        } else {
            return '';
        }
    },
    setFirstName: function (firstName) {
        if (this.name) {
            var nameArr = this.name.toString().split(' ');
            nameArr[0] = firstName;
            this.name = nameArr.join(' ');
        } else {
            this.name = firstName + ' ';
        }
    },
    getLastName: function () {
        if (this.name) {
            var nameArr = this.name.toString().split(' ');
            return nameArr[1];
        } else {
            return '';
        }
    },
    setLastName: function (lastName) {
        if (this.name) {
            var nameArr = this.name.toString().split(' ');
            nameArr[1] = lastName;
            this.name = nameArr.join(' ');
        } else {
            this.name = " " + lastName;
        }
    },
    greet: function () {
        console.log('My name is ' + this.name);
    }


};


function Man(name) {

    Person.apply(this, [name, 'male']);
    this.constructor = Man;

    var parentGreet = this.greet;
    this.greet = function () {
        console.log('Hi dudes');
        parentGreet.apply(this);
    };


    Object.defineProperty(this, "sex", {
        get: function () {
            return this.gender;
        },
        set: function (s) {
            throw SAY_NO_TO_TRANSSEXUALS;
        }
    });
    Object.defineProperty(this, "surName", {
        get: function () {
            if (this.name) {
                var nameArr = this.name.toString().split(' ');
                return nameArr[1];
            } else {
                return '';
            }
        },
        set: function (name) {
            if (this.name) {
                var nameArr = this.name.toString().split(' ');
                nameArr[1] = name;
                this.name = nameArr.join(' ');
            } else {
                this.name = " " + name;
            }
        }
    });



}

Man.prototype = {};
$.extend(Man.prototype, Person.prototype);


function Woman(name) {

    Person.apply(this, [name, 'female']);
    this.constructor = Woman;

    var parentGreet = this.greet;
    this.greet = function () {
        console.log('Hello everyone');
        parentGreet.apply(this);
    };

    Object.defineProperty(this, "sex", {
        get: function () {
            return this.gender;
        },
        set: function (s) {
            throw SAY_NO_TO_TRANSSEXUALS;
        }
    });
    Object.defineProperty(this, "surName", {
        get: function () {
            if (this.name) {
                var nameArr = this.name.toString().split(' ');
                return nameArr[1];
            } else {
                return '';
            }
        },
        set: function (name) {
            if (this.name) {
                var nameArr = this.name.toString().split(' ');
                nameArr[1] = name;
                this.name = nameArr.join(' ');
            } else {
                this.name = " " + name;
            }
        }
    });



}

Woman.prototype = {};
$.extend(Woman.prototype, Person.prototype);
console.log(Woman.prototype.greet);



console.log('====INHERITANCE====');
console.log('=======PRESON======');
var testPerson = new Person('Subject Zero', 'female');
console.log(testPerson.getLastName(), testPerson.getFirstName());
console.log(testPerson.name, testPerson.gender);
testPerson.gender = 'dfgbaerh';
console.log(testPerson.name, testPerson.gender);

console.log('========MAN========');
var ivan = new Man('Ivan Petrov');
console.log(ivan.getLastName(), ivan.getFirstName());
console.log(ivan.name, ivan.gender);
ivan.gender = 'dfgbaerh';
console.log(ivan.name, ivan.gender);


var peter = new Man('Petr Sidorov');
console.log(peter.getLastName(), peter.getFirstName());
console.log(peter.name, peter.gender);
peter.firstName = 'Alexy';
console.log(peter.name, peter.gender);
try {
    peter.sex = 'female';
} catch (e) {
    console.log(e);
}

console.log(ivan.name, ivan.gender);

console.log('========WOMAN======');
var janna = new Woman('Janna Petrova');
console.log(janna.getLastName(), janna.getFirstName());
console.log(janna.name, janna.gender);
janna.gender = 'dfgbaerh';
console.log(janna.name, janna.gender);

var olga = new Woman('Olga Sidorova');
console.log(olga.getLastName(), olga.getFirstName());
console.log(olga.name, olga.gender);
olga.name = 'Valentina';
console.log(olga.name, olga.gender);
console.log(janna.name, janna.gender);

console.log('===ENCAPSULATION===');
console.log(testPerson.getInfo());
console.log(ivan.getInfo());
console.log(janna.getInfo());

console.log('====POLYMORPHISM====');
testPerson.greet();
ivan.greet();
janna.greet();