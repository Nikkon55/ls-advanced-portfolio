import {wrapIntoFormData} from "../../helpers/form";
export default {
    namespaced: true,
    state: {
        works:[]
    },
    mutations: {
        ADD_WORK: (state, work) => state.work.push(work),
        SET_WORKS: (state, works) => (state.works = works),
        DELETE_WORK: (state, deletedWorkId) => {
            state.works = state.works.filter(
                work => work.id !== deletedWorkId
            );
        },
        EDIT_WORK: (state, editedWork) => {
            state.works = state.works.map(work => work.id === editedWork.id ? editedWork : work);
        }
    },
    
    actions:{
        async addWork({commit}, work){
            const data = wrapIntoFormData(work);
            try {
                const response = await this.$axios.post("/works", data);
                commit("ADD_WORK", response.data);
                return response;
            } catch (error) {
             throw new Error(error.response.data.error || error.response.data.message);
            }
        },
        async getWorks({commit}){
            try {
                const response = await this.$axios.get("/works/283");
                commit("SET_WORKS", response.data);
                return response;
             } catch (error) {
                 
             }
        },
        async deleteWork({ commit }, workId) {
            try {
              const response = await this.$axios.delete(`/works/${workId}`);
              commit("DELETE_WORK", workId);
              return response;
            } catch {
              
            }
        },

        async editWork({ commit }, editedWork) {
            const data = wrapIntoFormData(editedWork);
            try {
              const response = await this.$axios.post(`/works/${editedWork.id}`, data);
              commit("EDIT_WORK", response.data.work);
              return response;
            } catch (e) {
              
            }
          }
    }

};