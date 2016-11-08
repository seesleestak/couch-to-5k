// Play timer
function playTimer(isPlay) {
    return {
        type: "PLAY_TIMER",
        isPlay
    }
}

// Pause timer
function pauseTimer(isPlay) {
    return {
        type: "PAUSE_TIMER",
        isPlay
    }
}

// Reset Day
function resetDay(reset) {
    return {
        type: "RESET_DAY",
        reset
    }
}

// Option change
function optionsChange(optionId, optionStatus) {
    return {
        type: "OPTION_CHANGE",
        optionId,
        optionStatus
    }
}
