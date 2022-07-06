const regBtn = document.querySelector('.reg-btn')
const regForm = document.querySelector('.reg-form')
const modalOverlay = document.querySelector('.modal-overlay')

const explanationBtns = document.querySelectorAll('.explanation-btn')
const explanations = document.querySelectorAll('.reg-form__explanation')

const patronymicInput = document.querySelector('.patronymic-input')

// Управление состоянием модалки регистрации

regBtn.addEventListener('click', () => {
  regForm.classList.add('reg-form_active')
  modalOverlay.classList.add('modal-overlay_active')
})

modalOverlay.addEventListener('click', () => {
  regForm.classList.remove('reg-form_active')
  modalOverlay.classList.remove('modal-overlay_active')
})

// Управление состянием модалок с поясняющим текстом
explanationBtns.forEach(btn => {
  let explanation = btn.nextElementSibling
  explanation.addEventListener('click', () => {
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

regForm.addEventListener('input', (e) => {
  const inputTarget = e.target

  if (!inputTarget.validity.valid) {
    inputTarget.parentElement.classList.add('invalid')
  } else {
    inputTarget.parentElement.classList.remove('invalid')
  }
  if (inputTarget.value) {
    inputTarget.classList.add('reg-form__input_active')
  } else {
    inputTarget.classList.remove('reg-form__input_active')
  }
})

// Блокировка поля "Отчество" через чекбокс

const checkPatronymic = document.querySelector('[name="check-patronymic"]')
checkPatronymic.addEventListener('change', (e) => {
  patronymicInput.disabled = e.target.checked;
})

















