function graduatesCount(scores) {
    lulus = []
    bedon = []

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 75) {
            lulus.push(scores[i])
        } else {
            bedon.push(scores[i])
        }
    }
    if (scores.length == 0) {
        return 'Data Kosong'
    } else if (scores.length == lulus.length) {
        return `Semua orang lulus`
    } else if (scores.length == bedon.length) {
        return 'Tidak ada yang lulus'
    } else {
        return `${lulus.length} orang lulus`
    }

}



// Test cases

console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(graduatesCount([100, 100, 74, 60, 87])); // 3 orang lulus
console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(graduatesCount([])); // Data kosong
