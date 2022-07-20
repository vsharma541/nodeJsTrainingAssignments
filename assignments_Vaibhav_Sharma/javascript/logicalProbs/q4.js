function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'H' : 'T';
}
function main() {
    let flips = Number(process.argv[2]);
    let headsCount = 0;
    for(let i=0; i<flips; i++) {
        if(coinFlip() === 'H') headsCount++;
    }
    console.log('no of flips = ', flips);
    console.log('Fraction of heads = ', (headsCount/flips));
}
main();