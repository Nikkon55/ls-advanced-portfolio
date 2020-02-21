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

        async deleteCategory({ commit }, categoryId) {
            try {
              const response = await this.$axios.delete(`/categories/${categoryId}`);
              commit("DELETE_CATEGORY", categoryId);
              return response;
            } catch {
              
            }
        },

        async editCategory({ commit }, editedCategory) {
            try {
              const response = await this.$axios.post(`/categories/${editedCategory.id}`, editedCategory);
              commit("UPDATE_CATEGORY", response.data.category);
              return response;
            } catch (e) {
              
            }
        }
        
    }

};