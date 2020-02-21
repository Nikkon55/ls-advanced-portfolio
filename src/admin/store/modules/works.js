import {wrapIntoFormData} from "../../helpers/form";
export default {
    namespaced: true,
    state: {
        works:[]
    },
    mutations: {
        ADD_WORK: (state, work) => state.works.push(work),
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
        
    }

};