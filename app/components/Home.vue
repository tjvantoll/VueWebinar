<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Schedule an Appointment"></Label>
        </ActionBar>

        <GridLayout>
            <StackLayout>
                <DatePickerField
                    minDate="2019/04/18"
                    hint="Select a date"
                    :date="dateValue"
                    @dateChange="onDateChange"></DatePickerField>

                <TimePickerField
                    hint="Select a time"
                    :time="timeValue"
                    @timeChange="onTimeChange"></TimePickerField>

                <PickerField
                    class="location-picker"
                    pickerTitle="Select a location"
                    hint="Select a location"
                    textField="name"
                    ref="picker"
                    :items="locations">
                    <v-template>
                        <StackLayout>
                            <Label :text="item.name"></Label>
                        </StackLayout>
                    </v-template>
                </PickerField>

                <Button class="btn btn-primary" text="Submit" @tap="submit"></Button>
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                dateValue: null,
                timeValue: null,
                locations: [
                    { name: "Detroit" },
                    { name: "Lansing" },
                    { name: "Grand Rapids" }
                ]
            }
        },
        methods: {
            onDateChange(args) {
                console.log(args.value);
                this.dateValue = args.value;
            },
            onTimeChange(args) {
                console.log(args.value);
                this.timeValue = args.value;
            },

            submit() {
                if (this.dateValue === null || this.timeValue === null) {
                    alert({
                        title: "Scheduler",
                        message: "Please provide all data",
                        okButtonText: "OK"
                    });
                    return;
                }

                console.log("Location: " + this.$refs.picker.nativeView.text);
                console.log("Month selected: " + (this.dateValue.getMonth() + 1));
                console.log("Day selected: " + this.dateValue.getDate());
                console.log("Hour selected: " + this.timeValue.getHours());
                console.log("Minutes selected: " + this.timeValue.getMinutes());
            }

        }
    };
</script>

<style scoped lang="scss">
    @import '../app-variables';

    DatePickerField, TimePickerField, PickerField {
        margin: 20;
        padding: 20;
        border-width: 1;
        border-color: #d3d3d3;
    }
    DatePickerField { margin-top: 25; }
    TimePickerField, PickerField { margin-top: 0; }

    .btn {
        background-color: #ff5747;
        padding: 20;
        font-size: 18;
        border-radius: 5;
    }

    .location-picker Label {
        padding: 20;
    }
</style>

