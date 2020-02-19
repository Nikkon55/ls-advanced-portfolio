export default {
    namespaced: true,
    actions: {
       async addSkill({commit}, skill){
           try {
               const {data} = await this.$axios.post("/skills", skill);
               commit("categories/ADD_SKILL", data, {root:true});
           } catch (error) {
            throw new Error(error.response.data.error || error.response.data.message);
           }
       },

       async removeSkill({commit}, skill){
           try {
               const {data}= await this.$axios.delete(`/skills/${skill.id}`);
               commit("categories/REMOVE_SKILL", skill, {root:true});
           } catch (error) {
               
           }
           console.log(skill);
       },
       async editSkill({commit}, editedSkill){
            try {
                const {data:{skill}}= await this.$axios.post(`/skills/${editedSkill.id}`, editedSkill);
                commit("categories/EDIT_SKILL", skill, {root:true});
            } catch (error) {
                
            }
            console.log(skill);
        },

        async deleteCategory({ commit }, categoryId) {
            try {
              const response = await this.$axios.delete(`/categories/${categoryId}`);
              commit("categories/DELETE_CATEGORY", categoryId);
              return response;
            } catch {
              
            }
        },

        async editCategory({ commit }, editedCategory) {
            try {
              const response = await this.$axios.post(`/categories/${editedCategory.id}`, editedCategory);
              commit("categories/UPDATE_CATEGORY", response.data.category);
              return response;
            } catch (e) {
              
            }
          },

    }
}