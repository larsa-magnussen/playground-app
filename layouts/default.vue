<template>
    <Title>
        {{ title }}
    </Title>
    <div class="bg-gray-700 min-h-screen text-purple-400">
        <nav class="bg-gray-800 shadow text-purple-300 px-6 py-2">
            <div class="container mx-auto flex items-center justify-between px-6">
                <div class="h-16">
                    <NuxtLink to="/">
                        <img class="max-h-full" src="../images/logo.png" alt="logo">
                    </NuxtLink>
                </div>
                <div>
                    <ul class="flex space-x-12">
                        <li>
                            <NuxtLink to="/">
                                Home
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about">
                                About
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/contact">
                                Contacts
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <slot />
    </div>
</template>

<script setup>
    const title = useState('title', () => 'sykt kul app!!!');
</script>

<style>
    .router-link-active {
        font-weight: bold;
    }
</style>