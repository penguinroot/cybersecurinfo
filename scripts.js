// Sélectionner les boutons et les sections
const buttons = document.querySelectorAll(".buttons button");
const sections = document.querySelectorAll(".content");

// Ajouter un écouteur d'événement pour chaque bouton
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Récupérer l'identifiant de la section à afficher
        const sectionId = button.getAttribute("data-section");

        // Masquer toutes les sections
        sections.forEach(section => section.classList.remove("active"));

        // Afficher la section correspondante
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add("active");
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM entièrement chargé !");

    // Fonction pour afficher l'écran "HACKED!"
    function showHackedScreen() {
        const hackedScreen = document.getElementById('hacked-screen');
        if (hackedScreen) {
            hackedScreen.classList.remove('hidden'); // Afficher l'écran "HACKED"
        }
    }

    // Fonction pour cacher l'écran "HACKED!"
    function hideHackedScreen() {
        const hackedScreen = document.getElementById('hacked-screen');
        if (hackedScreen) {
            hackedScreen.classList.add('hidden');
        }
    }

    // Afficher l'écran "HACKED!" après 2 secondes
    setTimeout(() => {
        showHackedScreen();

        // Afficher le message "Donnez-moi 500€" après 5 secondes
        setTimeout(() => {
            const hackedMessage = document.getElementById('hacked-message');
            if (hackedMessage) {
                hackedMessage.textContent = "Donnez-moi 500€ ou je mets vos données en ligne!";
            }
        }, 5000);
    }, 2000);

    // Action du bouton "Redémarrer l'ordinateur"
    const restartButton = document.getElementById('restart-button');
    if (restartButton) {
        restartButton.addEventListener('click', () => {
            console.log("Clic sur le bouton Redémarrer !");

            // Masquer l'écran "HACKED!"
            const hackedContent = document.getElementById('hacked-content');
            if (hackedContent) {
                hackedContent.classList.add('hidden'); // Masquer le contenu "HACKED!"
            }

            // Afficher le message de succès
            const successMessage = document.getElementById('success-message');
            if (successMessage) {
                successMessage.classList.remove('hidden'); // Afficher le message "Bravo"
            }

            // Masquer l'écran de redémarrage
            const rebootScreen = document.getElementById('reboot-screen');
            if (rebootScreen) {
                rebootScreen.classList.add('hidden');
            }

            // Rediriger vers la page principale après 3 secondes
            setTimeout(() => {
                window.location.href = "index.html"; // Rediriger vers l'écran d'accueil
            }, 3000);
        });
    }

    // Action du bouton "Payer"
    const payButton = document.getElementById('pay-button');
    if (payButton) {
        payButton.addEventListener('click', () => {
            console.log("Clic sur le bouton Payer !");
            const hackedScreen = document.getElementById('hacked-content');
            const paymentModal = document.getElementById('payment-modal');
            
            if (hackedScreen) {
                hackedScreen.classList.add('hidden'); // Masquer l'écran "HACKED"
            }

            if (paymentModal) {
                paymentModal.classList.remove('hidden'); // Afficher le modal de paiement
            }
        });
    }

    // Action pour confirmer le paiement
    const confirmPayment = document.getElementById('confirm-payment');
    if (confirmPayment) {
        confirmPayment.addEventListener('click', () => {
            console.log("Paiement confirmé !");
                        const successMessage = document.getElementById('fail-message');
                        const paymentModal = document.getElementById('payment-modal');

                        if (successMessage) {
                            successMessage.classList.remove('hidden'); // Afficher le message "Bravo"
                        }
                        if (paymentModal) {
                            paymentModal.classList.add('hidden'); // Afficher le message "Bravo"
                        }
                                    // Rediriger vers la page principale après 3 secondes
                        setTimeout(() => {
                            window.location.href = "./test.html"; // Rediriger vers l'écran d'accueil
                        }, 3000);
        });
        

    }

    // Action pour annuler le paiement
    const cancelPayment = document.getElementById('cancel-payment');
    if (cancelPayment) {
        cancelPayment.addEventListener('click', () => {
            const hackedScreen = document.getElementById('hacked-content');
            console.log("Paiement annulé !");

            if (hackedScreen) {
                hackedScreen.classList.remove('hidden'); // Masquer l'écran "HACKED"
            }
            // Masquer le modal de paiement
            const paymentModal = document.getElementById('payment-modal');
            if (paymentModal) {
                paymentModal.classList.add('hidden'); // Masquer le modal de paiement
            }
        });
    }
});
