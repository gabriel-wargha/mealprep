import { index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.jsx'), // "/"
	route('recipes/:id', 'routes/recipe.jsx'), // "/recipes/5"
	route('saved', 'routes/saved.jsx'), // "/saved"
	route('login', 'routes/login.jsx'), // "/login"
	route('signup', 'routes/signup.jsx'), // "/signup"
];
