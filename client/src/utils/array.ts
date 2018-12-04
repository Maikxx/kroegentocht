// https://stackoverflow.com/questions/24020709/generate-an-array-that-adds-up-to-specific-value-using-only-2-numbers
export const getArrayOfRandomNumbersWhichEqual = (maxTotal: number) => {
    let sum = 0
    const numbers = []

    while (sum < maxTotal) {
        const num = Math.floor((Math.random() * 2) + 4)
        if (sum + num > maxTotal) {
            numbers.push(1)
            sum += 1
        } else {
            numbers.push(num)
            sum += num
        }
    }

    return numbers
}

export const times = (length: number) => {
    return Array.from({ length }, (_, x) => x)
}
