<script>
    // import Todos from './Todos.svelte';
    import Profile from "./Profile.svelte";
    import { auth } from "./firebase";
    import {
        signInWithPopup,
        GoogleAuthProvider,
        onAuthStateChanged,
        signOut,
    } from "firebase/auth";
    import { authState } from "rxfire/auth";
import Todos from "./Todos.svelte";
    let user;
    const provider = new GoogleAuthProvider();

    onAuthStateChanged(auth, (u) => {
        if (u) {
            user = u;
        } else {
            u = null;
        }
    });

    function login() {
        signInWithPopup(auth, provider);
    }
</script>

<section>
    {#if user}
        <Profile {...user} />
        <button on:click={() => signOut(auth)} class="button">Logout</button>
        <hr />
        <Todos uid={user.uid} />
    {:else}
        <button on:click={login} class="button"> Signin with Google </button>
    {/if}
</section>

<style>
    section {
        background: rgb(235, 235, 235);
        padding: 20px;
    }
</style>
