/**
 * Enables toggle functionality for Carentries style solution blocks contained 
 * within an element with nbis_carpentries in its class attribute
 */

(function() {

    function toggleSolutionBlock(solutionBlock) {
        const h2_or_h3 = new RegExp('h2|h3','i');
        const firstChild = solutionBlock.children[0];
            
        if(h2_or_h3.test(firstChild.tagName)) {
            const otherChildren = [];
            for(var i=1; i<solutionBlock.children.length; i++) {
                otherChildren.push(solutionBlock.children[i])
            }
            otherChildren.forEach(function(child){
                child.classList.add('nbis_hidden');
            });
            const expandIndicator = document.createElement('span');
            expandIndicator.classList.add('fold-unfold');
            expandIndicator.classList.add('glyphicon');
            expandIndicator.classList.add('glyphicon-collapse-down');
            firstChild.append(expandIndicator);

            firstChild.onclick=function() {
                if(expandIndicator.classList.contains('glyphicon-collapse-down')){
                    otherChildren.forEach(function(child){
                        child.classList.remove('nbis_hidden');
                    });
                    expandIndicator.classList.remove('glyphicon-collapse-down');
                    expandIndicator.classList.add('glyphicon-collapse-up');
                } else {
                    otherChildren.forEach(function(child){
                        child.classList.add('nbis_hidden');
                    });
                    expandIndicator.classList.remove('glyphicon-collapse-up');
                    expandIndicator.classList.add('glyphicon-collapse-down');
                }
                
            }

        }
    }

    function waitForCanvasPageRender(wrapperElementId) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(function(el) {
                        if(el.querySelectorAll) {
                            el.querySelectorAll(".nbis_carpentries .solution").forEach(toggleSolutionBlock)
                        }
                    });
                }
            });
        });
        
        const elem = document.getElementById(wrapperElementId);
        if(elem) {
            observer.observe(elem, {
                attributes: false,
                childList: true,
                subtree: true,
                characterData: false
            });
        }
    }

    waitForCanvasPageRender("content-wrapper");

})();
