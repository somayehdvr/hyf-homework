const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];

  function logOutSeriesText() {
    // write code here
    const lifeSpan = 80 * 365 * 24 * 60
    let totalSeriesTime = 0

    for(let i = 0; i < seriesDurations.length; i++){
      let percentage = (seriesDurations[i].days * 24 * 60) + (seriesDurations[i].hours * 60) + seriesDurations[i].minutes
      percentage = (percentage * 100) / lifeSpan
      console.log(seriesDurations[i].title + " took " + percentage.toFixed(4) + " of my life/n")
      totalSeriesTime += percentage.toFixed(4)
    }

    console.log(`In total that is ${totalSeriesTime}% of my life`)
    
    return
  }
  
  logOutSeriesText(); /* logs out:
  Game of thrones took 0.01% of my life
  Sopranos took 0.012% of my life
  The Wire took 0.007% of my life
  
  In total that is 0.2% of my life */