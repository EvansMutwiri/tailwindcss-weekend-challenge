<template>
    <section class="what-can-we-offer bg-orange text-white ">
        <div class="container mx-auto py-6 space-y-4">
            <h1 class="font-extrabold text-2xl rounded-md text-white mt-4">Help Us 24/7</h1>
            <h2 class="text-white text-4xl tracking-normal font-semibold sm:text-4xl md:text">What Can We Offer for Your
                Business</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatum?</p>
            <ul class="list-disc pl-6 font-extrabold text-2xl rounded-md text-white mt-4">
                <li>65 Street, Brooklyn, NY</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, adipisci.</li>
                <li>+123 45 678</li>
            </ul>

            <div class="text-black md:flex bg-white px-8 py-8 rounded-3xl items-center">
                <div class="w-full lg:w-2/5">
                    <h1 class="font-extrabold text-3xl rounded-md text-black">Get Free Advice</h1>
                    <p class="text-muted text-center md:text-left lg:pr-20">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Nulla, vel!</p>
                </div>

                <div
                    class="lg:flex justify-between lg:space-x-4 space-y-4 lg:space-y-0 bg-grey py-8 px-8 rounded-3xl w-full lg:w-3/5">
                    <div>
                        <input type="text" placeholder="Enter your Name"
                            class="w-full xl:w-64 placeholder:text-sm p-4 rounded-full" ref="myinput">
                    </div>
                    <div>
                        <input type="text" placeholder="Enter a valid email address"
                            class="w-full xl:w-64 placeholder:text-sm p-4 rounded-full">
                    </div>
                    <div class="rounded-md flex justify-center items-center">
                        <a href="#"
                            class="transform transition duration-500 hover:bg-hover-green w-full flex items-center justify-center px-6 py-4 border border-transparent text-sm font-semibold text-black bg-green md:px-10 antialiased rounded-full">
                            Submit
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
const myinput = ref(null)

        onMounted(() => {
            myinput.value.focus();
        });
</script>