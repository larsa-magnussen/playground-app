<template>
    <div>
        <div>
            main page
            <Counter />
        </div>
        <div>
            x: {{ x }}
            y: {{ y }}
        </div>
        <div>
            client side rendering
            <ul>
                <li v-for="user in clientsideUsers" :key="user.id">
                {{ user.name }}
                </li>
            </ul>
        </div>
        <div>
            server side rendering
            <ul>
                <li v-for="user in serversideUsers" :key="user.id">
                {{ user.name }}
                </li>
            </ul>
        </div>
        <div>
            also server side rendering
            <ul>
                <li v-for="user in shorthandUsers" :key="user.id">
                {{ user.name }}
                </li>
            </ul>
        </div>
        <div>
            server side rendering with single user and only selected values
            <ul>
                <li v-for="info in user" :key="info.value">
                    {{ info }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    // client side rendering
    const {x, y} = useMouse();
    const clientsideUsers = ref([]);

    onMounted(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => clientsideUsers.value = data);
    });

    // server side rendering
    const { data: serversideUsers } = await useAsyncData('serversideUsers', () => $fetch('https://jsonplaceholder.typicode.com/users'));

    // shorthand for the server side rendering solution
    const { data: shorthandUsers } = await useFetch('https://jsonplaceholder.typicode.com/users');

    // only select certain keys from object
    const { data: user } = await useFetch(
            'https://jsonplaceholder.typicode.com/users/1',
            { pick: ['id', 'name', 'email']}
        );

</script>