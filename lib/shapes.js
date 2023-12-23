class Square {
    constructor(color) {
        this.x = "75";
        this.y = "25";
        this.width = "150";
        this.height = "150";
        this.color = color
    }
    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" stroke="${this.color}" fill="${this.color}"/>`
    }
}

class Circle {
    constructor(color) {
        this.cx = "150";
        this.cy = "100";
        this.r = "75";
        this.color = color;
    }
    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" stroke="${this.color}" fill="${this.color}"/>`
    }
}

class Triangle {
    constructor(color) {
        this.points = "150, 18 244, 182 56, 182";
        this.color = color;
    }
    render() {
        return `<polygon points="${this.points}" stroke="${this.color}" fill="${this.color}"/>`
    }
}

module.exports = {
    Square, 
    Circle, 
    Triangle
};