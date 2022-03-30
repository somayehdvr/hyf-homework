const meals = ['pizza', 'soup', 'bread with cheese']
const meal = () => {
    return meals[Math.floor(Math.random() * meals.length)]
}

module.exports = meal;