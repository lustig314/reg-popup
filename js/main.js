const regBtn = document.querySelector('.reg-btn')
const regForm = document.querySelector('.reg-form')
const modalOverlay = document.querySelector('.modal-overlay')

const explanationBtns = document.querySelectorAll('.explanation-btn')
const explanations = document.querySelectorAll('.reg-form__explanation')

// Управление состоянием модалки регистрации

regBtn.addEventListener('click', () => {
  regForm.classList.add('reg-form_active')
  modalOverlay.classList.add('modal-overlay_active')
})

modalOverlay.addEventListener('click', (e) => {
  regForm.classList.remove('reg-form_active')
  modalOverlay.classList.remove('modal-overlay_active')
})

// Управление состянием модалок с поясняющим текстом
explanationBtns.forEach(btn => {
  let explanation = btn.nextElementSibling
  explanation.addEventListener('click', (e) => {
    if (explanation.classList.contains('reg-form__explanation_active')) {
      explanation.classList.remove('reg-form__explanation_active')
    }
  })
  btn.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path')
    explanations.forEach(el => el.classList.remove('reg-form__explanation_active'))
    document.querySelector(`[data-target="${path}"]`).classList.add('reg-form__explanation_active')
  })
})

// Валидация формы

const formInputsWrapper = document.querySelectorAll('.reg-form__input-wrapper')
const formInputs = document.querySelectorAll('.reg-form__input')
const errorMessage = document.querySelector('.error-message')
const lastNameInput = document.querySelector('[name="lastname"]')
const patronymicInput = document.querySelector('.patronymic-input')


regForm.addEventListener('input', (e) => {
  if (!e.target.validity.valid) {
    e.target.classList.add('reg-form__input_invalid')
  } else {
    e.target.classList.remove('reg-form__input_invalid')
  }
  const inputTarget = e.target
  if (inputTarget.value) {
    inputTarget.classList.add('reg-form__input_active')
  } else {
    inputTarget.classList.remove('reg-form__input_active')
  }
})


const checkPatronymic = document.querySelector('[name="check-patronymic"]')
checkPatronymic.addEventListener('change', (e) => {
  patronymicInput.disabled = e.target.checked;
})

















