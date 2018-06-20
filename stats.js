const getAverage = (series, weekdays=false) => {
    if (weekdays) {
		let weekSums = [0, 0, 0, 0, 0, 0, 0];
		let weekI = [0, 0, 0, 0, 0, 0, 0];
		let weekAvg = [0, 0, 0, 0, 0, 0, 0];
		for (let i = 0; i < series.length; i++) {
			let index = series[i].date.getDay();
			weekI[index]++;
			weekSums[index] += series[i].visits;
		}
		for (let i = 0; i < 7; i++) {
			if (weekI[i] == 0) {
				weekAvg[i] = 0;
			} else {
				weekAvg[i] = weekSums[i] / weekI[i];
			}
		}
		let returnObj = {
			Monday: { averageVisits: weekAvg[1] },
			Tuesday: { averageVisits: weekAvg[2] },
			Wednesday: { averageVisits: weekAvg[3] },
			Thursday: { averageVisits: weekAvg[4] },
			Friday: { averageVisits: weekAvg[5] },
			Saturday: { averageVisits: weekAvg[6] },
			Sunday: { averageVisits: weekAvg[0] }
		};
		
		return returnObj;
	} else {
		let totalSum = 0;
		for (let i = 0; i < series.length; i++) {
			totalSum += series[i].visits;
		}
		let returnObj = { averageVisits: (totalSum / series.length) };
		
		return returnObj;
	}	
};

module.exports = getAverage;


let oneWeek = [
    { date: new Date('2018-01-01'), visits: 32 },
    { date: new Date('2018-01-02'), visits: 82 },
    { date: new Date('2018-01-03'), visits: 74 },
    { date: new Date('2018-01-04'), visits: 35 },
    { date: new Date('2018-01-05'), visits: 54 },
    { date: new Date('2018-01-06'), visits: 64 },
    { date: new Date('2018-01-07'), visits: 44 },
  ];
let twoWeek = [
    { date: new Date('2018-01-08'), visits: 21 },
    { date: new Date('2018-01-09'), visits: 77 },
    { date: new Date('2018-01-10'), visits: 79 },
    { date: new Date('2018-01-11'), visits: 45 },
    { date: new Date('2018-01-12'), visits: 61 },
    { date: new Date('2018-01-13'), visits: 74 },
    { date: new Date('2018-01-14'), visits: 34 },
  ];
let weeks = oneWeek.concat(twoWeek);


console.log(getAverage(weeks));
console.log(getAverage(oneWeek));
console.log(getAverage(oneWeek, true));
