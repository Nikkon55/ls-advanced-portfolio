import Vue from 'vue';

const skill = {
    template: "#skill",
    props: ["skillName","skillLevel"],
    mounted(){
        const circle = this.$refs["gradient-circle"];
        const animationDelay = this.$refs["gradient-circle"].style.animationDelay;
        circle.style.animationDelay = this.skillLevel
    }
}

const skillsRow = {
    template: "#skills-row",
    components: {
        skill
    },
    props: ["skill"]
}

new Vue ({
    el: "#skills-component",
    template: "#skills-list",
    data(){
        return {
            skills:[]
        }
    },
    components: {
        skillsRow
    },
    created() {
        const data = require("../data/skills.json")
        this.skills = data;
    }
})