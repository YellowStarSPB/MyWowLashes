import React from "react"

function useValidateInput(setFormData) {

    //проверка на "чисты" инпут
    const [dirtyInput, setDirtyInput] = React.useState(
        {
            name: false,
            email: false,
            inst: false,
            phone: false,
            vk: false,
        })
    //проверка на валидность инпута
    const [validInput, setValidInput] = React.useState(
        {
            name: false,
            email: false,
            inst: false,
            phone: false,
            vk: false,
        })
    //Ошибка инпута
    const [inputError, setInputError] = React.useState(
        {
            name: 'Поле не может быть пустым',
            email: 'Поле не может быть пустым',
            inst: 'Поле не может быть пустым',
            phone: 'Поле не может быть пустым',
            vk: 'Поле не может быть пустым',
        })
    //Хэндлер меняющий состояние "чистого" инпута
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setDirtyInput({ ...dirtyInput, email: true })
                break
            case 'phone':
                setDirtyInput({ ...dirtyInput, phone: true })
                break
            case 'name':
                setDirtyInput({ ...dirtyInput, name: true })
                break
            case 'vk':
                setDirtyInput({ ...dirtyInput, vk: true })
                break
            case 'inst':
                setDirtyInput({ ...dirtyInput, inst: true })
                break
            default:

        }
    }
    //хэндлер валидации инпутов
    const handleChangeInput = (e) => {
        e.preventDefault()
        //email validation
        if (e.target.name === 'email') {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (e.target.value.length > 30) {
                e.target.value = e.target.value.slice(0, 30)
            }
            if (!re.test(String(e.target.value).toLowerCase())) {
                setInputError({ ...inputError, email: 'Некорректный E-mail' })
                setValidInput({ ...validInput, email: false })
            } else {
                setValidInput({ ...validInput, email: true })
                setInputError({ ...inputError, email: 'Отлично!' })
            }

            setFormData(prev => ({ ...prev, email: e.target.value }))
            //phone validation
        } else if (e.target.name === 'phone') {
            setFormData(prev => ({ ...prev, phone: e.target.value }))
            if (e.target.value.length < 16) {
                setInputError({ ...inputError, phone: 'Некорректный номер телефона' })
                setValidInput({ ...validInput, phone: false })
            } else {
                setValidInput({ ...validInput, phone: true })
                setInputError({ ...inputError, phone: 'Отлично!' })
            }
            //name validation
        } else if (e.target.name === 'name') {
            const re = /[^a-zA-Z+A-zА-яЁё\s]/g
            if (e.target.value.length > 16) {
                e.target.value = e.target.value.slice(0, 16)
            }
            e.target.value = e.target.value.replace(re, '')


            if (e.target.value.length < 2) {
                setInputError({ ...inputError, name: 'Поле должно быть не меньше 2 символов' })
                setValidInput({ ...validInput, name: false })
            } else {
                setValidInput({ ...validInput, name: true })
                setInputError({ ...inputError, name: 'Отлично!' })
            }

            setFormData(prev => ({ ...prev, name: e.target.value }))
            //vk validation
        } else if (e.target.name === 'vk') {

            const re = /[^a-zA-Z+A-zА-яЁё+0-9?:.\-/\s]/g
            if (e.target.value.length > 30) {
                e.target.value = e.target.value.slice(0, 30)
            }
            e.target.value = e.target.value.replace(re, '')

            if (e.target.value.length < 5) {
                setInputError({ ...inputError, vk: 'Поле должно быть не меньше 5 символов' })
                setValidInput({ ...validInput, vk: false })
            } else {
                setValidInput({ ...validInput, vk: true })
                setInputError({ ...inputError, vk: 'Отлично!' })
            }
            setFormData(prev => ({ ...prev, vk: e.target.value }))
            //inst validation
        } else if (e.target.name === 'inst') {

            const re = /[^a-zA-Z+A-zА-яЁё+0-9?:.\-/\s]/g
            if (e.target.value.length > 30) {
                e.target.value = e.target.value.slice(0, 30)
            }
            e.target.value = e.target.value.replace(re, '')

            if (e.target.value.length < 3) {
                setInputError({ ...inputError, inst: 'Поле должно быть не меньше 3 символов' })
                setValidInput({ ...validInput, inst: false })
            } else {
                setValidInput({ ...validInput, inst: true })
                setInputError({ ...inputError, inst: 'Отлично!' })
            }
            setFormData(prev => ({ ...prev, inst: e.target.value }))
            //message validation
        } else if (e.target.name === 'message') {

            const re = /[^a-zA-Z+A-zА-яЁё+0-9?:.\-/\s+]/g
            if (e.target.value.length > 100) {
                e.target.value = e.target.value.slice(0, 100)
            }
            e.target.value = e.target.value.replace(re, '')
            setFormData(prev => ({ ...prev, message: e.target.value }))
        }
    }

    return {
        handleChangeInput,
        blurHandler,
        inputError,
        validInput,
        dirtyInput,

    }
}
export default useValidateInput;
