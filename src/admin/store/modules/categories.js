export default {
    namespaced: true,
    state: {
        categories:[]
    },
    mutations:{
        SET_CATEGORIES: (state, data) => state.categories = data,
        ADD_CATEGORY: (state, category) => state.categories.push(category),
        DELETE_CATEGORY: (state, deletedCategoryId) => {
            state.categories = state.categories.filter(
                category => category.id !== deletedCategoryId
            );
          },
        
        EDIT_CATEGORY: (state, editedCategory) => {
        state.categories = state.categories.map(category => {
            return category.id === editedCategory.id ? editedCategory : category;
        });
        },  
        ADD_SKILL: (state, newSkill) => {
            state.categories = state.categories.map(category=>{
                if(category.id===newSkill.category){
                    category.skills.push(newSkill);
                }
                return category;
            })
        },

        REMOVE_SKILL: (state, deletedSkill) => {
            state.categories = state.categories.map(category=>{
                if(category.id===deletedSkill.category){
                    category.skills = category.skills.filter(skill => skill.id !== deletedSkill.id)
                }

                return category;
            })
        },
        EDIT_SKILL: (state, editedSkill) => {
            const editSkillInCategory = category => {
                category.skills= category.skills.map(skill=>{
                    return skill.id ==editedSkill.id ? editedSkill : skill;
                })
            };

            const findCategory = category => {
                if (category.id==editedSkill.category) {
                    editSkillInCategory(category);
                }
            

                return category;
            }
        }
    },
    actions:{
        async addCategory({commit}, title){
            try {
               const {data} = await this.$axios.post("./categories", {title: title});
               commit("ADD_CATEGORY", data);
               
            } catch (error) {
                throw new Error(error.response.data.error || error.response.data.message);
            }
        },
        async fetchCategories({commit}){
            try {
               const {data} = await this.$axios.get("/categories/283");
               commit("SET_CATEGORIES", data);
               console.log(data)
            } catch (error) {
                
            }
        },
        
    }

};