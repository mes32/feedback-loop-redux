
const MIN_RATING = 1;
const MAX_RATING = 5;

class Rating {
    constructor(input) {
        const newValue = parseInt(input);
        if (newValue >= MIN_RATING && newValue <= MAX_RATING) {
            this.value = newValue;
        }
    }

    isValid() {
        if (this.value) {
            return true;
        } else {
            return false;
        }
    }
}

export default Rating;