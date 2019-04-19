import Vue from "nativescript-vue";
import DateTimePicker from "nativescript-datetimepicker/vue";
import PickerField from 'nativescript-picker/vue';

Vue.use(PickerField);
Vue.use(DateTimePicker);

import Home from "./components/Home";

var vue = new Vue({
    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();

vue.use(PickerField);
