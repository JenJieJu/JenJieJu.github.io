<style lang="scss" scoped>
.home {
    text-align: center;

    .box {
        line-height: 32px;
        padding: 20px;


    }

    #time,
    #time2 {
        display: inline-block;
    }
}
</style>
<template>
    <div class="home">
        <div class="box">
            <div id="time" class="aa"></div>
        </div>
        <div><span id="value"></span></div>
        <div class="box">
            <div id="time2" class="aa"></div>
        </div>
        <div><span id="value2"></span></div>
    </div>
</template>
<script>
import jTimePicker from 'j-time-picker'

export default {
    data() {
        return {}
    },
    created() {

        this.$nextTick(() => {
            var timePicker = new window.jTimePicker('#time', {
                defaultValue: new Date('2018-10-01'),
                defaultValues: [new Date('2018-10-01'), new Date()],
                onChange: function(v) {
                    console.log('onChange', timePicker)
                    document.getElementById('value').innerHTML = '<div><div>' + timePicker.data.value + '</div><div>' + timePicker.data.startDate + '-' + timePicker.data.endDate + '</div></div>';
                },
                isRange: true
            });

            var timePicker2 = new window.jTimePicker('#time2', {
                defaultValue: new Date('2018-10-01'),
                defaultValues: [new Date('2018-10-01'), new Date()],
                onChange: function(v) {
                    console.log('onChange', timePicker2)
                    document.getElementById('value2').innerHTML = '<div><div>' + timePicker.data.value + '</div><div>' + timePicker.data.startDate + '-' + timePicker.data.endDate + '</div></div>';
                },
                isRange: false
            });


            console.log(timePicker)

        })



    },
    mounted() {},
    activated() {}
}
</script>