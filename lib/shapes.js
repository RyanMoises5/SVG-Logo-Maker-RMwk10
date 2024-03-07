class shape {
    constructor(setColor) {
        this.setColor = setColor;
    }
};

class triangle extends shape {
    constructor() {
        super();

    };

};

class square extends shape {
    constructor() {
        super();

    };
};

class circle extends shape {
    constructor() {
        super();

    };
};

module.exports = shape

// // from video example:
// <svg version="1.1" width="300" height="200" xmlns="https://www.w3.org/2000/svg">

//     <circle cx="150" cy="100" r="80" fill="green" />

//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>