function getRandomNumber() {
    return Math.floor(Math.random() * 101) * (Math.random() < 0.5 ? 1 : -1);
}

function generate2DArray(rows, cols) {
    const array = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(getRandomNumber());
        }
        array.push(row);
    }
    return array;
}

function findRowWithMinNumber(array) {
    let min = Infinity;
    let minRowIndex = -1;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] < min) {
                min = array[i][j];
                minRowIndex = i;
            }
        }
    }
    return minRowIndex;
}

function findMinPositiveNumber(row) {
    let minPositive = Infinity;
    for (const num of row) {
        if (num > 0 && num < minPositive) {
            minPositive = num;
        }
    }
    return minPositive === Infinity ? 'нет' : minPositive;
}

function minReplacements(row) {
    let count = 0;
    for (let i = 0; i < row.length - 2; i++) {
        if (row[i] > 0 && row[i + 1] > 0 && row[i + 2] > 0) {
            count++;
            i += 2;
        } else if (row[i] < 0 && row[i + 1] < 0 && row[i + 2] < 0) {
            count++;
            i += 2;
        }
    }
    return count;
}

function formatRow(row, minPositive, replacements, isMinRow) {
    const rowString = row.join(' ');
    const rowLabel = isMinRow ? '*' : ' ';
    return `${rowLabel} [${rowString}] | Наименьшее положительное: ${minPositive} | Минимальные замены: ${replacements}`;
}

function main() {
    const rows = 10;
    const cols = 10;
    const array = generate2DArray(rows, cols);
    const minRowIndex = findRowWithMinNumber(array);

    console.log("Сгенерированный массив:");
    for (let i = 0; i < array.length; i++) {
        const minPositive = findMinPositiveNumber(array[i]);
        const replacements = minReplacements(array[i]);
        const rowString = formatRow(array[i], minPositive, replacements, i === minRowIndex);
        console.log(rowString);
    }
}

main();
