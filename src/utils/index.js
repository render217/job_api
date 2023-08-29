export function getElapsedTimeString(dateString) {
    const givenDate = new Date(dateString);
    const currentDate = new Date();
    
    // Calculate the time difference in milliseconds
    const timeDiff = currentDate - givenDate;
    
    // Convert milliseconds to seconds, minutes, hours, and days
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    
    // Generate the human-readable time string
    if (days < 1) {
      if (hours < 1) {
        if (minutes < 1) {
          return "Just now";
        }
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
      }
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (days === 1) {
      return "Yesterday";
    } else if (days < 30) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (months < 12) {
      return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
      return `${years} year${years > 1 ? 's' : ''} ago`;
    }
  }