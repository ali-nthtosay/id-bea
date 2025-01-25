<template>
    <div class="beautysalon-container">
        <div class="row">
            <div class="image-container-one">
                <img src="/carousel/salon1.jpg" alt="Bild 1 Beschreibung" class="image" />
            </div>
            <div class="image-container-two">
                <img src="/carousel/salon2.jpg" alt="Bild 2 Beschreibung" class="image" />
                <div>
                    <img src="/carousel/salon4.jpg" alt="image3" class="image3">
                </div>
            </div>
            <div class="text-container">
                <h1>Ihr Beautysalon in Berlin – Schönheit trifft Kompetenz</h1>

                <p>
                    In unserem Studio steht Ihre Zufriedenheit an erster Stelle. Wir wissen, wie wichtig es ist, sich
                    auf die Qualität und Sicherheit der angebotenen Dienstleistungen verlassen zu können. Daher möchten
                    wir Ihnen versichern, dass wir höchste Hygienestandards einhalten und unser Team regelmäßig
                    weiterbilden.
                    <br>

                    <br>
                    Die Gesundheit unserer Kundinnen liegt uns am Herzen. Deshalb durchlaufen unsere Werkzeuge einen
                    sorgfältigen dreistufigen Sterilisationsprozess: <br>
                    1. Desinfektion: Entfernung von sichtbaren Verunreinigungen und Reduzierung von Keimen. <br>
                    2. Reinigung: Gründliche Säuberung zur Beseitigung aller Rückstände. <br>
                    3. Sterilisation: Abtötung aller Mikroorganismen durch hohe Temperaturen. <br> <br>

                    Dieser Prozess gewährleistet, dass Sie sich bei uns stets in sicheren Händen wissen.

                    Ständige Weiterbildung für höchste Qualität
                    <br><br>

                    Um Ihnen stets die neuesten Techniken und Trends bieten zu können, nehmen unsere Fachkräfte alle
                    sechs Monate an Weiterbildungen teil. So stellen wir sicher, dass Sie von den besten Händen betreut
                    werden.

                    Warum wir die richtige Wahl für Sie sind <br>
                    • Höchste Hygienestandards: Ihre Gesundheit steht für uns an erster Stelle. <br>
                    • Kompetentes Team: Stetige Schulungen garantieren exzellente Ergebnisse. <br>
                    • Individuelle Beratung: Wir gehen auf Ihre Wünsche ein und setzen sie professionell um. <br>

                    Gönnen Sie sich eine Auszeit und lassen Sie sich von uns verwöhnen. Vereinbaren Sie noch heute einen
                    <br>
                    Termin und erleben Sie den Unterschied! <br> <br>

                    Weil Sie es sich wert sind
                </p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "BeautysalonComponent"
};
</script>

<style scoped>
.beautysalon-container {
    margin: 40px 0;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    /* Fills 40% of viewport height */
}

.row {
    display: flex;
    width: 85%;
    /* Row occupies 65% of the page width */
    align-items: stretch;
    gap: 30px;
    /* Optional spacing between items */
}

.image3 {
    width: 400px;
    height: 400px;
    bottom: 0;
    left: -300px;
    position: absolute;
    border-radius: 10px;
}

.image-container {
    flex: 0 0 25%;
    /* Each image-container gets 25% of the row's width */
}

.image-container-one {
    padding-bottom: 50px;
}

.image-container-two {
    position: relative;
    padding-top: 100px;
}

.text-container {
    flex: 0 0 45%;
    /* The text-container gets 50% of the row's width */
    padding: 25px;
    /* Add padding for spacing */
    background-color: #f9f9f9;
    /* Subtle light background for contrast */
    border-radius: 10px;
    /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* Softer, slightly larger shadow */
    font-family: 'Roboto', sans-serif;
    /* Modern, clean font */
    line-height: 1.8;
    /* Improved line spacing for readability */
    color: #333;
    /* Neutral text color for good contrast */
}

.text-container h1 {
    font-size: 2rem;
    /* Larger, eye-catching title */
    font-weight: 700;
    /* Bold for emphasis */
    color: #2c3e50;
    /* Darker shade for the heading */
    margin-bottom: 20px;
    /* Space below the heading */
}

.text-container h2 {
    font-size: 1.5rem;
    /* Subheading slightly smaller than h1 */
    font-weight: 600;
    /* Semi-bold for distinction */
    color: #34495e;
    /* Complementary dark color */
    margin-top: 25px;
    /* Space above the subheading */
    margin-bottom: 15px;
    /* Space below the subheading */
    border-bottom: 2px solid #ddd;
    /* Adds a subtle underline effect */
    padding-bottom: 5px;
}

.text-container p {
    font-size: 1rem;
    /* Standard paragraph size */
    margin-bottom: 15px;
    /* Space between paragraphs */
    color: #555;
    /* Softer gray for the text */
}

.text-container a {
    color: #3498db;
    /* Blue links */
    text-decoration: none;
    /* Remove underline */
    font-weight: 500;
    /* Slightly bold links */
}

.text-container a:hover {
    text-decoration: underline;
    /* Add underline on hover */
}

.image {
    width: 100%;
    /* Ensures images fill their containers */
    height: 800px;
    /* Maintain aspect ratio */
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
    .row {
        display: flex;
        flex-direction: column;
        /* Stack elements vertically */
        width: 85%;
        /* Adjust width for smaller screens */
    }

    .text-container h1 {
        font-size: 1.5rem;
    }

    .text-container h2 {
        font-size: 1.2rem;
    }

    .text-container p {
        font-size: 0.9rem;
    }

    .text-container {
        flex-grow: 3;
    }

    .image-container-two {
        display: none;

        /* Hide for very small screens */
    }

    .image-container-one {
        flex-grow: 1;
        /* Hide for very small screens */
    }

    .image3 {
        display: none;
    }

}
</style>