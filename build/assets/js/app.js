const popupBtn = document.getElementById('popup')

// const header = document.getElementById('header')

const body = document.querySelector('body')

const popupWindow = document.createElement('div')
popupWindow.classList.add('popup')
popupWindow.style.position = "fixed"

const popupTitle = document.createElement('h3')
popupTitle.classList.add('popup__title')
popupTitle.innerText = 'Быстро оставить заявку'

const popupTitleSuccess = document.createElement('h3')
popupTitle.classList.add('popup__title')
popupTitleSuccess.innerText = 'Спасибо, Ваша заявка отправлена'

const popupClose = document.createElement('span')
popupClose.classList.add('popup__close')
popupClose.innerHTML = '&#x2716'

const popupSubtitle = document.createElement('p')
popupSubtitle.classList.add('popup__subtitle')
popupSubtitle.innerText = 'Введите номер, мы позвоним вам в течение 10 минут в рабочее время'

const popupTime = document.createElement('p')
popupTime.classList.add('popup__time')
popupTime.innerText = 'Пн–Пт 9:00 - 18:00, Сб 10:00 - 18:00'

const popupForm = document.createElement('form')
popupForm.setAttribute("name", 'form')
popupForm.classList.add('popup__form')

const formLabel = document.createElement('label')
formLabel.setAttribute('for', 'tel')
formLabel.innerText = 'Введите номер телефона'
formLabel.classList.add('popup__form__label')

const formInput = document.createElement('input')
formInput.setAttribute('type', 'tel')
formInput.setAttribute('name', 'tel')
formInput.setAttribute('required', true)
formInput.setAttribute('pattern', "\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}")
formInput.setAttribute('placeholder', '+7 ( _ _ _) _ _ - _ _ - _ _')
formInput.classList.add("popup__form__input")

const formBtn = document.createElement('button')
formBtn.setAttribute('type', 'submit')
formBtn.classList.add('popup__form__btn')
formBtn.innerText = 'Позвоните мне'

const formLabelCheckbox = document.createElement('label')
formLabelCheckbox.setAttribute('for', 'checkbox')
formLabelCheckbox.classList.add('popup__form__labelcheckbox')
formLabelCheckbox.innerText = 'Нажимая кнопку вы соглашаетесь  с условиями Политики конфиденциальности'

const formInputCheckbox = document.createElement('input')
formInputCheckbox.setAttribute('type', 'checkbox')
formInputCheckbox.setAttribute('name', 'checkbox')
formInputCheckbox.classList.add('popup__form__checkbox')

function popupDraw() {
	body.after(popupWindow)
	popupWindow.prepend(popupTitle)
	popupTitle.prepend(popupClose)
	popupWindow.append(popupSubtitle)
	popupWindow.append(popupTime)
	popupWindow.append(popupForm)
	popupForm.prepend(formLabel)
	popupForm.append(formInput)
	popupForm.append(formBtn)
	popupForm.append(formInputCheckbox)
	popupForm.append(formLabelCheckbox)
	body.style.filter = 'grayscale(0.5) blur(5px)'

}

function popupDrawSucces() {
	popupTitle.innerText = 'Спасибо, Ваша заявка отправлена'
	body.after(popupWindow)
	popupWindow.prepend(popupTitle)
	popupTitle.prepend(popupClose)
	popupSubtitle.remove()
	popupTime.remove()
	popupForm.remove()
	body.style.filter = 'grayscale(0.5) blur(5px)'
}

popupBtn.addEventListener("click", function (event) {
	popupDraw()
	
})

popupClose.addEventListener("click", function (event) {
	popupWindow.remove()
	body.style.filter = 'none'
	
})

formBtn.addEventListener('click', function (event) {
	event.preventDefault()
	popupWindow.remove()
	popupDrawSucces()
	
})

//// adaptiv

const screenWidth = document.documentElement.width

const header = document.getElementById('header')
const headerBurger = document.getElementById('headerBurger')
const topboxItem = document.getElementById('topbox-item')
const topboxPriselist = document.getElementById('topbox-pricelist')
const topboxLogo = document.getElementById('topbox-logo')
const topboxSocial = document.getElementById('topbox-social')
const topboxContact = document.getElementById('topbox__contact')
const introText = document.getElementById('intro-main-text')
const introButtons = document.getElementById('intro-main-buttons')
const burgerBtnOpen = document.createElement('div')
burgerBtnOpen.classList.add('burger')
burgerBtnOpen.innerHTML = '&#x2630;'

const burgerBtnClose = document.createElement('div')
burgerBtnClose.classList.add('burger')
burgerBtnClose.innerHTML = '&#x2716;'

const burgerBox = document.createElement('div')

burgerBtnOpen.addEventListener('click', function(event) {
	burgerDraw()
	burgerBtnOpen.remove()
	topboxContact.after(burgerBtnClose)
})

burgerBtnClose.addEventListener('click', function () {
	burgerBox.remove()
	burgerBtnClose.remove()
	topboxContact.after(burgerBtnOpen)
})

function burgerDraw(params) {
	burgerBox.classList.add('burger__box')
	body.after(burgerBox)
	burgerBox.prepend(headerBurger)
	burgerBox.append(topboxItem)
	burgerBox.append(topboxPriselist)
	burgerBox.append(topboxSocial)
}


function changeScreenWidth(width) {
	if (width <= 992) {
		topboxItem.remove();
		topboxPriselist.remove();
		topboxSocial.remove();
		introText.remove()
		introButtons.before(introText)
		topboxContact.after(burgerBtnOpen)
		headerBurger.remove()
		header.remove()
	} else {
		body.prepend(header)
		header.prepend(headerBurger)
		topboxLogo.before(topboxItem)
		topboxLogo.before(topboxPriselist)
		topboxLogo.after(topboxSocial)
		burgerBtnOpen.remove()
	}
}

window.addEventListener('load', function (params) {
	let width = document.documentElement.clientWidth
	changeScreenWidth(width)
})

window.addEventListener('resize', function () {
	let width = document.documentElement.clientWidth
	changeScreenWidth(width)
	
	
})