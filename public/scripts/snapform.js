// ##############################
// >>>>>>>| snapform.js |<<<<<<<<
// ##############################

window.addEventListener("load", function() {

    // get user form
    const userFields = this.document.getElementById("userFields");
    const content = this.document.getElementsByTagName("main")[0];
    const ribbon = this.document.getElementById("banner");

    // Aligns form to center
    function alignCenter() {

        // Center form relative to viewport if there is enough room to display the whole thing
        if ((userFields.clientHeight < content.clientHeight - ribbon.clientHeight) && (userFields.clientWidth <= content.clientWidth)) {
            if (!userFields.classList.contains("align-center")) {
                userFields.classList.add("align-center");
            }

        // Allow content to be scrollable if smaller than viewport
        } else {
            if (userFields.classList.contains("align-center")) {
                userFields.classList.remove("align-center");
            }
        }
    }

    alignCenter();

    this.window.addEventListener("resize", function() {
        alignCenter();
    });
});