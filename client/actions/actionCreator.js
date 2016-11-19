// Play timer
export function playTimer(isPlay) {
    return {
        type: "PLAY_TIMER",
        isPlay
    }
}

// Pause timer
export function pauseTimer(isPlay) {
    return {
        type: "PAUSE_TIMER",
        isPlay
    }
}

// Set active day
export function setActive(index) {
    return {
        type: "SET_ACTIVE",
        index
    }
}

// Reset day
export function resetDay(dayId) {
    return {
        type: "RESET_DAY",
        dayId
    }
}

// Option change
export function optionsChange(optionId) {
    return {
        type: "OPTION_CHANGE",
        optionId
    }
}
