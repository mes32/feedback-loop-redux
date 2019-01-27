
const MIN_RATING = 1;
const MAX_RATING = 5;

// Represents the rating scale 1, 2, 3, 4, 5
class Rating {
    constructor(input) {
        const newValue = parseInt(input);
        if (newValue >= MIN_RATING && newValue <= MAX_RATING) {
            this.value = newValue;
        }
    }

    // Returns true if the current value is defined and usable 
    isValid() {
        if (this.value) {
            return true;
        } else {
            return false;
        }
    }
}

export default Rating;