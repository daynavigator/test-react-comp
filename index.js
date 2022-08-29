export default customFunction = (input) => {
    const [a, b] = input.split(' ').map(Number);
    return a + b;
}