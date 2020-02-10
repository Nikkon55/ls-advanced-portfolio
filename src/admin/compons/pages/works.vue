<template lang="pug">
    .works-big-section
        section.works
        .container
            .works__header
            h1.works__title.section__title Section "Portfolio"
            .works__content
            form.form.works__form
                .form__header
                h2.form__title Edit Portfolio
                .form__content.form__content--works
                .form__content-left
                    .form__row.form__row--upload
                    label.form__label-upload
                        .form__label-info Drag&Drop or choose the Image
                        input.form__file-upload(type="file")
                        button.form__file-btn.main-btn Upload
                .form__content-right
                    .form-row
                    label.form__label Project name
                        input.form__input(type="text" name="name")
                    .form-row
                    label.form__label Link
                        input.form__input(type="text" name="link")
                    .form-row
                    label.form__label Description
                        input.form__input.form__input--textarea(type="textarea" name="desc")
                    .form-row
                    label.form__label Add Tags
                        input.form__input.form__input--tags(type="text" name="text")
                    .form__tags
                        .form__tag-item
                        .form__tag-text HTML
                        .form__tag-icon
                        .form__tag-item
                        .form__tag-text HTML
                        .form__tag-icon
                        .form__tag-item
                        .form__tag-text HTML
                        .form__tag-icon
                        
                .form__controls
                button.form__reset-btn(type="reset") Cancel
                button.form__btn-submit.main-btn(type="submit") Submit

        section.works
        .container
            .works__preview
            a.works__add-btn.add-btn--square
                .works__add-btn-circle
                .works__add-btn-cross +
                .works__add-btn-text Add new project

            .works__item
                .works__image
                img.works__pic(src="../../../images/content/prew1.jpg")
                ul.works__tags
                    li.works__tag HTML
                    li.works__tag JS
                    li.works__tag css
                .works__desc
                h3.works__title Project name
                .works__text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dignissimos ducimus ea eaque earum eum impedit ipsam laborum, modi nemo officiis optio possimus recusandae repellendus sunt suscipit tenetur velit!
                a.works__link www.google.com
                .works__control
                button.works__btn.span-btn.span-btn--edit
                    .span-btn__text Edit
                    .span-btn__icon.span-btn__icon--edit
                button.works__btn.span-btn.span-btn--delete
                    .span-btn__text Delete
                    .span-btn__icon.span-btn__icon--delete
            .works__item
                .works__image
                img.works__pic(src="../../../images/content/prew1.jpg")
                ul.works__tags
                    li.works__tag HTML
                    li.works__tag JS
                    li.works__tag css
                .works__desc
                h3.works__title Project name
                .works__text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dignissimos ducimus ea eaque earum eum impedit ipsam laborum, modi nemo officiis optio possimus recusandae repellendus sunt suscipit tenetur velit!
                a.works__link www.google.com
                .works__control
                button.works__btn.span-btn.span-btn--edit
                    .span-btn__text Edit
                    .span-btn__icon.span-btn__icon--edit
                button.works__btn.span-btn.span-btn--delete
                    .span-btn__text Delete
                    .span-btn__icon.span-btn__icon--delete
            .works__item
                .works__image
                img.works__pic(src="../../../images/content/prew1.jpg")
                ul.works__tags
                    li.works__tag HTML
                    li.works__tag JS
                    li.works__tag css
                .works__desc
                h3.works__title Project name
                .works__text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dignissimos ducimus ea eaque earum eum impedit ipsam laborum, modi nemo officiis optio possimus recusandae repellendus sunt suscipit tenetur velit!
                a.works__link www.google.com
                .works__control
                button.works__btn.span-btn.span-btn--edit
                    .span-btn__text Edit
                    .span-btn__icon.span-btn__icon--edit
                button.works__btn.span-btn.span-btn--delete
                    .span-btn__text Delete
                    .span-btn__icon.span-btn__icon--delete

    
</template>

<style lang="postcss">

</style>