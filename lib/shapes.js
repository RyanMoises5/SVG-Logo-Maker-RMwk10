class Shape {
    constructor() {
        this.color = '';
    }

    setColor(colorChoice) {
        this.color = colorChoice
    }
};

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="#${this.color}" />`
    }
};

class Square extends Shape {
    render() {
        return `<rect width="150" height="150" x="75" y="25" fill="#${this.color}" />`;
    }
};

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="#${this.color}" />`;
    }
};

module.exports = { Triangle, Square, Circle }