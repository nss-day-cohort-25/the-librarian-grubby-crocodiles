const timeStamp = () => {
    // Create a date object with the current time
  let now = new Date();

  // Create an array with the current month, day and time
    let date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
  
  // Create an array with the current hour, minute and second
    let time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
  
  // Determine AM or PM suffix based on the hour
    let suffix = ( time[0] < 12 ) ? "AM" : "PM";
  
  // Convert hour from military time
    time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
  
  // If hour is 0, set it to 12
    time[0] = time[0] || 12;
  
  // If seconds and minutes are less than 10, add a zero
    for ( let i = 1; i < 3; i++ ) {
      if ( time[i] < 10 ) {
        time[i] = "0" + time[i];
      }
    }
  
  // Return the formatted string
    return date.join("/") + " " + time.join(":") + " " + suffix;
  }

