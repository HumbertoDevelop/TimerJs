const d = document;

d.addEventListener("DOMContentLoaded", (e) => {

    const btn_start = d.querySelector("#start");
    const btn_pause = d.querySelector("#pause");
    const btn_reset = d.querySelector("#reset");
    const inp_hour = d.querySelector("#hour");
    const inp_minute = d.querySelector("#minute");
    const inp_sec = d.querySelector("#sec");


    // Init
    init("00", "00", "00");

    // Listener btns

    btn_start.addEventListener("click", () => {


        // remove display
        btn_start.style.display = "none";
        start_count();
    })

    btn_reset.addEventListener("click", () => {


        // remove display
        btn_start.style.display = "block";
        reset_count();
    })

    // Functions

    function start_count() {
        get_hour();
        // get_minute();
        // get_sec();
console.log(get_hour());
        if (get_hour() === false) {
            
        }


    }

    function reset_count() {
        inp_hour.value = "00";
        inp_minute.value = "00";
        inp_sec.value = "00";
    }

    function get_hour() {
        // Transform string to number
        let var_hour = parseInt(inp_hour.value);
        if (var_hour > 0 < var_hour < 25) {
            let i = setInterval(() => {
                inp_hour.value = var_hour;
                var_hour--;

                if (var_hour === 0) {
                    inp_hour.value = "00";
                    clearInterval(i);

                    return false;
                }
                return true;

            }, 1000);
        } else {
            return false;
        }
    }

    function get_minute() {
        // Transform string to number
        let var_minute = parseInt(inp_minute.value);
        if (var_minute > 0 && var_minute < 61) {
            let i = setInterval(() => {
                inp_minute.value = var_minute;
                var_minute--;

                if (var_minute === 0 && get_hour() === false) {
                    inp_minute.value = "00";
                    clearInterval(i);

                    return false;
                } else if (var_minute === 0 && get_hour() === true) {
                    get_hour();
                    return true;
                }
                return true;


            }, 1000);
        } else {

            return false;
        }
    }

    function get_sec() {
        // Transform string to number
        let var_sec = parseInt(inp_sec.value);
        if (var_sec > 0 && var_sec < 61) {

            switch (get_minute()) {
                case get_minute() === true:
                    console.log("true");
                    break;
                    
                    
                    case get_minute() === false:
                        console.log("false");
                    break;
            
                default:
                    break;
            }
            // let i = setInterval(() => {
            //     inp_sec.value = var_sec;
            //     var_sec--;
            //     get_minute();

            //     if (var_sec === 0 && get_minute === false) {

                    
            //             return false;

            //     } else if (var_sec === 0 && get_minute() === false) {
            //         inp_sec.value = "00";
            //         clearInterval(i);

            //         return false;
            //     }


            // }, 1000);
        } else {

            return false;
        }
    }

    function init(h, m, s) {

        inp_hour.value = h;
        inp_minute.value = m;
        inp_sec.value = s;


    }

})