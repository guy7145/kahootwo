<script>
	import './pages/Home.svelte';
import Home from './pages/Home.svelte';
	export let name;
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>
<Home/>
