/**
 * Created by Евгений on 18.02.2015.
 */
var
    PERSON_IS_CONSTRUCTOR_EXEPTION = 'Person is constructor, not a function',
    SAY_NO_TO_TRANSSEXUALS = 'No transes here!';

function Person(name, gender) {

    if (!(this instanceof Person)) {
        throw PERSON_IS_CONSTRUCTOR_EXEPTION
    }

    this.name = name;
    Object.defineProperty(this, 'gender', {
        value: gender
    });

}

Person.prototype = {

    constructor: Person,

    get firstName() {
        var nameArr = this.name.toString().split(' ');
        return nameArr[0];
    },
    set firstName(firstName) {
        var nameArr = this.name.toString().split(' ');
        nameArr[0] = firstName;
        this.name = nameArr.join(' ');
    },
    get lastName() {
        var nameArr = this.name.toString().split(' ');
        return nameArr[1];
    },
    set lastName(lastName) {
        var nameArr = this.name.toString().split(' ');
        nameArr[1] = lastName;
        this.name = nameArr.join(' ');
    }


};


function Man(name) {

    Person.apply(this, [name, 'male']);

    this.constructor = Man;
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
            var nameArr = this.name.toString().split(' ');
            return nameArr[1];
        },
        set: function (name) {
            var nameArr = this.name.toString().split(' ');
            nameArr[1] = name;
            this.name = nameArr.join(' ');
        }
    });

}
Man.prototype = Object.create(Person.prototype);
Man.prototype.getName = function () {
    return this.name;
};
Man.prototype.setName = function (n) {
    this.name = n;
};

function Woman(name) {

    Person.apply(this, [name, 'female']);

    this.constructor = Woman;
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
            var nameArr = this.name.toString().split(' ');
            return nameArr[1];
        },
        set: function (name) {
            var nameArr = this.name.toString().split(' ');
            nameArr[1] = name;
            this.name = nameArr.join(' ');
        }
    });

}
Woman.prototype = Object.create(Person.prototype);
Woman.prototype.getName = function () {
    return this.name;
};
Woman.prototype.setName = function (n) {
    this.name = n;
};


var ivan = new Man('Ivan Petrov');
console.log(ivan.lastName, ivan.firstName);
console.log(ivan.name, ivan.gender);
ivan.gender = 'dfgbaerh';
console.log(ivan.name, ivan.gender);


var peter = new Man('Petr Sidorov');
console.log(peter.lastName, peter.firstName);
console.log(peter.name, peter.gender);
peter.firstName = 'Alexy';
console.log(peter.name, peter.gender);
try {
    peter.sex = 'female';
} catch (e) {
    console.log(e);
}


console.log(ivan.name, ivan.gender);

var janna = new Man('Janna Petrova');
console.log(janna.lastName, janna.firstName);
console.log(janna.name, janna.gender);
ivan.gender = 'dfgbaerh';
console.log(janna.name, janna.gender);

var olga = new Man('Olga Sidorova');
console.log(olga.lastName, olga.firstName);
console.log(olga.name, olga.gender);
olga.name = 'Valentina';
console.log(olga.name, olga.gender);
console.log(janna.name, janna.gender);