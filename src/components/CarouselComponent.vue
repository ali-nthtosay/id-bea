<template>
    <v-carousel height="950" show-arrows="hover" cycle hide-delimiter-background>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet height="100%" style="background: transparent;">
                <div class="d-flex fill-height justify-center align-end"
                    :style="{ backgroundImage: `url(${images[i]})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
                    <!--
                    
                     <div class="white--text text-shadow responsive-text" style="
                text-align: center;
                padding: 10px 20px;
                background: white;
                border-radius: 10px;
                margin-bottom: 5%;
              ">
                        {{ slide }}


                    </div>
                    
-->
                </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {

    data() {
        return {

            images: [
                '/carousel/image_3.jpg',

                '/carousel/image_5.jpg',
                '/carousel/image13.jpg',
                '/carousel/image_11.jpg',
                '/carousel/image_10.jpg'
            ],
            slides: [

                'Welcome to Luxury Nails – Your Personal Haven of Elegance',
                'Explore our exquisite nail art collections',
                'Relax and rejuvenate with our premium spa treatments',
                'Experience the finest manicure and pedicure services',
                'Let your nails shine with our custom designs',

            ],
        };
    },
};
</script>

<style scoped>
html,
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    /* Disable horizontal scrolling */
}

/* Text shadow for better visibility */
.text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

/* Responsive text sizes */
.responsive-text {
    font-size: 2rem;
    /* Default size for larger screens */
}

@media (max-width: 768px) {
    .responsive-text {
        font-size: 1.5rem;
        /* Adjust for medium screens */
    }
}

@media (max-width: 480px) {
    .responsive-text {
        font-size: 1.2rem;
        /* Adjust for smaller screens */
    }
}
</style>
