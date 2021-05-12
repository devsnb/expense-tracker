import { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
	{
		title: 'Car Insurance',
		amount: 294.64,
		date: new Date(2019, 2, 28),
		id: 'e1'
	},
	{ title: 'New TV', amount: 799.95, date: new Date(2021, 2, 28), id: 'e2' },
	{
		title: 'Toilet paper',
		amount: 94.64,
		date: new Date(2021, 2, 28),
		id: 'e3'
	},
	{ title: 'Grocery', amount: 164.44, date: new Date(2020, 2, 28), id: 'e4' }
]

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
	const addExpenseHandler = expense => {
		setExpenses(prevExp => [expense, ...prevExp])
	}

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	)
}

export default App
