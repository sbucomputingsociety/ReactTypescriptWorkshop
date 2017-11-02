import {PizzaTypes} from './PizzaTypes'
import {CheeseLevels} from './CheeseLevels';
import {SauceTypes} from './SauceTypes'
import {Meats, NonMeats} from './Toppings'

export default interface Pizza {
	type: PizzaTypes,
	cheese: CheeseLevels,
	sauce: SauceTypes,
	toppings: [Meats|NonMeats]
}