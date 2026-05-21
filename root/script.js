
//    <!-- JAVASCRIPT FOR MODAL -->
  
        const modal = document.getElementById("photoLibraryModal");

        function openModal() {
            modal.style.display = "flex";
        }

        function closeModal() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        }
  
