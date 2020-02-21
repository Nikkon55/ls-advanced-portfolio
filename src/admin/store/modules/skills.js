export default {
    namespaced: true,
    state: {
        skills:[]
    },
    mutations: {
        ADD_SKILL: (state, newSkill) => {
            state.skills.push(newSkill)
        },

        REMOVE_SKILL: (state, deletedSkill) => {
            state.skills = state.skills.filter(skill => skill.id !== deletedSkill.id)
            
        },
        
        EDIT_SKILL: (state, editedSkill) => {
            state.skills = state.skills.map(skill => skill.id === editedSkill.id ? editedSkill : skill);
        },
        GET_SKILLS: (state, skills) => {
            state.skills = skills
        }
    },
    actions: {
       async addSkill({commit}, skill){
           try {
               const {data} = await this.$axios.post("/skills", skill);
               commit("ADD_SKILL", data);
           } catch (error) {
            throw new Error(error.response.data.error || error.response.data.message);
           }
       },

       async removeSkill({commit}, skill){
           try {
               const {data}= await this.$axios.delete(`/skills/${skill.id}`);
               commit("REMOVE_SKILL", skill);
           } catch (error) {
               
           }
           console.log(skill);
       },
       async editSkill({commit}, editedSkill){
            try {
                const {data:{skill}}= await this.$axios.post(`/skills/${editedSkill.id}`, editedSkill);
                commit("EDIT_SKILL", skill);
            } catch (error) {
                
            }
            console.log(skill);
        },

        async getSkills({commit}){
            try {
                const {data} = await this.$axios.get("/skills/283");
                commit("GET_SKILLS", data);
                console.log(data);
            } catch (error) {
                
            }
        }

        

    }
}