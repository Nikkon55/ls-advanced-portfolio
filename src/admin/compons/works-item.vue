<template lang="pug">
    .works__item-inner
        .works__image
            img.works__pic(:src="photoUrl")
            ul.works__tags
                li.works__tag HTML
                li.works__tag JS
                li.works__tag css
        .works__desc
            h3.works__title {{work.title}}
            .works__text {{work.description}}
            a.works__link(:href="work.link") {{work.link}}
        .works__control
            button.works__btn.span-btn.span-btn--edit(@click.prevent="editworks=true")
                .span-btn__text Edit
                .span-btn__icon.span-btn__icon--edit
            button.works__btn.span-btn.span-btn--delete(@click.prevent="removeExistedWork")
                .span-btn__text Delete
                .span-btn__icon.span-btn__icon--delete
</template>

<script>
import { mapActions} from 'vuex';
import {getAbsoluteImgPath} from "../helpers/pictures";

export default {
  props: {
    work: Object,
    editworks: Boolean
	},
  data() {
    return {
        photoUrl: getAbsoluteImgPath(this.work.photo),
        editedWork: {...this.work}
		}
	},
    
    methods: {
        ...mapActions("works", ["deleteWork"]),
        async removeExistedWork(){
            try {
                await this.deleteWork(this.work.id);
            } catch (error) {
                
            }
        },
    }
}
</script>

<style lang="postcss">
    .works__item-inner{
        width: 100%;
    }
</style>