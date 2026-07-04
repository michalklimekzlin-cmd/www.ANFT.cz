// 🌉 VaFiT MOST v1.0
// Spojuje UI → ENGINE → SLOT → WINDOW → APP

(function(){

/* ==============================
   CORE BRIDGE
============================== */

function bootBridge(){

    if(!window.VaFiT){
        console.warn("VaFiT engine není načten.");
        return;
    }

    console.log("🌉 Most aktivní");

}

/* ==============================
   CLICK HANDLER (NAPOJENÍ SLOTŮ)
============================== */

function handleSlotClick(slot){

    if(!slot) return;

    // 1. runtime select
    if(window.VAFIT_RUNTIME){
        window.VAFIT_RUNTIME.select(slot);
    }

    // 2. execute logika
    if(window.VAFIT_RUNTIME?.execute){
        window.VAFIT_RUNTIME.execute(slot);
    }

    // 3. UI dialog
    if(window.VaFiT?.openSlot){
        window.VaFiT.openSlot(slot, 0, 0);
    }

}

/* ==============================
   GLOBAL EXPORT
============================== */

window.VaFiT_BRIDGE = {
    boot: bootBridge,
    click: handleSlotClick
};

/* auto boot */
bootBridge();

})();
