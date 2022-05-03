<script>
    import TodoItem from './TodoItem.svelte';
    import { db } from './firebase';
    import { collection, query, where, getDocs, addDoc, updateDoc} from 'firebase/firestore';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';
import { writable } from 'svelte/store';

    // User ID passed from parent
    export let uid;

    // Form Text
    let text = 'some task';
    let todos = writable([]);

    // Query requires an index, see screenshot below
    async function getTodos() {
        let todosQuery = query(collection(db, 'todos'), where("uid", "==", uid));
        // todos = await getDocs(todosQuery);
    }

    function add() {
        addDoc(collection(db, 'todos'), {
            uid, text, complete: false, created: Date.now()
        })
        text = '';
    }

    // function updateStatus(event) {
    //     const { id, newStatus } = event.detail;
    //     updateDoc(({ complete: newStatus });
    // }

    // function removeItem(event) {
    //     const { id } = event.detail;
    //     db.collection('todos').doc(id).delete();
    // }
</script>

<style>
    input { display: block }
</style>

<ul>
	{#each $todos as todo}

        <TodoItem {...todo} />
        <!-- <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} /> -->
        
	{/each}
</ul>


<input bind:value={text}>

<button on:click={add}>Add Task</button>