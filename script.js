function setup() {
    createCanvas(1000, 600);
    background(200);
    textSize(20);
    textAlign(CENTER, CENTER);

    let labels = [];

    function drawSquare(x, y, color, label) {
        fill(color);
        square(x, y, 50);
        fill("black");
        text(label, x+25, y+25);
        labels.push(label);
    }

    let matrixA = [
            [1, 2, 3],
            [8, 9, 10],
            [15, 16, 17]
        ];

    drawSquare(20, 20, "#00FF00", matrixA[0][0]);
    drawSquare(80, 20, "#D9D2E9", matrixA[0][1]);
    drawSquare(140, 20, "#6D9EEB", matrixA[0][2]);

    drawSquare(20, 80, "#999999", matrixA[1][0]);
    drawSquare(80, 80, "#8E7CC3", matrixA[1][1]);
    drawSquare(140, 80, "#F1C232", matrixA[1][2]);

    drawSquare(20, 140, "#EA9999", matrixA[2][0]);
    drawSquare(80, 140, "#93C47D", matrixA[2][1]);
    drawSquare(140, 140, "#D9D9D9", matrixA[2][2]);

    // PLUS
    fill("#D9D9D9");
    rect(250, 40, 40, 120);
    rect(210, 80, 120, 40);

    let matrixB = [
        [5, 6, 7],
        [12, 13, 14],
        [19, 20, 21]
    ]

    drawSquare(350, 20, "#FF00FF", matrixB[0][0]);
    drawSquare(410, 20, "#E69138", matrixB[0][1]);
    drawSquare(470, 20, "#E06666", matrixB[0][2]);

    drawSquare(350, 80, "#C9DAF8", matrixB[1][0]);
    drawSquare(410, 80, "#FFD966", matrixB[1][1]);
    drawSquare(470, 80, "#EA9999", matrixB[1][2]);

    drawSquare(350, 140, "#FCE5CD", matrixB[2][0]);
    drawSquare(410, 140, "#E06666", matrixB[2][1]);
    drawSquare(470, 140, "#D0E0E3", matrixB[2][2]);

    // EQUAL
    fill("#D9D9D9");
    rect(550, 50, 120, 40);
    rect(550, 110, 120, 40);

    // C Matrix
    let matrixC = [];

    for (let i = 0; i < matrixA.length; i++) {
        matrixC[i] = []; // Create a row for matrixC
        for (let j = 0; j < matrixA[i].length; j++) {
            matrixC[i][j] = matrixA[i][j] + matrixB[i][j]; // Add corresponding elements
        }
    }


    drawSquare(690, 20, "#FFD966", matrixC[0][0]);
    drawSquare(750, 20, "#E69138", matrixC[0][1]);
    drawSquare(810, 20, "#990000", matrixC[0][2]);

    drawSquare(690, 80, "#163EF5", matrixC[1][0]);
    drawSquare(750, 80, "#A64D79", matrixC[1][1]);
    drawSquare(810, 80, "#F39200", matrixC[1][2]);

    drawSquare(690, 140, "#C9DAF8", matrixC[2][0]);
    drawSquare(750, 140, "#E69138", matrixC[2][1]);
    drawSquare(810, 140, "#990000", matrixC[2][2]);
    
}
