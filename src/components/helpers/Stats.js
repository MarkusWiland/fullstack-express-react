const fetchTotalGames = async (setTotalGames) => {

    try {

        const url = '/api/stats/total';
        const response = await fetch(url);
        const total = await response.json();
        await setTotalGames(total);

    } catch (err) {

        console.error(err)

    }
}
const fetchMatchup = async (setMatchup) => {

    try {

        const url = '/api/games';
        const response = await fetch(url);
        const matchup = await response.json();
        await setMatchup(matchup);

    } catch (err) {

        console.error(err)

    }
}
const fetchTopHamsters = async (setTopFive) => {

    try {

        const url = '/api/charts/top';
        const response = await fetch(url);
        const json = await response.json();
        await setTopFive(json);

    } catch (err) {

        console.error(err)

    }
}

const fetchBottomHamsters = async (setBottomFive) => {

    try {

        const url = '/api/charts/bottom';
        const response = await fetch(url);
        const json = await response.json();
        await setBottomFive(json);

    } catch (err) {

        console.error(err)

    }
}

export { fetchTotalGames, fetchMatchup, fetchTopHamsters, fetchBottomHamsters };