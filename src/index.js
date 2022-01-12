// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length == 0) {
        return [];
    }
    let res = [];
    matrix.map((key, index) => {
        let arr = [];
        index % 2 == 0 ? (arr = key) : (arr = key.reverse());
        arr.map((key) => {
            res.push(key);
        });
    });
    return res;
};
