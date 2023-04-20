<template>
    <div style="display: flex; align-items: center; justify-content: center; height: 100vh;">
        <div style="text-align: center;">
            <h1>Vue SSG Application</h1>
            <p>a dummy application that is pre rendered and stored on the server (generated) and rehydrates on the client.</p>
            <p>Counter: {{ count }}</p>
            <button @click="count++">Increase</button>
            <button @click="count--">Decrease</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            count: 1
        }
    },
}
</script>