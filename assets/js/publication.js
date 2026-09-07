var TRANSITION_MS = 400;

function toggleVisibility(id) {
    var element = document.getElementById(id);

    // First click: element still has the inline display:none from HTML
    if (element.style.display === 'none') {
        element.dataset.open    = 'false';
        element.style.display       = '';
        element.style.overflow      = 'hidden';
        element.style.maxHeight     = '0px';
        element.style.paddingTop    = '0px';
        element.style.paddingBottom = '0px';
        element.style.marginTop     = '0px';
        element.style.marginBottom  = '0px';
        element.style.transition    = 'max-height ' + TRANSITION_MS + 'ms ease-in-out, ' +
                                      'padding '    + TRANSITION_MS + 'ms ease-in-out, ' +
                                      'margin '     + TRANSITION_MS + 'ms ease-in-out';

        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                openElement(element);
            });
        });
        return;
    }

    if (element.dataset.open === 'true') {
        closeElement(element);
    } else {
        openElement(element);
    }
}

function openElement(element) {
    element.dataset.open        = 'true';
    element.style.paddingTop    = '';
    element.style.paddingBottom = '';
    element.style.marginTop     = '';
    element.style.marginBottom  = '';
    element.style.maxHeight     = element.scrollHeight + 'px';

    // After the animation completes, lift the max-height cap so any child
    // that expands later (e.g. a "Main idea" box) is never clipped
    setTimeout(function () {
        if (element.dataset.open === 'true') {
            element.style.maxHeight = 'none';
        }
    }, TRANSITION_MS);
}

function closeElement(element) {
    element.dataset.open = 'false';

    // If max-height is 'none', CSS cannot interpolate to 0 — set it to the
    // current rendered height first, force a reflow, then animate to 0
    if (!element.style.maxHeight || element.style.maxHeight === 'none') {
        element.style.maxHeight = element.scrollHeight + 'px';
        element.getBoundingClientRect(); // trigger reflow so transition has a start value
    }

    element.style.maxHeight     = '0px';
    element.style.paddingTop    = '0px';
    element.style.paddingBottom = '0px';
    element.style.marginTop     = '0px';
    element.style.marginBottom  = '0px';
}
