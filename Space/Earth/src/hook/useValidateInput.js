import React from "react"

function useValidateInput(currentDay, nextMonth) {
    //стейт метода связи
    const [checked, setChecked] = React.useState('Мессенджер')
    //стейт данных из формы
    const [formData, setFormData] = React.useState(
        {
            name: '',
            email: '',
            inst: '',
            phone: '',
            vk: '',
            date: `${new Date().toISOString().substring(0, 8)}${currentDay}`,
            time: '',
            message: '',
            methodConnect: 'Мессенджер',

        })
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
        }
    }
    //хэндлнер выбора метода связи
    const onSelectMethod = React.useCallback((value) => {
        setChecked(value)
        setFormData(prev => {
            return { ...prev, methodConnect: value }
        })
    }, [])
    //Функция изменения времени записи
    const onSelectTime = React.useCallback((time) => {
        setFormData(prev => {
            return { ...prev, time: time }
        })
    }, [])
    //Функция изменения дня записи
    const onSelectDate = React.useCallback((day) => {
        if (nextMonth) {
            setFormData(prev => {
                return { ...prev, date: `${new Date(new Date().getFullYear(), new Date().getMonth() + 2, 1).toISOString().substring(0, 8)}${day}` }
            })

        } else {
            setFormData(prev => {
                return { ...prev, date: `${new Date().toISOString().substring(0, 8)}${day}` }
            })
        }
    }, [nextMonth])

    //хэндлер валидации инпутов
    const handleChangeInput = (e) => {
        e.preventDefault()
        //email validation
        if (e.target.name === 'email') {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!re.test(String(e.target.value).toLowerCase())) {
                setInputError({ ...inputError, email: 'Некорректный E-mail' })
                setValidInput({ ...validInput, email: false })
            } else {
                setValidInput({ ...validInput, email: true })
                setInputError({ ...inputError, email: 'Отлично!' })
            }
            if (e.target.value.length > 30) {
                e.target.value = e.target.value.slice(0, 30)
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
            const re = /[^a-zA-Z+A-zА-яЁё]/g
            if (e.target.value.length > 16) {
                e.target.value = e.target.value.slice(0, 16)
            }
            e.target.value = e.target.value.replace(re, '')


            if (e.target.value.length < 1) {
                setInputError({ ...inputError, name: 'Поле должно быть не меньше 1 символа' })
                setValidInput({ ...validInput, name: false })
            } else {
                setValidInput({ ...validInput, name: true })
                setInputError({ ...inputError, name: 'Отлично!' })
            }

            setFormData(prev => ({ ...prev, name: e.target.value }))
            //vk validation
        } else if (e.target.name === 'vk') {

            const re = /[^a-zA-Z+A-zА-яЁё+0-9]/g
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

            const re = /[^a-zA-Z+A-zА-яЁё+0-9]/g
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

            const re = /[^a-zA-Z+A-zА-яЁё+0-9]/g
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
        onSelectMethod,
        onSelectTime,
        onSelectDate,
        inputError,
        validInput,
        dirtyInput,
        formData,
        checked,
    }
}
export default useValidateInput;
