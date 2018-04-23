//function to push interactions to the timeline array
const pushToTimeline = (who, what) => {
    const date = timeStamp()
    timeline.push(
        {
            who,
            what,
            when: date
        }
    )
}