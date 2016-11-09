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

// Day change
export function dayChange(dayId) {
    return {
        type: "DAY_CHANGE",
        dayId
    }
}

// Reset Day
export function resetDay(dayId) {
    return {
        type: "RESET_DAY",
        dayId
    }
}

// Option change
export function optionsChange(optionId, optionStatus) {
    return {
        type: "OPTION_CHANGE",
        optionId,
        optionStatus
    }
}
