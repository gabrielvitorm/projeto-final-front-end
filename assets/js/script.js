document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('SOS_ENCHENTES').addEventListener('click', function(event) {
        event.preventDefault(); // Evita que o link execute sua ação padrão
        location.reload(); // Recarrega a página
    });
});