//function to push interactions to the timeline array
const pushToTimeline = (who, what, when) => {
    timeline.push(
        {
            who,
            what,
            when
        }
    )
}