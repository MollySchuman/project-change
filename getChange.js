(() => {

    // Construct a program that will make change for a given dollar amount in cents using the fewest number of coins
    function getChange(change, coinArray) {

        let correctChange = {};

        coinArray.forEach(coin => {
            if (change >= coin) {
                correctChange[coin] = Math.floor(change / coin);
                change = change % coin;
            }
        });
        
        return correctChange;
    };

    console.log(getChange(72,[25,10,5,1]));

    if (typeof exports !== 'undefined') {
        module.exports = {
            getChange
        };
    }
})();