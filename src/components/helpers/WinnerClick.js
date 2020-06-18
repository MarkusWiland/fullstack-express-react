export const postHamster = async (winningHamster) => {
    try {
        const url = '/api/battle'
        const opponent = winningHamster === hamster1 ? hamster2 : hamster1;

        const matchGame = {
            id: Math.ceil(Math.random() * 99999999),
            contestants: { winningHamster, opponent },
            winner: winningHamster,
        }
        await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(matchGame)
        })
        setShowWinner(true)
        setMatch(matchGame)
    }
    catch (err) {
        console.error(err)
    }
}
